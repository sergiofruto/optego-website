import React from 'react';
import { RichText } from 'prismic-reactjs'

const SectionTitle = ({ text }) => {
  return (
    <h1 className="page-title animate__animated animate__fadeInUp">
      {RichText.asText(text)}
    </h1>
  );
};

export default SectionTitle;