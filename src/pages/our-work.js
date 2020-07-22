import React, { Fragment } from "react";
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Button from '../components/shared/button/button';
import Container from '../components/shared/container/container';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';
import ContactUs from './../components/shared/contact-us/contact-us';

import "./../styles/core.scss";

import bgIllus01 from "./../../static/bg-illus-circle.svg";

const bgIllusStyles1 = {
  backgroundImage: 'url(' + bgIllus01 + ')',
}

export default function OurWork() {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="our-work-outer-container">
          <span
            className="page-bg-illu-01 animate__animated animate__fadeIn"
            style={bgIllusStyles1}
          />
          <aside></aside>
          <Container>
            <div className="our-work-main-content">
              <PageTitle text="our work" />
              <PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <div className="works-grid">
                <div className="work-wrapper animate__animated animate__fadeInUp">
                  <img src={`./../../static/works-1.png`} alt="" />
                  <div className="work-info">
                    <h2 className="work-title">Coca Cola</h2>
                    <Button text="view campaign" link="/campaign" arrow small />
                  </div>
                </div>
                <div className="work-wrapper">
                  <img src={`./../../static/works-2.png`} alt="" />
                  <div className="work-info">
                    <h2 className="work-title">Mauricio Macri</h2>
                    <Button text="view campaign" link="#" arrow small />
                  </div>
                </div>
                <div className="work-wrapper">
                  <img src={`./../../static/works-3.png`} alt="" />
                  <div className="work-info">
                    <h2 className="work-title">Movistar</h2>
                    <Button text="view campaign" link="#" arrow small />
                  </div>
                </div>
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
