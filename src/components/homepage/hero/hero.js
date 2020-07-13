import React from 'react';
import classnames from 'classnames';

import { FaLinkedinIn, FaBehance, FaDribbble, FaRegEnvelope } from 'react-icons/fa';

import Container from "./../../shared/container/container";
import HeroImage from "./../../../static/hero-image@2x.png";

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
          <h1 className={classnames('hero-title', 'animate__animated animate__fadeIn')}>
            <span>welcome to digital marketing services</span>
            <strong> based on data knowledge</strong>
            <span> and <br/> practical experience</span>
          </h1>
          <div className={classnames('hero-image-wrapper', 'animate__animated animate__fadeIn')}>
            <img src={HeroImage} alt="Hero Image"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;