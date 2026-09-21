import express from "express";
import Benefit from "../models/Benefit.js";
import { protect } from "../middleware/authMiddleware.js";
import { cloudinary } from "../config/cloudinary.js";
import multer from "multer";
import { sanitizeCmsText } from "../utils/sanitizeText.js";
import { resolvePdfFileName } from "../utils/pdfDownload.js";
import { destroyByIdOrUrl } from "../utils/cloudinaryAsset.js";
import {
  ensureBenefitSlug,
  generateUniqueBenefitSlug,
} from "../utils/slugify.js";
import mongoose from "mongoose";

const router = express.Router();

// Helper: upload with multer fields (image + pdf)
const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "image") {
      const extOk = /\.(jpe?g|png|webp)$/i.test(file.originalname);
      const mimeOk = /^image\/(jpeg|jpg|png|webp)$/i.test(file.mimetype);
      if (mimeOk && extOk) {
        return cb(null, true);
      }
      return cb(new Error("Only JPG, PNG, or WEBP images are allowed."));
    }
    if (file.fieldname === "pdf") {
      const extOk = /\.pdf$/i.test(file.originalname);
      const mimeOk = file.mimetype === "application/pdf";
      if (mimeOk && extOk) {
        return cb(null, true);
      }
      return cb(new Error("Only PDF documents are allowed."));
    }
    cb(null, false);
  },
  limits: { fileSize: 10 * 1024 * 1024 },
}).fields([
  { name: "image", maxCount: 1 },
  { name: "pdf", maxCount: 1 },
]);

async function uploadBenefitPdf(file, title) {
  const pdfFileName = resolvePdfFileName(file.originalname, title);
  const pdfResult = await cloudinary.uploader.upload(file.path, {
    folder: "suvatsalya/benefits/pdfs",
    resource_type: "raw",
    use_filename: true,
    unique_filename: true,
  });
  return {
    pdfUrl: pdfResult.secure_url,
    cloudinaryPdfId: pdfResult.public_id,
    pdfFileName,
  };
}

// ---
// PUBLIC: GET ALL BENEFITS
// GET /api/benefits
// ---
router.get("/", async (req, res) => {
  try {
    const benefits = await Benefit.find().sort({ createdAt: -1 });
    await Promise.all(benefits.map((benefit) => ensureBenefitSlug(benefit)));
    res.status(200).json(benefits);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// PUBLIC: GET A SINGLE BENEFIT
// GET /api/benefits/:id
// ---
router.get("/:slug", async (req, res) => {
  try {
    let benefit = await Benefit.findOne({ slug: req.params.slug });
    if (!benefit && mongoose.isValidObjectId(req.params.slug)) {
      benefit = await Benefit.findById(req.params.slug);
    }
    if (!benefit) {
      return res.status(404).json({ message: "Benefit not found" });
    }
    benefit = await ensureBenefitSlug(benefit);
    res.status(200).json(benefit);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: CREATE A NEW BENEFIT
// POST /api/benefits
// ---
router.post("/", protect, upload, async (req, res) => {
  try {
    const { title, description, websiteLink } = req.body;

    const benefitData = {
      title,
      description: sanitizeCmsText(description),
      slug: await generateUniqueBenefitSlug(title),
    };

    if (websiteLink) {
      benefitData.websiteLink = websiteLink;
    }

    if (req.files?.image?.[0]) {
      const imageResult = await cloudinary.uploader.upload(
        req.files.image[0].path,
        {
          folder: "suvatsalya/benefits/images",
        },
      );
      benefitData.imageUrl = imageResult.secure_url;
      benefitData.cloudinaryImageId = imageResult.public_id;
    }

    if (req.files?.pdf?.[0]) {
      Object.assign(
        benefitData,
        await uploadBenefitPdf(req.files.pdf[0], title),
      );
    }

    const newBenefit = new Benefit(benefitData);
    const savedBenefit = await newBenefit.save();
    res.status(201).json(savedBenefit);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: UPDATE A BENEFIT
// PUT /api/benefits/:id
// ---
router.put("/:id", protect, upload, async (req, res) => {
  try {
    const benefit = await Benefit.findById(req.params.id);
    if (!benefit) {
      return res.status(404).json({ message: "Benefit not found" });
    }

    const { title, description, websiteLink, removeImage, removePdf } =
      req.body;

    if (title) benefit.title = title;
    if (description !== undefined)
      benefit.description = sanitizeCmsText(description);
    benefit.websiteLink = websiteLink || "";

    if (req.files?.image?.[0]) {
      if (benefit.cloudinaryImageId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryImageId);
      }
      const imageResult = await cloudinary.uploader.upload(
        req.files.image[0].path,
        {
          folder: "suvatsalya/benefits/images",
        },
      );
      benefit.imageUrl = imageResult.secure_url;
      benefit.cloudinaryImageId = imageResult.public_id;
    } else if (removeImage === "true") {
      if (benefit.cloudinaryImageId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryImageId);
      }
      benefit.imageUrl = "";
      benefit.cloudinaryImageId = "";
    }

    if (req.files?.pdf?.[0]) {
      if (benefit.cloudinaryPdfId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryPdfId, {
          resource_type: "raw",
        });
      }
      const pdfData = await uploadBenefitPdf(req.files.pdf[0], benefit.title);
      benefit.pdfUrl = pdfData.pdfUrl;
      benefit.cloudinaryPdfId = pdfData.cloudinaryPdfId;
      benefit.pdfFileName = pdfData.pdfFileName;
    } else if (removePdf === "true") {
      if (benefit.cloudinaryPdfId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryPdfId, {
          resource_type: "raw",
        });
      }
      benefit.pdfUrl = "";
      benefit.cloudinaryPdfId = "";
      benefit.pdfFileName = "";
    }

    const updatedBenefit = await benefit.save();
    res.status(200).json(updatedBenefit);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: DELETE A BENEFIT
// DELETE /api/benefits/:id
// ---
router.delete("/:id", protect, async (req, res) => {
  try {
    const benefit = await Benefit.findById(req.params.id);
    if (!benefit) {
      return res.status(404).json({ message: "Benefit not found" });
    }

    await destroyByIdOrUrl(
      benefit.cloudinaryImageId,
      benefit.imageUrl,
      "image",
    );
    await destroyByIdOrUrl(benefit.cloudinaryPdfId, benefit.pdfUrl, "raw");

    await benefit.deleteOne();
    res.status(200).json({ message: "Benefit deleted" });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

export default router;
