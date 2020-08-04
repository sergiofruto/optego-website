import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';
import AsideMark from '../../shared/aside-mark/aside-mark';
import ScrollLine from './../../shared/scroll-line/scroll-line';
import Button from '../../shared/button/button';

import Icon1 from './../../../../static/our-services-icon-1.svg';
import Icon2 from './../../../../static/our-services-icon-2.svg';
import Icon3 from './../../../../static/our-services-icon-3.svg';
import IconArrow from './../../../../static/arrow-right.svg';

const OurServices = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="homepage-our-services">
      <ScrollLine />
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible}>
        <Fragment>
          <Container>
            <AsideMark number="03" tag="our services" />
            <SectionTitle text="our services" isVisible={isVisible} />
            <SectionSubtitle
              text="Tech is our passion and data is our love. A mix of everything with magical results."
              isVisible={isVisible}
            />
            <div className={classnames('our-services-slider', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
              <ul className="our-services-grid">
                <li className="our-services-item">
                  <a href="#">
                    <div className="icon-wrapper">
                      <Icon1 className="icon" />
                    </div>
                    <h2>data driven decisions</h2>
                    <div className="bottom-text">
                      <IconArrow />
                      <p>DataScience & Analytics.</p>
                    </div>
                  </a>
                </li>
                <li className="our-services-item">
                  <a href="#">
                    <div className="icon-wrapper">
                      <Icon2 className="icon" />
                    </div>
                    <h2>paid <br /> media</h2>
                    <div className="bottom-text">
                      <IconArrow />
                      <p>Programmatic & platform marketing</p>
                    </div>
                  </a>
                </li>
                <li className="our-services-item">
                  <a href="#">
                    <div className="icon-wrapper">
                      <Icon3 className="icon" />
                    </div>
                    <h2>CRO</h2>
                    <div className="bottom-text">
                      <IconArrow />
                      <p>Machine learning & AI</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="button-row">
              <Button text="view our tech" link="#" arrow />
            </div>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default OurServices;