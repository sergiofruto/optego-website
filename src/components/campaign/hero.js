import React from 'react';

const Hero = ({ image }) => {
  return (
    <section>
      <div className="hero-wrapper" style={{ backgroundImage: `url(${image})`}}>
        <div className="container-campaign">
          <span className="hero-tagline">Coca Cola</span>
          <h1 className="hero-title">Santa Claus <br/> Experience</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;