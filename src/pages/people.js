import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
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

// import Image1 from "./../../static/about-us-illus-01.svg";
// import Image2 from "./../../static/about-us-illus-02.svg";
// import Image3 from "./../../static/about-us-illus-03.svg";
import AnimatedCircle from './../../static/animated-dashed-circle.svg';

const image1 = '../about-us-illus-01.svg'
const image2 = '../about-us-illus-02.svg'
const image3 = '../about-us-illus-03.svg'

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
              <PageTitle text="meet the nerds 🤓" />
              <PageSubtitle text=" a team of easy going nerdly digital millennials with rock solid experience (10 years) in digital business ventures " />
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