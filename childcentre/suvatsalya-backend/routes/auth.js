import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ---
// !! IMPORTANT: ONE-TIME ADMIN SETUP
// Run this endpoint *once* (e.g., via Postman) to create your admin user.
// POST /api/auth/setup
// ---
router.post('/setup', async (req, res) => {
  try {
    const adminExists = await User.findOne({ username: 'Admin' });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin user already exists' });
    }

    const adminUser = new User({
      username: 'Admin',
      password: 'suvatsalya' // Will be hashed by the 'pre-save' hook in the model
    });

    await adminUser.save();
    res.status(201).json({ message: 'Admin user created successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error creating admin: ${error.message}` });
  }
});


// ---
// ADMIN LOGIN
// POST /api/auth/login
// ---
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      // Create token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d', // Token expires in 1 day
      });

      res.json({
        _id: user._id,
        username: user.username,
        token: token,
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// GET CURRENT LOGGED-IN USER
// GET /api/auth/me
// ---
router.get('/me', protect, async (req, res) => {
  // req.user is attached by the 'protect' middleware
  res.status(200).json(req.user);
});

export default router;