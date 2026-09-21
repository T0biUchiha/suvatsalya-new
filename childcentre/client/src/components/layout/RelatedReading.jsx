import PropTypes from 'prop-types';

export function RelatedReading({ links }) {
  if (!links?.length) return null;

  return (
    <aside className="mt-14 border-t border-gray-200 pt-10" aria-label="Related reading">
      <h2 className="text-2xl font-bold text-gray-900">Related reading</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {links.map((link) => {
          const isInternalUrl = link.url.startsWith('/');
          return (
            <a
              key={`${link.title}-${link.url}`}
              href={link.url}
              target={isInternalUrl ? undefined : '_blank'}
              rel={isInternalUrl ? undefined : 'noopener noreferrer'}
              className="group rounded-xl border border-gray-200 bg-gray-50 p-5 transition hover:border-brand-teal hover:bg-brand-cream"
            >
              <p className="font-semibold text-gray-900 transition group-hover:text-brand-teal">
                {link.title}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-teal">
                Read more &rarr;
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}

RelatedReading.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};
