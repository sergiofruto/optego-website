import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import TextImageBlock from '../components/about-us/text-image-block/text-image-block'
import Container from '../components/shared/container/container';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';
import OurTech from './../components/shared/our-tech/our-tech';
import ContactUs from './../components/shared/contact-us/contact-us';

import "./../styles/core.scss";

// import Image1 from "./../../static/about-us-illus-01.svg";
// import Image2 from "./../../static/about-us-illus-02.svg";
// import Image3 from "./../../static/about-us-illus-03.svg";
import AnimatedCircle from './../../static/animated-dashed-circle.svg';

const image1 = '../about-us-illus-01.svg'
const image2 = '../about-us-illus-02.svg'
const image3 = '../about-us-illus-03.svg'

const AboutUs = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <Fragment>
      <Header />
      <main className="page-top">
        <div className="about-us-page">
          <span className="page-bg-illu-01">
            <AnimatedCircle />
          </span>
          <aside></aside>
          <Container>
            <div className="our-work-main-content">
              <PageTitle text="about us" />
              <PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <div className="about-us-sections">
                <TextImageBlock
                  title='who?'
                  description={`A team of 15 easy going
                      nerdy digital millennials with
                      rock solid experience (10 years)
                      in <strong>digital business ventures.</strong>`}
                  image={image1}
                  order='left'
                />
                <TextImageBlock
                  title='how?'
                  description={`Using a swissknife of tools
                    <br />(yes we also code our own)<br />
                    <strong>and methodologies to
                    improve CRO </strong>(conversion
                    rate optimization).`}
                  image={image2}
                  order='right'
                />
                <TextImageBlock
                  title='for who?'
                  description={`We usually for for digital
                    startups and ecommerce
                    companies globally, but we
                    are also working for the
                    biggest beverage, the largest
                    bank and the coolest app =)`}
                  image={image3}
                  order='left'
                />
                <hr className="section-divider" />
              </div>
            </div>
          </Container>
          <OurTech />
          <ContactUs />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default AboutUs;