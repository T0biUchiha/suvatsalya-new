import express from "express";
import mongoose from "mongoose";
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

function parseRelatedArticleIds(value, currentArticleId) {
  if (!value) return [];

  let ids;
  try {
    ids = JSON.parse(value);
  } catch {
    throw new Error("Related articles must be a valid list.");
  }

  if (!Array.isArray(ids) || ids.length > 4) {
    throw new Error("Select up to four related articles.");
  }

  const uniqueIds = [...new Set(ids.map(String))].filter(
    (id) => mongoose.Types.ObjectId.isValid(id) && id !== String(currentArticleId || ""),
  );
  if (uniqueIds.length !== ids.length) {
    throw new Error("One or more related articles are invalid.");
  }
  return uniqueIds;
}

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
    let article = await Article.findOne({ slug: req.params.slug })
      .populate("author", "username")
      .populate("relatedArticles", "title slug imageUrl");
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
  const { title, content, relatedArticleIds } = req.body;
  try {
    const slug = await generateUniqueSlug(title);
    const relatedArticles = parseRelatedArticleIds(relatedArticleIds);
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
      relatedArticles,
    });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ADMIN: UPDATE AN ARTICLE
router.put("/:id", protect, uploadArticleImage, async (req, res) => {
  const { title, content, relatedArticleIds } = req.body;
  try {
    const existing = await Article.findById(req.params.id);
    if (!existing)
      return res.status(404).json({ message: "Article not found" });

    const updateData = {
      title,
      content: sanitizeArticleHtml(content),
      relatedArticles: parseRelatedArticleIds(relatedArticleIds, existing._id),
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
    res.status(400).json({ message: error.message });
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
    await Article.updateMany(
      { relatedArticles: article._id },
      { $pull: { relatedArticles: article._id } },
    );
    await article.deleteOne();
    res.status(200).json({ message: "Article deleted" });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// Note: You can also add PUT routes for updating articles.

export default router;
