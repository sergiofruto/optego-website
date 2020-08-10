import React from 'react';
import { RichText } from 'prismic-reactjs'

const SectionTitle = ({ text }) => {
  return (
    <p className="page-subtitle animate__animated animate__fadeInUp">
      {RichText.asText(text)}
    </p>
  );
};

export default SectionTitle;