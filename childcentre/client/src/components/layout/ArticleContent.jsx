import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const allowedTags = ['p', 'br', 'h2', 'h3', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'a'];

export function ArticleContent({ content }) {
  if (!/<\/?[a-z][\s\S]*>/i.test(content))
    return <div className="cms-content whitespace-pre-wrap">{content}</div>;
  const cleanHtml = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: allowedTags,
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
  return (
    <div
      className="cms-content article-rich-content"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}

ArticleContent.propTypes = { content: PropTypes.string.isRequired };
