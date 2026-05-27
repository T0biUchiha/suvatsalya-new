import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import blogImg from '../../assets/relogoimages/blog_image_1536x1024.png';
import { ContentImage } from '../layout/ContentImage';

export function BlogCard({ article }) {
  const snippet = `${article.content.substring(0, 150)}...`;
  const articlePath = article.slug ? `/blog/${encodeURIComponent(article.slug)}` : null;

  return (
    <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8">
      <div className="md:w-1/3">
        {articlePath ? (
          <Link to={articlePath}>
            <ContentImage
              src={article.imageUrl || blogImg}
              alt={article.title}
              variant="card"
            />
          </Link>
        ) : (
          <ContentImage
            src={article.imageUrl || blogImg}
            alt={article.title}
            variant="card"
          />
        )}
      </div>

      <div className="md:w-2/3">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">
          {articlePath ? (
            <Link to={articlePath} className="hover:text-brand-teal transition-colors">
              {article.title}
            </Link>
          ) : (
            article.title
          )}
        </h2>
        <p className="cms-content mb-3 line-clamp-4">{snippet}</p>
        {articlePath && (
          <Link
            to={articlePath}
            className="font-semibold text-brand-teal hover:text-brand-teal-dark"
          >
            Read More &raquo;
          </Link>
        )}
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};
