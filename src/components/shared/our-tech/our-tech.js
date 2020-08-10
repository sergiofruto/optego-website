import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';

import Icon01 from './../../../../static/tech-icon-01.svg';
import Icon02 from './../../../../static/tech-icon-02.svg';
import Icon03 from './../../../../static/tech-icon-03.svg';
import Icon04 from './../../../../static/tech-icon-04.svg';
import Icon05 from './../../../../static/tech-icon-05.svg';
import Icon06 from './../../../../static/tech-icon-06.svg';
import Icon07 from './../../../../static/tech-icon-07.svg';
import Icon08 from './../../../../static/tech-icon-08.svg';
import Icon09 from './../../../../static/tech-icon-09.svg';
import Icon10 from './../../../../static/tech-icon-10.svg';
import Icon11 from './../../../../static/tech-icon-11.svg';
import Icon12 from './../../../../static/tech-icon-12.svg';
import Icon13 from './../../../../static/tech-icon-13.svg';
import Icon14 from './../../../../static/tech-icon-14.svg';
import Icon15 from './../../../../static/tech-icon-15.svg';
import Icon16 from './../../../../static/tech-icon-16.svg';
import Icon17 from './../../../../static/tech-icon-17.svg';

const iconsComponents = {
  icon01: Icon01,
  icon02: Icon02,
  icon03: Icon03,
  icon04: Icon04,
  icon05: Icon05,
  icon06: Icon06,
  icon07: Icon07,
  icon08: Icon08,
  icon09: Icon09,
  icon10: Icon10,
  icon11: Icon11,
  icon12: Icon12,
  icon13: Icon13,
  icon14: Icon14,
  icon15: Icon15,
  icon16: Icon16,
  icon17: Icon17,
};

let ourTechList = [
  { title: 'BigData', icon: 'icon01', desc: 'Practical data implementations' },
  { title: 'DataScience', icon: 'icon02', desc: 'Applied data solutions' },
  { title: 'Data Mining', icon: 'icon03', desc: 'Scraping and data generation ' },
  { title: 'Tech Data Modeling', icon: 'icon04', desc: 'Data cleanse and advance segmentation' },
  { title: 'Predictive Analytics', icon: 'icon05', desc: 'Guessing the future ? yeap' },
  { title: 'Analytics 360', icon: 'icon06', desc: 'Licensed tools and dedicated services' },
  { title: 'Machine Learning', icon: 'icon07', desc: 'The modern “Shoemaker” elves ' },
  { title: 'Deep Learning', icon: 'icon08', desc: 'Computer neural networks ' },
  { title: 'AI', icon: 'icon09', desc: 'Isaac Asimo’s worst dream come true' },
  { title: 'People Analytics', icon: 'icon10', desc: 'Tracking touchpoints with real interactions' },
  { title: 'Development Solutions', icon: 'icon11', desc: 'Coders and programmers having fun' },
  { title: 'Geofencing', icon: 'icon12', desc: `Following people's movement (scary!)`},
  { title: 'Geo Notifications', icon: 'icon13', desc: 'Push notifications on-site' },
  { title: 'Biometric', icon: 'icon14', desc: 'Put your finger where it should' },
  { title: 'People Movement', icon: 'icon15', desc: 'Same as geofencing but scarier' },
  { title: 'DMPs', icon: 'icon16', desc: 'Data management platforms' },
  { title: 'Dynamic Ads', icon: 'icon17', desc: 'We are not all the same, so should your ads...' },
]

const OurTech = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  const iconGenerator = (name) => {
    const Icon = iconsComponents[name];
    return <Icon />;
  }

  return (
    <section>
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible}>
        <Fragment>
          <Container>
            <SectionTitle text="our tech" isVisible={isVisible} />
            <SectionSubtitle
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
              isVisible={isVisible}
            />
            <ul className="our-tech-grid animate__animated animate__fadeInUp">
              {ourTechList.map((item) =>
                <li className={classnames('our-tech-item', 'animate__animated animate__delay-1s', (isVisible && 'animate__fadeInUp'))}>
                  <span className="our-tech-item__icon-wrapper">
                    {iconGenerator(item.icon)}
                  </span>
                  <h2 className="our-tech-item__title">{item.title}</h2>
                  <p className="our-tech-item__description">{item.desc}</p>
                </li>
              )}
            </ul>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default OurTech;