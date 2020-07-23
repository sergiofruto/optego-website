import React from 'react';
import classnames from 'classnames';
import { FaLinkedinIn, FaBehance, FaDribbble, FaRegEnvelope } from 'react-icons/fa';

import Container from "./../../shared/container/container";
import AnimatedArrowDown from "./../../shared/animated-arrow-down/animated-arrow-down";
import ScrollLine from './../../shared/scroll-line/scroll-line';

const Hero = ({ title, image, imageAlt}) => {
  return (
    <section className="homepage-hero">
      <ScrollLine animate />
      <aside className="homepage-hero__aside animate__animated animate__fadeIn animate__delay-1s">
        <ul className="homepage-hero__social-links">
          <li>
            <a className="homepage-hero__social-link" href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a className="homepage-hero__social-link" href="#">
              <FaBehance />
            </a>
          </li>
          <li>
            <a className="homepage-hero__social-link" href="#">
              <FaDribbble />
            </a>
          </li>
          <li>
            <a className="homepage-hero__social-link" href="#">
              <FaRegEnvelope />
            </a>
          </li>
        </ul>
        <div className="homepage-hero__mark-wrapper">
          <div className="aside-mark">
            <span className="aside-tag">home</span>
            <span className="aside-number"><span>01</span></span>
          </div>
        </div>
      </aside>
      <Container>
        <div className="inner-hero">
          <div className="animate__animated animate__fadeIn">
            <h1 className={classnames('hero-title', 'animate__animated animate__fadeIn animate__delay-1s')}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
          <div className={classnames('hero-image-wrapper', 'animate__animated animate__fadeIn animate__delay-1s')}>
            <img src={image} alt={imageAlt} />
          </div>
        </div>
      </Container>
      <AnimatedArrowDown />
    </section>
  );
};

export default Hero;