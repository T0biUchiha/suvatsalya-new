/**
 * Paste handler for CMS textareas — strips rich formatting from clipboard.
 * Works with React controlled inputs via the native value setter.
 */
export function handlePastePlainText(e) {
  const plain = e.clipboardData?.getData('text/plain');
  if (plain == null) {
    return;
  }

  e.preventDefault();
  const field = e.target;
  const start = field.selectionStart ?? 0;
  const end = field.selectionEnd ?? 0;
  const next = field.value.slice(0, start) + plain + field.value.slice(end);

  const descriptor = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype,
    'value',
  );
  descriptor.set.call(field, next);
  field.dispatchEvent(new Event('input', { bubbles: true }));

  const cursor = start + plain.length;
  field.setSelectionRange(cursor, cursor);
}
