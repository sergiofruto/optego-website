import React from 'react';
import { Link } from "gatsby"
import Container from "./../../shared/container/container";

import bgIllus from "./../../../static/bg-illus-circle.svg";
import iconMenuClose from "./../../../static/icon-menu-close.svg";

const bgIllusStyles1 = {
  backgroundImage: 'url(' + bgIllus + ')',
}

const closeIconStyles = {
  backgroundImage: 'url(' + iconMenuClose + ')',
}

const Modal = ({ handleMenuToggle }) => {
  return (
    <div className="modal animate__animated animate__fadeInDown">
      <span className="bg-illus-dashed-circle" style={bgIllusStyles1} />
      <div className="modal-content">
        <button 
          className="close-menu-button"
          style={closeIconStyles} 
          onClick={handleMenuToggle}>
          </button>
        <Container>
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="nav-list-item"><Link to="/about-us">About us</Link></li>
              <li className="nav-list-item"><Link to="/our-work">Work</Link></li>
              <li className="nav-list-item"><Link to="/">Our Tech</Link></li>
              <li className="nav-list-item"><Link to="/">Our Clients</Link></li>
            </ul>
          </nav>
        </Container>
      </div>
      <span className="bg-illus-dashed-circle" />
    </div>
  );
};

export default Modal;