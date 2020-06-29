import React from 'react';

import { FaLinkedinIn, FaBehance, FaDribbble, FaRegEnvelope } from 'react-icons/fa';
import HeroImage from "./../../../static/hero-image@2x.png";

const Hero = () => {
  return (
    <section>
      <div className="inner-hero">
        <aside>
          <ul className="hero-social-links">
            <li>
              <a className="hero-social-link" href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a className="hero-social-link" href="#">
                <FaBehance />
              </a>
            </li>
            <li>
              <a className="hero-social-link" href="#">
                <FaDribbble />
              </a>
            </li>
            <li>
              <a className="hero-social-link" href="#">
                <FaRegEnvelope />
              </a>
            </li>
          </ul>
        </aside>
        <h1 className="hero-title">
          welcome to digital
          marketing services
          based on data
          knowledge and
          practical experience
        </h1>
        <div className="hero-image-wrapper">
          <img src={HeroImage} alt="Hero Image"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;