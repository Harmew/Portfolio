import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Head = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={keywords + " react, javascript, frontend, web, developer"}
      />
    </Helmet>
  );
};

export default Head;

Head.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};
