import React from 'react';

const scrollLine = ({ animate }) => {
  if (animate) {
    return <span className="scroll-line-animate animate__animated animate__fadeIn animate__delay-1s"><span className="scroll-line"></span></span>
  }
  return (
    <span className='scroll-line'></span>
  );
};

export default scrollLine;