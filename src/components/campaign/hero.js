import React from 'react';

const Hero = ({ image }) => {
  return (
    <section>
      <div className="hero-wrapper animate__animated animate__fadeInUp" style={{ backgroundImage: `url(${image})`}}>
        <div className="container-campaign">
          <span className="hero-tagline animate__animated animate__fadeInUp">Coca Cola</span>
          <h1 className="hero-title animate__animated animate__fadeInUp">Santa Claus <br/> Experience</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;