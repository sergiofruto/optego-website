import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Link } from "gatsby";
import Container from "./../container/container";
import Modal from "./../modal/modal";
import WipeAnimationOut from "./../../../../static/menu-animation-final-2.svg";
const Logo01 = './../../../logo-01.png';
const Logo02 = './../../../logo-02.png';
const Logo03 = './../../../logo-03.png';

const Header = ({ homeAnimation }) => {
  const [isMenuOpening, setIsMenuOpening] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const handleMenuToggle = (menuOut) => {
    if (menuOut) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuClosing(false);
      }, 1200);
    }
    setIsMenuOpening(!isMenuOpening);
  }

  return (
    <header className={classnames('header', (homeAnimation && 'animate__animated animate__fadeIn animate__delay-1s'))}>
      <Container>
        <Link to="/" className="header-logo">
          <span className="animated-logo">
            <img src={Logo01} alt="OPT" />
            <img src={Logo02} alt="E" className="rotate-in-center" />
            <img src={Logo03} alt="GO" />
          </span>
        </Link>
        <button className="header-menu">
          <img 
            src={`./../../../../icon-menu.svg`}
            alt="menu icon"
            onClick={() => handleMenuToggle()}/>
        </button>
      </Container>
      {isMenuClosing &&
        <div className="modal-load-animation">
          <WipeAnimationOut />
        </div>
      }
      {isMenuOpening && <Modal handleMenuToggle={ handleMenuToggle } />}
    </header>
  );
};

export default Header;