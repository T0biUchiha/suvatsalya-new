import mongoose from 'mongoose';
import { PLATFORM_IDS } from '../constants/socialPlatforms.js';

const linkFields = {};
for (const id of PLATFORM_IDS) {
  linkFields[id] = { type: String, default: '', trim: true };
}

const socialLinksSchema = new mongoose.Schema(linkFields, { timestamps: true });

const SocialLinks = mongoose.model('SocialLinks', socialLinksSchema);

export async function getSocialLinksDoc() {
  let doc = await SocialLinks.findOne();
  if (!doc) {
    doc = await SocialLinks.create({});
  }
  return doc;
}

export default SocialLinks;
