import React from 'react';
import classnames from 'classnames';

import Arrow from './../../../static/icon-arrow-white.svg';

const withArrowStyles = {
  backgroundImage: 'url(' + Arrow + ')',
}

const Button = ({text, link, small, arrow}) => {
  return (
    <a className={classnames('main-btn', { small: small})} href={link}>
      {text}
      {arrow && <span className="main-btn-arrow" style={withArrowStyles} />}
    </a>
  );
};

export default Button;