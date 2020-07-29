import React from 'react';

const ParallaxBackground = () => {
  return (
    // <div className="parallax-container">
    //   <div className="layer-3"></div>
    //   <div className="layer-2"></div>
    //   <div className="layer-1"></div>
    // </div>
    <div class="parallax">
      <div className="parallax__group">
        <div class="parallax__layer parallax__layer--back">
          <span className="shape-1"></span>
        </div>
        <div class="parallax__layer parallax__layer--base">
          <span className="shape-2"></span>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBackground;