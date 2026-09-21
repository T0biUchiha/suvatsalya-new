import PropTypes from 'prop-types';

const emptyRelatedLink = () => ({ title: '', url: '' });

export function RelatedLinksFields({ links, onChange }) {
  const updateLink = (index, field, value) => {
    onChange(links.map((link, linkIndex) => (linkIndex === index ? { ...link, [field]: value } : link)));
  };

  const removeLink = (index) => {
    onChange(links.filter((_, linkIndex) => linkIndex !== index));
  };

  const addLink = () => {
    if (links.length < 4) onChange([...links, emptyRelatedLink()]);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Related blogs / links</label>
      <p className="mt-0.5 text-xs text-gray-500">
        Add up to four links to show at the bottom. Use a site path such as
        <code className="mx-1">/blog/article-name</code> or a full external URL.
      </p>
      <div className="mt-3 space-y-3">
        {links.map((link, index) => (
          <div key={index} className="rounded-md border border-gray-200 p-3">
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                type="text"
                value={link.title}
                onChange={(event) => updateLink(index, 'title', event.target.value)}
                placeholder="Link text, e.g. Understanding ADHD"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
              />
              <input
                type="text"
                value={link.url}
                onChange={(event) => updateLink(index, 'url', event.target.value)}
                placeholder="/blog/adhd or https://example.com"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
              />
            </div>
            <button
              type="button"
              onClick={() => removeLink(index)}
              className="mt-2 text-xs font-semibold text-red-600 hover:text-red-700"
            >
              Remove link
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addLink}
        disabled={links.length >= 4}
        className="mt-3 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark disabled:cursor-not-allowed disabled:text-gray-400"
      >
        + Add related link {links.length ? `(${links.length}/4)` : ''}
      </button>
    </div>
  );
}

RelatedLinksFields.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
