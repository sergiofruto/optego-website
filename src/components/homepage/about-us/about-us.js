import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from './../../shared/section-title/section-title';
import AsideMark from './../../shared/aside-mark/aside-mark';
import ScrollLine from './../../shared/scroll-line/scroll-line';

import BgIllus01 from "./../../../../static/bg-shape-02.svg";

const bgIllusStyles1 = {
  backgroundImage: 'url(' + BgIllus01 + ')',
}

const AboutUs = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="homepage-about-us">
      <ScrollLine />
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible}>
        <Fragment>
          <span className="bg-illustration-01" style={bgIllusStyles1} />
          <Container>
            <AsideMark number="02" tag="about us" />
            <SectionTitle text="about us" isVisible={isVisible} />
              <ul className="what-we-do-cards">
                <li className={classnames('what-we-do-card', 'animate__delay-1s', (isVisible && 'animate__animated animate__fadeInUp'))}>
                  <img className="what-we-do-card-image" src={`./../../../../about-us-wwd-1.png`} alt=""/>
                  <h2 className="what-we-do-card-title">
                    power of<br />
                    data<br />
                  </h2>
                  <p className="what-we-do-card-desc">
                    We use data (duh!) but prefer real actionable insights.
                  </p>
                </li>
                <li className={classnames('what-we-do-card', 'animate__delay-1s', (isVisible && 'animate__animated animate__fadeInUp'))}>
                  <img className="what-we-do-card-image" src={`./../../../../about-us-wwd-2.png`} alt=""/>
                  <h2 className="what-we-do-card-title">
                    practical <br/>
                    experience
                  </h2>
                  <p className="what-we-do-card-desc">
                    We have more than 15 years in the business, real world scenarios.
                  </p>
                </li>
                <li className={classnames('what-we-do-card', 'animate__delay-1s', (isVisible && 'animate__animated animate__fadeInUp'))}>
                  <img className="what-we-do-card-image" src={`./../../../../about-us-wwd-3.png`} alt=""/>
                  <h2 className="what-we-do-card-title">
                    growth <br/>
                    hacking
                  </h2>
                  <p className="what-we-do-card-desc">
                    A cool title for something that everybody knows, but not all seamlessly execute.
                  </p>
                </li>
              </ul>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default AboutUs;