import express from 'express';
import Article from '../models/Article.js';
import { protect } from '../middleware/authMiddleware.js';
import { uploadArticleImage } from '../middleware/uploadMiddleware.js';
import { cloudinary } from '../config/cloudinary.js';

const router = express.Router();

// ---
// PUBLIC: GET ALL ARTICLES
// GET /api/articles
// ---
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().populate('author', 'username').sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// PUBLIC: GET A SINGLE ARTICLE BY SLUG
// GET /api/articles/:slug
// ---
router.get('/:slug', async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug }).populate('author', 'username');
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: CREATE A NEW ARTICLE
// POST /api/articles
// ---
router.post('/', protect, uploadArticleImage, async (req, res) => {
  const { title, content, slug } = req.body;
  try {
    const newArticle = new Article({
      title,
      content,
      slug,
      author: req.user._id,
      imageUrl: req.file ? req.file.path : undefined,
      cloudinaryId: req.file ? req.file.filename : undefined,
    });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: DELETE AN ARTICLE
// DELETE /api/articles/:id
// ---
router.delete('/:id', protect, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    // Delete image from Cloudinary if it exists
    if (article.cloudinaryId) {
      await cloudinary.uploader.destroy(article.cloudinaryId);
    }
    await article.deleteOne();
    res.status(200).json({ message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// Note: You can also add PUT routes for updating articles.

export default router;