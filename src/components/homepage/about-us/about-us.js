import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import { RichText } from 'prismic-reactjs'
import Container from "./../../shared/container/container";
import SectionTitle from './../../shared/section-title/section-title';
import AsideMark from './../../shared/aside-mark/aside-mark';
import ScrollLine from './../../shared/scroll-line/scroll-line';

import BgIllus01 from "./../../../../static/bg-shape-02.svg";

const bgIllusStyles1 = {
  backgroundImage: 'url(' + BgIllus01 + ')',
}

const AboutUs = ({title, blocks}) => {
  const strTitle = RichText.asText(title);
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
            <AsideMark number="02" tag={strTitle} />
            <SectionTitle text={strTitle} isVisible={isVisible} />
              <ul className="what-we-do-cards">
                {blocks.map((item, index) =>(
                  <li 
                    className={classnames('what-we-do-card', 'animate__delay-1s', (isVisible && 'animate__animated animate__fadeInUp'))}
                    key={`what-we-do-cards-${index}`}
                  >
                    <img className="what-we-do-card-image" src={item.image.url} alt={item.image.alt} />
                    <h2 className="what-we-do-card-title">
                      {RichText.asText(item.title)}
                    </h2>
                    <p className="what-we-do-card-desc">
                      {RichText.asText(item.description)}
                    </p>
                  </li>
                ))}
              </ul>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default AboutUs;