export function parseRelatedLinks(value) {
  if (!value) return [];

  let links;
  try {
    links = JSON.parse(value);
  } catch {
    throw new Error("Related links must be a valid list.");
  }

  if (!Array.isArray(links) || links.length > 4) {
    throw new Error("Add up to four related links.");
  }

  return links.map((link) => {
    const title = String(link?.title || "").trim();
    const url = String(link?.url || "").trim();
    const isInternalUrl = url.startsWith("/");
    const isExternalUrl = /^https?:\/\//i.test(url);

    if (!title || !url || (!isInternalUrl && !isExternalUrl)) {
      throw new Error("Each related link needs a title and a valid website URL.");
    }
    return { title, url };
  });
}

export function sendRelatedLinksSaveError(res, error) {
  const isRelatedLinkValidationError = [
    "Related links must be a valid list.",
    "Add up to four related links.",
    "Each related link needs a title and a valid website URL.",
  ].includes(error.message);

  res.status(isRelatedLinkValidationError ? 400 : 500).json({
    message: isRelatedLinkValidationError
      ? error.message
      : `Server error: ${error.message}`,
  });
}
