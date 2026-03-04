import express from 'express';
import Benefit from '../models/Benefit.js';
import { protect } from '../middleware/authMiddleware.js';
import { cloudinary } from '../config/cloudinary.js';
import { uploadBenefitImage, uploadBenefitPdf } from '../middleware/uploadMiddleware.js';
import multer from 'multer';
import { benefitImageStorage, benefitPdfStorage } from '../config/cloudinary.js';

const router = express.Router();

// Helper: upload with multer fields (image + pdf)
const upload = multer({
  storage: multer.diskStorage({}), // temp disk storage
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'image') {
      const allowed = /jpeg|jpg|png|webp/;
      if (allowed.test(file.mimetype) && allowed.test(file.originalname.toLowerCase())) {
        return cb(null, true);
      }
      return cb('Error: Images only!');
    }
    if (file.fieldname === 'pdf') {
      if (/pdf/.test(file.mimetype)) {
        return cb(null, true);
      }
      return cb('Error: PDF files only!');
    }
    cb(null, false);
  },
  limits: { fileSize: 10 * 1024 * 1024 },
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'pdf', maxCount: 1 },
]);

// ---
// PUBLIC: GET ALL BENEFITS
// GET /api/benefits
// ---
router.get('/', async (req, res) => {
  try {
    const benefits = await Benefit.find().sort({ createdAt: -1 });
    res.status(200).json(benefits);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// PUBLIC: GET A SINGLE BENEFIT
// GET /api/benefits/:id
// ---
router.get('/:id', async (req, res) => {
  try {
    const benefit = await Benefit.findById(req.params.id);
    if (!benefit) {
      return res.status(404).json({ message: 'Benefit not found' });
    }
    res.status(200).json(benefit);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: CREATE A NEW BENEFIT
// POST /api/benefits
// ---
router.post('/', protect, upload, async (req, res) => {
  try {
    const { title, description, websiteLink } = req.body;

    const benefitData = { title, description };

    if (websiteLink) {
      benefitData.websiteLink = websiteLink;
    }

    // Upload image to Cloudinary if provided
    if (req.files && req.files.image && req.files.image[0]) {
      const imageResult = await cloudinary.uploader.upload(req.files.image[0].path, {
        folder: 'suvatsalya/benefits/images',
      });
      benefitData.imageUrl = imageResult.secure_url;
      benefitData.cloudinaryImageId = imageResult.public_id;
    }

    // Upload PDF to Cloudinary if provided
    if (req.files && req.files.pdf && req.files.pdf[0]) {
      const pdfResult = await cloudinary.uploader.upload(req.files.pdf[0].path, {
        folder: 'suvatsalya/benefits/pdfs',
        resource_type: 'raw',
      });
      benefitData.pdfUrl = pdfResult.secure_url;
      benefitData.cloudinaryPdfId = pdfResult.public_id;
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
router.put('/:id', protect, upload, async (req, res) => {
  try {
    const benefit = await Benefit.findById(req.params.id);
    if (!benefit) {
      return res.status(404).json({ message: 'Benefit not found' });
    }

    const { title, description, websiteLink, removeImage, removePdf } = req.body;

    if (title) benefit.title = title;
    if (description) benefit.description = description;
    benefit.websiteLink = websiteLink || '';

    // Handle image update
    if (req.files && req.files.image && req.files.image[0]) {
      // Delete old image from Cloudinary
      if (benefit.cloudinaryImageId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryImageId);
      }
      const imageResult = await cloudinary.uploader.upload(req.files.image[0].path, {
        folder: 'suvatsalya/benefits/images',
      });
      benefit.imageUrl = imageResult.secure_url;
      benefit.cloudinaryImageId = imageResult.public_id;
    } else if (removeImage === 'true') {
      if (benefit.cloudinaryImageId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryImageId);
      }
      benefit.imageUrl = '';
      benefit.cloudinaryImageId = '';
    }

    // Handle PDF update
    if (req.files && req.files.pdf && req.files.pdf[0]) {
      // Delete old PDF from Cloudinary
      if (benefit.cloudinaryPdfId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryPdfId, { resource_type: 'raw' });
      }
      const pdfResult = await cloudinary.uploader.upload(req.files.pdf[0].path, {
        folder: 'suvatsalya/benefits/pdfs',
        resource_type: 'raw',
      });
      benefit.pdfUrl = pdfResult.secure_url;
      benefit.cloudinaryPdfId = pdfResult.public_id;
    } else if (removePdf === 'true') {
      if (benefit.cloudinaryPdfId) {
        await cloudinary.uploader.destroy(benefit.cloudinaryPdfId, { resource_type: 'raw' });
      }
      benefit.pdfUrl = '';
      benefit.cloudinaryPdfId = '';
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
router.delete('/:id', protect, async (req, res) => {
  try {
    const benefit = await Benefit.findById(req.params.id);
    if (!benefit) {
      return res.status(404).json({ message: 'Benefit not found' });
    }

    // Delete image from Cloudinary
    if (benefit.cloudinaryImageId) {
      await cloudinary.uploader.destroy(benefit.cloudinaryImageId);
    }
    // Delete PDF from Cloudinary
    if (benefit.cloudinaryPdfId) {
      await cloudinary.uploader.destroy(benefit.cloudinaryPdfId, { resource_type: 'raw' });
    }

    await benefit.deleteOne();
    res.status(200).json({ message: 'Benefit deleted' });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

export default router;
