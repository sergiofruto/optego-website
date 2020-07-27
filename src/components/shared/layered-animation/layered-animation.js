import React from 'react';
import classnames from 'classnames';

const LayeredAnimation = ({ isVisible }) => {
  return (
    <span className={classnames('animation-layers', (isVisible && 'animated'))}>
      <span className="layer"></span>
      <span className="layer"></span>
      <span className="layer"></span>
      <span className="layer"></span>
    </span>
  );
};

export default LayeredAnimation;