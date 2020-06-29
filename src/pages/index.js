import React, { Fragment } from "react";

import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Section from '../components/shared/section/section';
import Title from './../components/homepage/title';
import Hero from './../components/homepage/hero/hero';
import AboutUs from './../components/homepage/about-us/about-us';
import OurServices from './../components/homepage/our-services/our-services';
import OurClients from './../components/homepage/our-clients/our-clients';

import "./../styles/core.scss";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <OurServices />
        <OurClients />
      </main>
      <Footer />
    </Fragment>
  )
}
