/**
 * Strip HTML and normalize pasted CMS text so site typography applies consistently.
 */
export function sanitizeCmsText(text) {
  if (text == null || typeof text !== 'string') {
    return text;
  }

  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .trim();
}

export function sanitizeArticleHtml(html) {
  if (html == null || typeof html !== 'string') return html;
  return sanitizeHtml(html, {
    allowedTags: ['p', 'br', 'h2', 'h3', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'a'],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    allowedSchemes: ['http', 'https', 'mailto'],
  }).trim();
}
import sanitizeHtml from 'sanitize-html';
