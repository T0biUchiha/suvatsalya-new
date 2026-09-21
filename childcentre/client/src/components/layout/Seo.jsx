import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://suvatsalya.in';

export function Seo({ title, description, path, image, type = 'website', structuredData }) {
  const canonicalUrl = `${siteUrl}${path}`;
  const pageTitle = `${title} | Suvatsalya`;
  const jsonLd = structuredData ? JSON.stringify(structuredData).replace(/</g, '\\u003c') : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {jsonLd && <script type="application/ld+json">{jsonLd}</script>}
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object,
};
