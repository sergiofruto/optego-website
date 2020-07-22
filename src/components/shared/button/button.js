import React from 'react';
import classnames from 'classnames';

// import Arrow from './../../../../static/icon-arrow-white.svg';
import Arrow from './../../../../static/icon-arrow-white.svg';

const Button = ({text, link, small, arrow}) => {
  return (
    <a className={classnames('main-btn', { small: small})} href={link}>
      <span>
        {text}
        {arrow && <Arrow />}
      </span>
    </a>
  );
};

export default Button;