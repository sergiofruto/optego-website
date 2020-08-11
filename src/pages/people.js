import React, { Fragment, useState } from 'react';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import TextImageBlock from '../components/about-us/text-image-block/text-image-block'
import Container from '../components/shared/container/container';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';
import OurPeople from './../components/shared/our-people/our-people';
import Jobs from './../components/shared/jobs/jobs';
import ContactUs from './../components/shared/contact-us/contact-us';

import "./../styles/core.scss";

import AnimatedCircle from './../../static/animated-dashed-circle.svg';

const People = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <Fragment>
      <Header />
      <main className="page-top">
        <div className="our-people-page">
          <span className="page-bg-illu-01">
            <AnimatedCircle />
          </span>
          <aside></aside>
          <Container>
            <div className="our-work-main-content">
              <h1 class="page-title animate__animated animate__fadeInUp">meet the nerds 🤓</h1>
              <p class="page-subtitle animate__animated animate__fadeInUp">a team of easy going nerdly digital millennials with rock solid experience (10 years) in digital business ventures</p>
            </div>
          </Container>
          <OurPeople />
          <hr className="section-divider animated"  />
          <Jobs />
          <ContactUs />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default People;