import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Container from '../components/shared/container/container';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';
import WorkModule from '../components/our-work/work-module/work-module';
import LayeredAnimation from '../components/shared/layered-animation/layered-animation';
import ContactUs from './../components/shared/contact-us/contact-us';
import AnimatedCircle from './../../static/animated-dashed-circle.svg';

import "./../styles/core.scss";

export default function OurWork() {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };
  return (
    <Fragment>
      <Header />
      <main className="page-top">
        <div className="our-work-outer-container">
          <span className="page-bg-illu-01">
            <AnimatedCircle />
          </span>
          <aside></aside>
          <Container>
            <div className="our-work-main-content">
              <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
                <div className="square-animation">
                  {<LayeredAnimation isVisible={isVisible} />}
                </div>
              </VisibilitySensor>
              <PageTitle text="our work" />
              <PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <div className="works-grid">
                <WorkModule 
                  title="Coca Cola"
                  image="../works-1.png"
                  link={'/'}
                />
                <WorkModule 
                  title="Mauricio Macri"
                  image="../works-macri.jpg"
                  link={'/'}
                />
                <WorkModule 
                  title="sams"
                  image="../campaign-banner-small@2x.jpg"
                  link={'/'}
                />
                <WorkModule 
                  title="Movistar"
                  image="../works-4.png"
                  link={'/'}
                />
              </div>
            </div>
            <ContactUs />
          </Container>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}
