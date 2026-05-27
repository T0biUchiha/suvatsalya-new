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
