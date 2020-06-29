import React from 'react';
import Container from "./../container/container";

import Logo from "./../../../static/optego-logo-color.png";
import IconMenu from "./../../../static/icon-menu.svg";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <a href="" className="header-logo">
          <img src={Logo} alt="Optego Logo"/>
        </a>
        <button className="header-menu">
          <img src={IconMenu} alt=""/>
        </button>
      </Container>
    </header>
  );
};

export default Header;