import React, { Fragment } from "react";

import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Section from '../components/shared/section/section';
import Container from '../components/shared/container/container';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';
import OurTech from './../components/shared/our-tech/our-tech';
import ContactUs from './../components/shared/contact-us/contact-us';

import "./../styles/core.scss";

import Image1 from "./../static/about-us-illus-01.svg";
import Image2 from "./../static/about-us-illus-02.svg";
import Image3 from "./../static/about-us-illus-03.svg";

import bgIllus01 from "./../static/bg-illus-circle.svg";

const bgIllusStyles1 = {
  backgroundImage: 'url(' + bgIllus01 + ')',
}


export default function OurWork() {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="about-us-page">
          <span 
            className="page-bg-illu-01 animate__animated animate__fadeIn"
            style={bgIllusStyles1}
          />
          <aside></aside>
          <Container>
            <div className="our-work-main-content">
              <PageTitle text="about us" />
              <PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <div className="about-us-sections animate__animated animate__fadeInUp">
                <section className="about-us-section">
                  <div className="left-panel">
                    <h2 className="about-us-title">How?</h2>
                    <p className="about-us-description">Using a swissknife of tools
                    (yes we also code our own)
                    and methodologies to
                    improve CRO (conversion
                    rate optimization).</p>
                  </div>
                  <div className="right-panel">
                    <img className="about-us-image" src={Image1} alt="" />
                  </div>
                </section>
                <section className="about-us-section">
                  <div className="left-panel">
                    <img className="about-us-image" src={Image2} alt="" />
                  </div>
                  <div className="right-panel">
                    <h2 className="about-us-title">How?</h2>
                    <p className="about-us-description">Using a swissknife of tools
                    (yes we also code our own)
                    and methodologies to
                    improve CRO (conversion
                    rate optimization).</p>
                  </div>
                </section>
                <section className="about-us-section">
                  <div className="left-panel">
                    <h2 className="about-us-title">How?</h2>
                    <p className="about-us-description">Using a swissknife of tools
                    (yes we also code our own)
                    and methodologies to
                    improve CRO (conversion
                    rate optimization).</p>
                  </div>
                  <div className="right-panel">
                    <img className="about-us-image" src={Image3} alt="" />
                  </div>
                </section>
              </div>
              <OurTech />
            </div>
            <ContactUs />
          </Container>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}
