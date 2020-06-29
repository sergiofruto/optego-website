import React from 'react';

import { FaLinkedinIn, FaBehance, FaDribbble, FaRegEnvelope } from 'react-icons/fa';

import LogoWhite from "./../../../static/optego-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="" className="footer-logo">
        <img src={LogoWhite} alt=""/>
      </a>
      <div className="inner-footer">
        <ul className="offices-list">
          <li><a href="">University Drive 1130, Miami, Florida</a></li>
          <li><a href="">Av. Cnel Niceto Vega 5662, Buenos Aires</a></li>
          <li><a href="">Av. Abraham Lincoln 701 Santo Domingo</a></li>
        </ul>
        <nav className="site-links">
          <ul>
            <li>About us</li>
            <li>Works</li>
            <li>Our Tech</li>
            <li>Clients</li>
            <li>People</li>
            <li>Jobs</li>
          </ul>
        </nav>
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
      </div>
    </footer>
  );
};

export default Footer;