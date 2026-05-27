import multer from 'multer';
import { articleStorage, storyImageStorage } from '../config/cloudinary.js';

const uploadArticleImage = multer({
  storage: articleStorage,
  fileFilter: (req, file, cb) => {
    checkImageType(file, cb);
  },
}).single('image');

function checkImageType(file, cb) {
  const extname = /\.(jpe?g|png|webp)$/i.test(file.originalname);
  const mimetype = /^image\/(jpeg|jpg|png|webp)$/i.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only JPG, PNG, or WEBP images are allowed.'));
}

const uploadStoryImage = multer({
  storage: storyImageStorage,
  fileFilter: (req, file, cb) => {
    checkImageType(file, cb);
  },
}).single('image');

export { uploadArticleImage, uploadStoryImage };
