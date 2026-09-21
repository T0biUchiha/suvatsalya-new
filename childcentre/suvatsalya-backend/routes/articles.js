import express from "express";
import Article from "../models/Article.js";
import { protect } from "../middleware/authMiddleware.js";
import { uploadArticleImage } from "../middleware/uploadMiddleware.js";
import { generateUniqueSlug, ensureArticleSlug } from "../utils/slugify.js";
import { sanitizeArticleHtml } from "../utils/sanitizeText.js";
import {
  getPublicIdFromMulterFile,
  destroyByIdOrUrl,
} from "../utils/cloudinaryAsset.js";

const router = express.Router();

// ---
// PUBLIC: GET ALL ARTICLES
// GET /api/articles
// ---
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });
    await Promise.all(articles.map((article) => ensureArticleSlug(article)));
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// PUBLIC: GET A SINGLE ARTICLE BY SLUG
// GET /api/articles/:slug
// ---
router.get("/:slug", async (req, res) => {
  try {
    let article = await Article.findOne({ slug: req.params.slug }).populate(
      "author",
      "username",
    );
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    article = await ensureArticleSlug(article);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: CREATE A NEW ARTICLE
// POST /api/articles
// ---
router.post("/", protect, uploadArticleImage, async (req, res) => {
  const { title, content } = req.body;
  try {
    const slug = await generateUniqueSlug(title);
    const imagePublicId = req.file
      ? getPublicIdFromMulterFile(req.file)
      : undefined;
    const newArticle = new Article({
      title,
      content: sanitizeArticleHtml(content),
      slug,
      author: req.user._id,
      imageUrl: req.file ? req.file.path : undefined,
      cloudinaryId: imagePublicId,
    });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ADMIN: UPDATE AN ARTICLE
router.put("/:id", protect, uploadArticleImage, async (req, res) => {
  const { title, content } = req.body;
  try {
    const existing = await Article.findById(req.params.id);
    if (!existing)
      return res.status(404).json({ message: "Article not found" });

    const updateData = {
      title,
      content: sanitizeArticleHtml(content),
    };
    if (req.file) {
      await destroyByIdOrUrl(existing.cloudinaryId, existing.imageUrl, "image");
      updateData.imageUrl = req.file.path;
      updateData.cloudinaryId = getPublicIdFromMulterFile(req.file);
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: DELETE AN ARTICLE
// DELETE /api/articles/:id
// ---
router.delete("/:id", protect, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    await destroyByIdOrUrl(article.cloudinaryId, article.imageUrl, "image");
    await article.deleteOne();
    res.status(200).json({ message: "Article deleted" });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// Note: You can also add PUT routes for updating articles.

export default router;
