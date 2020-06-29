import React from 'react';
import Container from "./../container/container";

import Logo from "./../../../static/optego-logo-color.png";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <a href="" className="header-logo">
          <img src={Logo} alt="Optego Logo"/>
        </a>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;