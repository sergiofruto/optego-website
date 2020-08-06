import React from 'react';
import { RichText } from 'prismic-reactjs';

const Hero = ({ tagline, title, image, imageAlt }) => {
  return (
    <section className="campaign-hero">
      <div className="campaign-hero__image blur-kenburns-top" style={{ backgroundImage: `url(${image})` }} />
      <div className="campaign-hero__info">
        <span className="hero-tagline focus-in-expand-delayed">
          {title[0].text}
        </span>
        <h1 className="hero-title focus-in-expand-delayed">
          {title[0].text}
        </h1>
      </div>
    </section>
  );
};

export default Hero;