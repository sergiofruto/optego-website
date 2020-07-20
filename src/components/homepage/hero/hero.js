import React from 'react';
import classnames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import { FaLinkedinIn, FaBehance, FaDribbble, FaRegEnvelope } from 'react-icons/fa';

import Container from "./../../shared/container/container";

// import HeroImage from "./../../../../static/hero-image@2x.png";


const Hero = () => {
  return (
    <section className="homepage-hero animate__animated animate__fadeIn">
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
      <Container>
        <div className="inner-hero">
          <div className="animate__animated animate__fadeIn">
            <h1 className={classnames('hero-title', 'animate__animated animate__fadeInUp')}>
              welcome to digital marketing services
              <strong> based on data knowledge </strong>
              and <br/> practical experience
            </h1>
          </div>
          <div className={classnames('hero-image-wrapper', 'animate__animated animate__fadeIn')}>
            <img src={`./../../../../hero-image@2x.png`} alt="Hero Image"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;