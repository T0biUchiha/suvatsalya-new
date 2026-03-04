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
import statsRoutes from './routes/stats.js';
import benefitRoutes from './routes/benefits.js';

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// --- Middlewares ---
// Enable CORS for your frontend
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : [];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
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
app.use('/api/stats', statsRoutes);
app.use('/api/benefits', benefitRoutes);

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});