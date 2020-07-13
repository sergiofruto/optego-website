import React from 'react';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from './../../shared/section-title/section-title';
import AsideMark from './../../shared/aside-mark/aside-mark';

import Image1 from "./../../../static/about-us-wwd-1.png";
import Image2 from "./../../../static/about-us-wwd-2.png";
import Image3 from "./../../../static/about-us-wwd-3.png";
import BgIllus01 from "./../../../static/bg-shape-02.svg";

const bgIllusStyles1 = {
  backgroundImage: 'url(' + BgIllus01 + ')',
}


const AboutUs = () => {
  return (
    <section className="homepage-about-us">
      <span className="bg-illustration-01" style={bgIllusStyles1} />
      <Container>
        <AsideMark number="02" tag="about us" />
        <SectionTitle text="about us" />
          <ul className={classnames('what-we-do-cards', 'animate__fadeInUp')}>
            <li className="what-we-do-card">
              <img className="what-we-do-card-image" src={Image1} alt=""/>
              <h2 className="what-we-do-card-title">
                we <br/>
                transform<br />
                data<br />
              </h2>
              <p className="what-we-do-card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit amet ex accumsan tristique.
              </p>
            </li>
            <li className="what-we-do-card">
              <img className="what-we-do-card-image" src={Image2} alt=""/>
              <h2 className="what-we-do-card-title">
                the <br/>
                power of <br/>
                Social Media <br/>
              </h2>
              <p className="what-we-do-card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit amet ex accumsan tristique.
              </p>
            </li>
            <li className="what-we-do-card">
              <img className="what-we-do-card-image" src={Image3} alt=""/>
              <h2 className="what-we-do-card-title">
                we <br/>
                transform<br />
                data<br />
              </h2>
              <p className="what-we-do-card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit amet ex accumsan tristique.
              </p>
            </li>
          </ul>
      </Container>
    </section>
  );
};

export default AboutUs;