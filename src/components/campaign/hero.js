import React from 'react';
import { RichText } from 'prismic-reactjs';

const Hero = ({ tagline, title, image, imageAlt }) => {
  return (
    <section className="campaign-hero">
      <div className="campaign-hero__image blur-kenburns-top" style={{ backgroundImage: `url(${image})` }} />
      <div className="campaign-hero__info">
        <span className="hero-tagline focus-in-expand-delayed">
          {RichText.asText(tagline)}
        </span>
        <h1 className="hero-title focus-in-expand-delayed">
          {RichText.asText(title)}
        </h1>
      </div>
    </section>
  );
};

export default Hero;