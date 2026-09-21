/** Short preview text for list cards (blog-style read more). */
export function buildSnippet(text, maxLength = 150) {
  if (!text || typeof text !== 'string') {
    return '';
  }
  const container = document.createElement('div');
  container.innerHTML = text;
  const trimmed = (container.textContent || container.innerText || '').replace(/\s+/g, ' ').trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  return `${trimmed.substring(0, maxLength).trim()}...`;
}
