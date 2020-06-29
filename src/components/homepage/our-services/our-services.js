import React from 'react';
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';
import AsideMark from '../../shared/aside-mark/aside-mark';
import Button from '../../shared/button/button';

import Icon1 from './../../../static/our-services-icon-1.svg';
import Icon2 from './../../../static/our-services-icon-2.svg';
import Icon3 from './../../../static/our-services-icon-3.svg';
import Arrow from './../../../static/arrow-right.svg'

const OurServices = () => {
  return (
    <section class="homepage-our-services">
      <div className="inner-wrapper">
        <AsideMark number="3" tag="our services" />
        <div className="content">
          <SectionTitle text="our services" />
          <SectionSubtitle
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
          />
          <div className="our-services-slider">
            <ul className="our-services-grid">
              <li className="our-services-item">
                <a href="#">
                  <div className="icon-wrapper">
                    <img src={Icon1} alt="" className="icon"/>
                  </div>
                  <h2>data driven decisions</h2>
                  <div className="bottom-text">
                    <img src={Arrow} alt="arrow"/>
                    <p>analytics & data intelligence</p>
                  </div>
                </a>
              </li>
              <li className="our-services-item">
                <a href="#">
                  <div className="icon-wrapper">
                    <img src={Icon2} alt="" className="icon"/>
                  </div>
                  <h2>paid <br /> media</h2>
                  <div className="bottom-text">
                    <img src={Arrow} alt="arrow"/>
                    <p>programática & platform marketing</p>
                  </div>
                </a>
              </li>
              <li className="our-services-item">
                <a href="#">
                  <div className="icon-wrapper">
                    <img src={Icon3} alt="" className="icon"/>
                  </div>
                  <h2>atomicé design</h2>
                  <div className="bottom-text">
                    <img src={Arrow} alt="arrow"/>
                    <p>design optimization UX UI</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="button-row">
            <Button text="view our tech" link="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;