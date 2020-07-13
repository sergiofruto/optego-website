import React, { useState } from 'react';
import { Link } from "gatsby"
import Container from "./../container/container";
import Modal from "./../modal/modal";

import Logo from "./../../../static/optego-logo-color.png";
import IconMenu from "./../../../static/icon-menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <Container>
        <Link to="/" className="header-logo">
          <img src={Logo} alt="Optego Logo"/>
        </Link>
        <button className="header-menu">
          <img 
            src={IconMenu}
            alt="menu icon"
            onClick={() => handleMenuToggle()}/>
        </button>
      </Container>
      {isMenuOpen && <Modal handleMenuToggle={ handleMenuToggle } />}
    </header>
  );
};

export default Header;