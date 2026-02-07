import express from 'express';
import Story from '../models/Story.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ---
// PUBLIC: GET ALL STORIES
// GET /api/stories
// ---
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: GET A SINGLE STORY (for editing)
// GET /api/stories/:id
// ---
router.get('/:id', protect, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: CREATE A NEW STORY
// POST /api/stories
// ---
router.post('/', protect, async (req, res) => {
  const { title, story, imageName } = req.body;
  if (!title || !story || !imageName) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const newStory = new Story({ title, story, imageName });
    const savedStory = await newStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: UPDATE A STORY
// PUT /api/stories/:id
// ---
router.put('/:id', protect, async (req, res) => {
  const { title, story, imageName } = req.body;
  try {
    const updatedStory = await Story.findByIdAndUpdate(
      req.params.id,
      { title, story, imageName },
      { new: true, runValidators: true }
    );
    if (!updatedStory) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: DELETE A STORY
// DELETE /api/stories/:id
// ---
router.delete('/:id', protect, async (req, res) => {
  try {
    const deletedStory = await Story.findByIdAndDelete(req.params.id);
    if (!deletedStory) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

export default router;