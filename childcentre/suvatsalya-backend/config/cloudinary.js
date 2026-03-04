import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure storage for article images
const articleStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'suvatsalya/articles',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

// Configure storage for benefit images
const benefitImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'suvatsalya/benefits/images',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

// Configure storage for benefit PDFs
const benefitPdfStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'suvatsalya/benefits/pdfs',
    allowed_formats: ['pdf'],
    resource_type: 'raw',
  },
});

const storyImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'suvatsalya/stories',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

export { cloudinary, articleStorage, benefitImageStorage, benefitPdfStorage, storyImageStorage };
