import React from 'react';

const SectionTitle = ({ text }) => {
  return (
    <h1 className="page-title animate__animated animate__fadeInUp">
      {text}
    </h1>
  );
};

export default SectionTitle;