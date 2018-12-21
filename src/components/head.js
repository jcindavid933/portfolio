import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../config';
import dicon from '../images/logo.png';

const Head = ({ metaData }) => (
  <Helmet>
    <title itemProp="name" lang="en">
      {metaData.title}
    </title>
    <meta name="description" content={metaData.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta property="og:title" content={metaData.title} />
    <meta property="og:description" content={metaData.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metaData.siteUrl} />
    <meta property="og:site_name" content={metaData.title} />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metaData.title} />
    <meta itemProp="description" content={metaData.description} />

    <link rel="icon" type="image/png" href={dicon} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metaData: PropTypes.object.isRequired,
};
