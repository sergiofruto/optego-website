import React from 'react';
import Container from "./../../shared/container/container";
import { Link } from "gatsby";
import { FaLinkedinIn, FaBehance, FaDribbble, FaRegEnvelope } from 'react-icons/fa';

import OptegoLogoWhite from './../../../../static/optego-logo-white.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-logo">
          <Link to="/">
            <OptegoLogoWhite />
          </Link>
        </div>
        <div className="inner-footer">
          <ul className="offices-list">
            <li className="offices-list__item">
              <img src="./icon-flag-usa@2x.png" alt="" className="offices-list__flag"/>
              University Drive 1130, Miami, Florida
            </li>
            <li className="offices-list__item">
              <img src="./icon-flag-arg@2x.png" alt="" className="offices-list__flag" />
              Av. Cnel Niceto Vega 5662, Buenos Aires
            </li>
            <li className="offices-list__item">
              <img src="./icon-flag-rep@2x.png" alt="" className="offices-list__flag" />
              Av. Abraham Lincoln 701 Santo Domingo
            </li>
          </ul>
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/about-us">About us</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/about-us">Works</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/about-us">Our Tech</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/clients">Clients</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/people">People</Link>
              </li>
              <li className="footer-nav__item">
                <Link to="/jobs">Jobs</Link>
              </li>
            </ul>
          </nav>
          <ul className="footer-social-links">
            <li>
              <a className="footer-social-link" href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a className="footer-social-link" href="#">
                <FaBehance />
              </a>
            </li>
            <li>
              <a className="footer-social-link" href="#">
                <FaDribbble />
              </a>
            </li>
            <li>
              <a className="footer-social-link" href="#">
                <FaRegEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;