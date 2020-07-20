import React from 'react';
import Container from "./../../shared/container/container";
import { FaLinkedinIn, FaBehance, FaDribbble, FaRegEnvelope } from 'react-icons/fa';

// import LogoWhite from "./../../../../static/optego-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <a href="" className="footer-logo">
          <img src={`./../../../../static/optego-logo-white.png`} alt=""/>
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