import express from 'express';
import Story from '../models/Story.js';
import { protect } from '../middleware/authMiddleware.js';
import { uploadStoryImage } from '../middleware/uploadMiddleware.js';

const router = express.Router();

// PUBLIC: GET ALL STORIES
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ADMIN: GET A SINGLE STORY
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

// ADMIN: CREATE A NEW STORY (with image upload)
router.post('/', protect, (req, res) => {
  uploadStoryImage(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: `Upload error: ${err}` });
    }

    const { title, story } = req.body;
    if (!title || !story) {
      return res.status(400).json({ message: 'Title and story are required.' });
    }

    try {
      const newStory = new Story({
        title,
        story,
        imageUrl: req.file ? req.file.path : '',
        imageName: req.file ? req.file.originalname : '',
      });
      const savedStory = await newStory.save();
      res.status(201).json(savedStory);
    } catch (error) {
      res.status(500).json({ message: `Server error: ${error.message}` });
    }
  });
});

// ADMIN: UPDATE A STORY (with optional image upload)
router.put('/:id', protect, (req, res) => {
  uploadStoryImage(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: `Upload error: ${err}` });
    }

    const { title, story } = req.body;
    const updateData = { title, story };

    if (req.file) {
      updateData.imageUrl = req.file.path;
      updateData.imageName = req.file.originalname;
    }

    try {
      const updatedStory = await Story.findByIdAndUpdate(
        req.params.id,
        updateData,
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
});

// ADMIN: DELETE A STORY
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
