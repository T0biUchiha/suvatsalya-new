/** MIME + extension strings for <input accept> — stricter than image/* or .pdf alone */
export const IMAGE_ACCEPT = 'image/jpeg,image/jpg,image/png,image/webp,.jpg,.jpeg,.png,.webp';
export const PDF_ACCEPT = 'application/pdf,.pdf';

const IMAGE_MIME_TYPES = new Set(['image/jpeg', 'image/jpg', 'image/png', 'image/webp']);
const IMAGE_EXT_PATTERN = /\.(jpe?g|png|webp)$/i;
const PDF_EXT_PATTERN = /\.pdf$/i;

export function validateImageFile(file) {
  if (!file) {
    return { valid: true };
  }
  const byMime = IMAGE_MIME_TYPES.has(file.type);
  const byExt = IMAGE_EXT_PATTERN.test(file.name);
  if (byMime || byExt) {
    return { valid: true };
  }
  return {
    valid: false,
    message: 'Only JPG, PNG, or WEBP images are allowed.',
  };
}

export function validatePdfFile(file) {
  if (!file) {
    return { valid: true };
  }
  const byMime = file.type === 'application/pdf';
  const byExt = PDF_EXT_PATTERN.test(file.name);
  if (byMime || byExt) {
    return { valid: true };
  }
  return {
    valid: false,
    message: 'Only PDF documents are allowed.',
  };
}

/**
 * @param {React.ChangeEvent<HTMLInputElement>} e
 * @param {(file: File | null) => void} setFile
 * @param {(msg: string) => void} [setError]
 */
export function pickImageFile(e, setFile, setError) {
  const file = e.target.files?.[0];
  if (!file) {
    setFile(null);
    return;
  }
  const result = validateImageFile(file);
  if (!result.valid) {
    e.target.value = '';
    setFile(null);
    setError?.(result.message);
    return;
  }
  setError?.('');
  setFile(file);
}

/**
 * @param {React.ChangeEvent<HTMLInputElement>} e
 * @param {(file: File | null) => void} setFile
 * @param {(msg: string) => void} [setError]
 */
export function validateBenefitFiles(image, pdf) {
  if (image) {
    const imageCheck = validateImageFile(image);
    if (!imageCheck.valid) {
      return imageCheck;
    }
  }
  if (pdf) {
    const pdfCheck = validatePdfFile(pdf);
    if (!pdfCheck.valid) {
      return pdfCheck;
    }
  }
  return { valid: true };
}

export function pickPdfFile(e, setFile, setError) {
  const file = e.target.files?.[0];
  if (!file) {
    setFile(null);
    return;
  }
  const result = validatePdfFile(file);
  if (!result.valid) {
    e.target.value = '';
    setFile(null);
    setError?.(result.message);
    return;
  }
  setError?.('');
  setFile(file);
}
