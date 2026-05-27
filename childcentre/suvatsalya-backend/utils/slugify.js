import Article from '../models/Article.js';

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function generateUniqueSlug(title, excludeId = null) {
  const base = slugify(title) || 'article';
  let slug = base;
  let counter = 1;

  while (true) {
    const query = { slug };
    if (excludeId) {
      query._id = { $ne: excludeId };
    }
    const existing = await Article.findOne(query);
    if (!existing) {
      return slug;
    }
    counter += 1;
    slug = `${base}-${counter}`;
  }
}

export function isValidSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return false;
  }
  const trimmed = slug.trim();
  if (!trimmed || trimmed === 'undefined' || trimmed === 'null') {
    return false;
  }
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(trimmed);
}

export async function ensureArticleSlug(article) {
  if (isValidSlug(article.slug)) {
    return article;
  }
  article.slug = await generateUniqueSlug(article.title, article._id);
  await article.save();
  return article;
}

export async function backfillAllArticleSlugs() {
  const articles = await Article.find();
  let updated = 0;

  for (const article of articles) {
    if (!isValidSlug(article.slug)) {
      article.slug = await generateUniqueSlug(article.title, article._id);
      await article.save();
      updated += 1;
    }
  }

  if (updated > 0) {
    console.log(`Backfilled slugs for ${updated} article(s).`);
  }

  return updated;
}
