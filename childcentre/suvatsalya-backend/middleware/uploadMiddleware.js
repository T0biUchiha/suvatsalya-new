import multer from 'multer';
import { articleStorage, benefitImageStorage, benefitPdfStorage, storyImageStorage } from '../config/cloudinary.js';

// Configure multer for article image uploads
const uploadArticleImage = multer({
  storage: articleStorage,
  fileFilter: (req, file, cb) => {
    checkImageType(file, cb);
  }
}).single('image');

// Configure multer for benefit uploads (image + pdf, both optional)
const uploadBenefitFiles = multer({
  storage: multer.memoryStorage(), // temporary; we handle uploads manually in the route
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'image') {
      checkImageType(file, cb);
    } else if (file.fieldname === 'pdf') {
      checkPdfType(file, cb);
    } else {
      cb(null, false);
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'pdf', maxCount: 1 },
]);

// Dedicated multer instances for individual benefit file uploads (used in routes)
const uploadBenefitImage = multer({
  storage: benefitImageStorage,
  fileFilter: (req, file, cb) => {
    checkImageType(file, cb);
  }
}).single('image');

const uploadBenefitPdf = multer({
  storage: benefitPdfStorage,
  fileFilter: (req, file, cb) => {
    checkPdfType(file, cb);
  }
}).single('pdf');

// Check image file type
function checkImageType(file, cb) {
  const filetypes = /jpeg|jpg|png|webp/;
  const extname = filetypes.test(file.originalname.toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Check PDF file type
function checkPdfType(file, cb) {
  const filetypes = /pdf/;
  const extname = filetypes.test(file.originalname.toLowerCase());
  const mimetype = /pdf/.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: PDF files only!');
  }
}

const uploadStoryImage = multer({
  storage: storyImageStorage,
  fileFilter: (req, file, cb) => {
    checkImageType(file, cb);
  }
}).single('image');

export { uploadArticleImage, uploadBenefitFiles, uploadBenefitImage, uploadBenefitPdf, uploadStoryImage };
