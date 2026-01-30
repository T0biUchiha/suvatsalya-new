import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Import routes
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';
import articleRoutes from './routes/articles.js';
import careerRoutes from './routes/career.js';
import storyRoutes from './routes/stories.js';
import statsRoutes from './routes/stats.js'; // 1. IMPORT THE NEW ROUTE

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// --- Middlewares ---
// Enable CORS for your frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/stats', statsRoutes); // 2. ADD THE NEW ROUTE

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});