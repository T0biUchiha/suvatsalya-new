import multer from 'multer';
import { articleStorage } from '../config/cloudinary.js'; // REMOVED 'bannerStorage'

// Configure multer for article image uploads
const uploadArticleImage = multer({
  storage: articleStorage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single('image');

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|webp/;
  // Check ext
  const extname = filetypes.test(file.originalname.toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

export { uploadArticleImage }; // REMOVED 'uploadBanner'