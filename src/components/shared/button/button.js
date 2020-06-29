import React from 'react';

const Button = ({text, link, color, size}) => {
  return (
    <a className="main-btn" href={link}>
      {text}
    </a>
  );
};

export default Button;