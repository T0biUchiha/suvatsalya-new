import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContentImage } from '../layout/ContentImage';
import { buildSnippet } from '../../utils/snippet';

export function BenefitCard({ benefit }) {
  const snippet = buildSnippet(benefit.description);
  const detailPath = `/benefits/${benefit._id}`;

  return (
    <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8">
      {benefit.imageUrl && (
        <div className="md:w-1/3">
          <Link to={detailPath}>
            <ContentImage
              src={benefit.imageUrl}
              alt={benefit.title}
              variant="card"
            />
          </Link>
        </div>
      )}

      <div className={benefit.imageUrl ? 'md:w-2/3' : 'w-full'}>
        <h2 className="text-3xl font-semibold text-brand-blue mb-3">
          <Link to={detailPath} className="hover:text-brand-teal transition-colors">
            {benefit.title}
          </Link>
        </h2>
        <p className="cms-content mb-3 line-clamp-4">{snippet}</p>
        <Link
          to={detailPath}
          className="font-semibold text-brand-teal hover:text-brand-teal-dark"
        >
          Read More &raquo;
        </Link>
      </div>
    </div>
  );
}

BenefitCard.propTypes = {
  benefit: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};
