/** Short preview text for list cards (blog-style read more). */
export function buildSnippet(text, maxLength = 150) {
  if (!text || typeof text !== 'string') {
    return '';
  }
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  return `${trimmed.substring(0, maxLength).trim()}...`;
}
