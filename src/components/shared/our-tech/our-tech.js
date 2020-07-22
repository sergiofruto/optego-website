import React from 'react';
import Container from "./../../shared/container/container";
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';

import Icon01 from './../../../../static/icon-tech-01.svg';
import Icon02 from './../../../../static/icon-tech-02.svg';
import Icon03 from './../../../../static/icon-tech-03.svg';

// const techList = {
//   {
//     'icon': 'something',
//     'text': 'BigData'
//   }
// };

const OurTech = () => {
  return (
    <section>
      <Container>
        <SectionTitle text="our tech" />
        <SectionSubtitle
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
        />
        <ul className="our-tech-grid animate__animated animate__fadeInUp">
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon01} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon02} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon03} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon01} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon02} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon03} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon01} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon02} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon03} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon01} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon02} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon03} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon01} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon02} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
          <li className="our-tech-item">
            <span className="our-tech-icon-wrapper">
              <img src={Icon03} alt=""/>
            </span>
            <h2 className="our-tech-title">BigData</h2>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default OurTech;