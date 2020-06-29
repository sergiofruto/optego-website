import React, { Fragment } from "react";

import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Section from '../components/shared/section/section';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';

import "./../styles/core.scss";

import Image1 from "./../static/works-1.png";
import Image2 from "./../static/works-2.jpg";
import Image3 from "./../static/works-3.png";


export default function OurWork() {
  return (
    <Fragment>
      <Header />
      <div className="our-work-outer-container">
        <aside></aside>
        <main className="our-work-main-content">
          <PageTitle text="our work" />
          <PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <div className="works-grid">
            <div className="work-wrapper">
              <img src={Image1} alt=""/>
              <h2 className="work-title">Coca Cola</h2>
            </div>
            <div className="work-wrapper">
              <img src={Image2} alt=""/>
              <h2 className="work-title">Mauricio Macri</h2>
            </div>
            <div className="work-wrapper">
              <img src={Image3} alt=""/>
              <h2 className="work-title">Movistar</h2>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  )
}
