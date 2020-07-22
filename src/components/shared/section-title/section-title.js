import React from 'react';
import classnames from 'classnames';

const SectionTitle = ({ text, isVisible }) => {
  return (
    <h1 className={classnames('section-title', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
      {text}
    </h1>
  );
};

SectionTitle.defaultProps = {
  isVisible: true
};

export default SectionTitle;