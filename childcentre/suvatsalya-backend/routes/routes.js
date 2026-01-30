import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import ContactForm from '../models/ContactForm.js';
import Article from '../models/Article.js';
import Story from '../models/Story.js';

const router = express.Router();

// ---
// ADMIN: GET ADMIN DASHBOARD STATS
// GET /api/stats
// ---
router.get('/', protect, async (req, res) => {
  try {
    // We run the counts in parallel for speed
    const [contactCount, newContactCount, articleCount, storyCount] = await Promise.all([
      ContactForm.countDocuments(),
      ContactForm.countDocuments({ isRead: false }),
      Article.countDocuments(),
      Story.countDocuments()
    ]);

    res.json({
      contactCount,
      newContactCount,
      articleCount,
      storyCount,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;