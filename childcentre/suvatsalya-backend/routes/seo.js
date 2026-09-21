import express from "express";
import Article from "../models/Article.js";
import Story from "../models/Story.js";
import Benefit from "../models/Benefit.js";

const router = express.Router();
const siteUrl = (
  process.env.PUBLIC_SITE_URL || "https://suvatsalya.in"
).replace(/\/$/, "");
const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/what-we-treat",
  "/what-we-treat/autism",
  "/what-we-treat/adhd",
  "/what-we-treat/learning-disability",
  "/what-we-treat/cerebral-palsy",
  "/what-we-treat/down-syndrome",
  "/what-we-treat/gdd",
  "/what-we-treat/high-risk-newborn",
  "/therapies",
  "/therapies/speech-therapy",
  "/therapies/occupational-therapy",
  "/therapies/aba-therapy",
  "/therapies/physiotherapy",
  "/therapies/psychological-tests",
  "/therapies/special-education",
  "/testimonials",
  "/blog",
  "/benefits",
  "/internships",
  "/terms",
  "/policies",
];

function escapeXml(value) {
  return String(value).replace(
    /[<>&'\"]/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      })[character],
  );
}

function urlEntry(path, updatedAt) {
  const lastmod = updatedAt
    ? `<lastmod>${new Date(updatedAt).toISOString().slice(0, 10)}</lastmod>`
    : "";
  return `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc>${lastmod}</url>`;
}

// Public XML sitemap for the main site. Reference this URL from suvatsalya.in/robots.txt.
router.get("/sitemap.xml", async (_req, res) => {
  try {
    const [articles, stories, benefits] = await Promise.all([
      Article.find({ slug: { $exists: true, $ne: "" } })
        .select("slug updatedAt")
        .lean(),
      Story.find({ slug: { $exists: true, $ne: "" } })
        .select("slug updatedAt")
        .lean(),
      Benefit.find({ slug: { $exists: true, $ne: "" } })
        .select("slug updatedAt")
        .lean(),
    ]);
    const entries = [
      ...staticPaths.map((path) => urlEntry(path)),
      ...articles.map((article) =>
        urlEntry(
          `/blog/${encodeURIComponent(article.slug)}`,
          article.updatedAt,
        ),
      ),
      ...stories.map((story) =>
        urlEntry(
          `/testimonials/${encodeURIComponent(story.slug)}`,
          story.updatedAt,
        ),
      ),
      ...benefits.map((benefit) =>
        urlEntry(
          `/benefits/${encodeURIComponent(benefit.slug)}`,
          benefit.updatedAt,
        ),
      ),
    ];
    res
      .type("application/xml")
      .send(
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>`,
      );
  } catch (error) {
    res
      .status(500)
      .type("text/plain")
      .send(`Unable to generate sitemap: ${error.message}`);
  }
});

export default router;
