import express from 'express';
import Career from '../models/Career.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// --- GET route (This one is fine, no changes needed) ---
router.get('/', async (req, res) => {
  try {
    let careerData = await Career.findOne({ key: 'careerLink' });
    if (!careerData) {
      careerData = new Career(); // Will use new defaults
      await careerData.save();
    }
    res.status(200).json(careerData);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// --- PUT route (Update this) ---
router.put('/', protect, async (req, res) => {
  const { googleFormUrl, isAccepting } = req.body; // 1. Get both fields

  try {
    const updatedData = await Career.findOneAndUpdate(
      { key: 'careerLink' },
      { googleFormUrl, isAccepting }, // 2. Save both fields
      { 
        new: true,
        upsert: true,
        runValidators: true 
      }
    );
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

export default router;