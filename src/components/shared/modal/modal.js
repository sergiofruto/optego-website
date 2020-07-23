import React from 'react';
import { Link } from "gatsby"
import Container from "./../../shared/container/container";
import BgIllus from "./../../../../static/bg-illus-circle.svg";
import IconMenuClose from "./../../../../static/icon-menu-close.svg";
import WipeAnimationIn from "./../../../../static/menu-animation-final-1.svg";

const Modal = ({ handleMenuToggle }) => {
  return (
    <div className="modal">
      <div className="modal-load-animation">
        <WipeAnimationIn />
      </div>
      <span className="bg-illus-dashed-circle animate__animated animate__fadeIn animate__delay-1s">
        <BgIllus />
      </span>
      <div className="modal-content">
        <Container>
          <button 
            className="close-menu-button animate__animated animate__fadeIn animate__delay-1s"
            onClick={() => handleMenuToggle(true)}
          >
            <IconMenuClose/>
          </button>
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-list-item animate__animated animate__fadeInRight animate__delay-1s">
                <Link to="/about-us">About us</Link>
              </li>
              <li className="nav-list-item animate__animated animate__fadeInRight animate__delay-1s">
                <Link to="/our-work">Work</Link>
              </li>
              <li className="nav-list-item animate__animated animate__fadeInRight animate__delay-1s">
                <Link to="/people">Our People</Link>
              </li>
              <li className="nav-list-item animate__animated animate__fadeInRight animate__delay-1s">
                <Link to="/">Our Clients</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
      <span className="bg-shape-animation animate__animated animate__fadeIn animate__delay-1s">
        <span className="shape" />
      </span>
    </div>
  );
};

export default Modal;