import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getSocialLinksDoc } from '../models/SocialLinks.js';
import { SOCIAL_PLATFORMS, PLATFORM_IDS } from '../constants/socialPlatforms.js';

const router = express.Router();

function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function toPublicLinks(doc) {
  const links = {};
  for (const { id } of SOCIAL_PLATFORMS) {
    const url = doc[id]?.trim();
    if (url) {
      links[id] = url;
    }
  }
  return links;
}

function toAdminPlatforms(doc) {
  return SOCIAL_PLATFORMS.map(({ id, label }) => ({
    id,
    label,
    url: doc[id]?.trim() || '',
  }));
}

// PUBLIC: links that have a URL only
router.get('/', async (req, res) => {
  try {
    const doc = await getSocialLinksDoc();
    res.status(200).json(toPublicLinks(doc));
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ADMIN: all platforms with current values
router.get('/admin', protect, async (req, res) => {
  try {
    const doc = await getSocialLinksDoc();
    res.status(200).json({ platforms: toAdminPlatforms(doc) });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ADMIN: update links
router.put('/', protect, async (req, res) => {
  try {
    const doc = await getSocialLinksDoc();
    const updates = req.body.links || req.body;

    for (const id of PLATFORM_IDS) {
      if (id in updates) {
        const value = updates[id]?.trim() || '';
        if (value && !isValidUrl(value)) {
          return res.status(400).json({ message: `Invalid URL for ${id}. Use http:// or https://` });
        }
        doc[id] = value;
      }
    }

    await doc.save();
    res.status(200).json({
      message: 'Social links updated',
      platforms: toAdminPlatforms(doc),
    });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

export default router;
