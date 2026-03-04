import mongoose from 'mongoose';

const benefitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  cloudinaryImageId: {
    type: String,
    required: false,
  },
  pdfUrl: {
    type: String,
    required: false,
  },
  cloudinaryPdfId: {
    type: String,
    required: false,
  },
  websiteLink: {
    type: String,
    required: false,
    trim: true,
  },
}, { timestamps: true });

const Benefit = mongoose.model('Benefit', benefitSchema);
export default Benefit;
