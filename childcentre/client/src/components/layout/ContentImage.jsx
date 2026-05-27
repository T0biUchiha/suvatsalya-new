import PropTypes from 'prop-types';

/**
 * CMS / uploaded images: fit inside layout with max dimensions (chat-style preview).
 */
export function ContentImage({ src, alt, className = '', variant = 'default' }) {
  const variants = {
    default:
      'mx-auto block max-w-full max-h-[min(480px,70vh)] w-auto h-auto rounded-lg object-contain shadow-lg',
    card: 'w-full max-h-48 rounded-lg object-cover shadow-lg',
    benefit: 'w-full max-h-64 rounded-lg object-contain',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${variants[variant] || variants.default} ${className}`.trim()}
      loading="lazy"
    />
  );
}

ContentImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'card', 'benefit']),
};
