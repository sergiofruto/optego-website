import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Link } from "gatsby"
import Container from "./../container/container";
import Modal from "./../modal/modal";

// import WipeAnimation from "./../../../../static/menu-animation-c.svg";

const Header = ({ homeAnimation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const wipeAnimationRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  // const triggerAnimation = () => {
  //   wipeAnimationRef.click()
  // }

  return (
    <header className={classnames('header', (homeAnimation && 'animate__animated animate__fadeIn animate__delay-1s'))}>
      <Container>
        <Link to="/" className="header-logo">
          <img src={`./../../../../optego-logo-color.png`} alt="Optego Logo"/>
        </Link>
        <button className="header-menu">
          <img 
            src={`./../../../../icon-menu.svg`}
            alt="menu icon"
            onClick={() => handleMenuToggle()}/>
        </button>
      </Container>
      {isMenuOpen && <Modal handleMenuToggle={ handleMenuToggle } />}
      {/* <WipeAnimation className="wipe-animation" /> */}
      {/* <object type="image/svg+xml" data={"./../../../../static/menu-animation-b.svg"}></object> */}
    </header>
  );
};

export default Header;