import { cloudinary } from '../config/cloudinary.js';

/** public_id from multer-storage-cloudinary file object */
export function getPublicIdFromMulterFile(file) {
  if (!file) {
    return null;
  }
  if (file.filename) {
    return file.filename;
  }
  if (file.public_id) {
    return file.public_id;
  }
  return extractPublicIdFromUrl(file.path);
}

/** Extract public_id from a Cloudinary delivery URL */
export function extractPublicIdFromUrl(url) {
  if (!url || typeof url !== 'string') {
    return null;
  }

  const clean = url.split('?')[0];
  const uploadMatch = clean.match(/\/(?:image|raw|video)\/upload\/(?:[^/]+\/)*(.*?)$/);
  if (!uploadMatch) {
    return null;
  }

  let publicId = uploadMatch[1];
  // Drop file extension for image/raw assets (keep folder segments)
  publicId = publicId.replace(/\.[a-zA-Z0-9]+$/, '');
  return publicId || null;
}

export async function destroyCloudinaryAsset(publicId, resourceType = 'image') {
  if (!publicId) {
    return;
  }
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
  } catch (err) {
    console.error(`Cloudinary destroy failed (${resourceType}):`, publicId, err.message);
  }
}

/** Destroy using stored id, with URL fallback */
export async function destroyByIdOrUrl(cloudinaryId, url, resourceType = 'image') {
  const publicId = cloudinaryId || extractPublicIdFromUrl(url);
  await destroyCloudinaryAsset(publicId, resourceType);
}
