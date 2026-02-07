import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String, // You can use a Rich Text Editor on the frontend
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: {
    type: String, // URL from Cloudinary
    required: false
  },
  cloudinaryId: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);
export default Article;