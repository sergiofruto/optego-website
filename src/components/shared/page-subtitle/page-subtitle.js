import React from 'react';

const SectionTitle = ({ text }) => {
  return (
    <p className="page-subtitle animate__animated animate__fadeInUp">
      {text}
    </p>
  );
};

export default SectionTitle;