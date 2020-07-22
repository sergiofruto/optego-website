import React from 'react';
import classnames from 'classnames';

const SectionSubtitle = ({ text, isVisible }) => {
  return (
    <p className={classnames('section-subtitle', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
      {text}
    </p>
  );
};

SectionSubtitle.defaultProps = {
  isVisible: true
};

export default SectionSubtitle;