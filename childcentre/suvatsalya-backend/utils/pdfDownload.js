/** Safe filename stored for reference (download uses Cloudinary secure_url as-is) */
export function resolvePdfFileName(originalName, title) {
  let name = (originalName || '').trim();
  if (!name && title) {
    name = `${title.trim()}.pdf`;
  }
  if (!name) {
    name = 'document.pdf';
  }
  if (!/\.pdf$/i.test(name)) {
    name = `${name}.pdf`;
  }
  return name.replace(/[^a-zA-Z0-9._-]+/g, '_').replace(/_+/g, '_');
}
