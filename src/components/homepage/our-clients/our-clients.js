import React from 'react';
import Container from "./../../shared/container/container";
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';
import AsideMark from '../../shared/aside-mark/aside-mark';
import Button from '../../shared/button/button';

import Client1 from './../../../static/client-logo-movistar.svg';
import Client2 from './../../../static/client-logo-sams-club.svg';
import Client3 from './../../../static/client-logo-coca-cola.svg';

const OurServices = () => {
  return (
    <section className="homepage-our-clients">
      <Container>
        <AsideMark number="4" tag="our clients" />
        <div className="content">
          <SectionTitle text="our clients" />
          <SectionSubtitle
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
          />
          <ul className="our-clients-grid">
            <li className="our-clients-item">
              <a className="client-link" href="#">
                <img className="client-logo" src={`./../../../client-logo-movistar.svg`} alt=""/>
              </a>
            </li>
            <li className="our-clients-item">
              <a className="client-link" href="#">
                <img className="client-logo" src={`./../../../client-logo-sams-club.svg`} alt=""/>
              </a>
            </li>
            <li className="our-clients-item">
              <a className="client-link" href="#">
                <img className="client-logo" src={`./../../../client-logo-coca-cola.svg`} alt=""/>
              </a>
            </li>
            <li className="our-clients-item">
              <a className="client-link" href="#">
                <img className="client-logo" src={`./../../../client-logo-movistar.svg`} alt=""/>
              </a>
            </li>
            <li className="our-clients-item">
              <a className="client-link" href="#">
                <img className="client-logo" src={`./../../../client-logo-sams-club.svg`} alt=""/>
              </a>
            </li>
            <li className="our-clients-item">
              <a className="client-link" href="#">
                <img className="client-logo" src={`./../../../client-logo-coca-cola.svg`} alt=""/>
              </a>
            </li>
          </ul>
          <div className="button-row">
            <Button text="view all clients" link="#" arrow />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;