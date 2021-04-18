import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ children, location, description, title, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);

  return (
    <>
      {/* Title template allows you to specify prepend/append words to title */}
      <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/svg+xml" href="/favicon.icon" />
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
        {/* Open Graph specification */}
        {location && <meta property="og:url" content={location.href} />}
        <meta property="og:image" content={image || '/logo.svg'} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta
          property="og:site_name"
          content={site.siteMetadata.title}
          key="ogsitename"
        />
        <meta
          property="og:description"
          content={description}
          key="ogdescription"
        />
        {children}
      </Helmet>
    </>
  );
};

export default SEO;

SEO.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
