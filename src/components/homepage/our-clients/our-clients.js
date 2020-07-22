import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';
import AsideMark from '../../shared/aside-mark/aside-mark';
import ScrollLine from './../../shared/scroll-line/scroll-line';
import Button from '../../shared/button/button';

const OurServices = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="homepage-our-clients">
      <ScrollLine />
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
        <Fragment>
          <Container>
            <AsideMark number="04" tag="our clients" />
            <div className="content">
              <SectionTitle text="our clients" isVisible={isVisible} />
              <SectionSubtitle
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
                isVisible={isVisible}
              />
              <ul className={classnames('our-clients-grid', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
                <li className="our-clients-item">
                  <a className="client-link" href="#">
                    <img className="client-logo" src={`./../../../client-logo-movistar.svg`} alt="" />
                  </a>
                </li>
                <li className="our-clients-item">
                  <a className="client-link" href="#">
                    <img className="client-logo" src={`./../../../client-logo-sams-club.svg`} alt="" />
                  </a>
                </li>
                <li className="our-clients-item">
                  <a className="client-link" href="#">
                    <img className="client-logo" src={`./../../../client-logo-coca-cola.svg`} alt="" />
                  </a>
                </li>
                <li className="our-clients-item">
                  <a className="client-link" href="#">
                    <img className="client-logo" src={`./../../../client-logo-movistar.svg`} alt="" />
                  </a>
                </li>
                <li className="our-clients-item">
                  <a className="client-link" href="#">
                    <img className="client-logo" src={`./../../../client-logo-sams-club.svg`} alt="" />
                  </a>
                </li>
                <li className="our-clients-item">
                  <a className="client-link" href="#">
                    <img className="client-logo" src={`./../../../client-logo-coca-cola.svg`} alt="" />
                  </a>
                </li>
              </ul>
              <div className="button-row">
                <Button text="view all clients" link="#" arrow />
              </div>
            </div>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default OurServices;