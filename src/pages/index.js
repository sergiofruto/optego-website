import React, { Fragment, useState, useEffect } from "react";
import { graphql, Link } from "gatsby"

import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Hero from './../components/homepage/hero/hero';
import AboutUs from './../components/homepage/about-us/about-us';
import OurServices from './../components/homepage/our-services/our-services';
import OurClients from './../components/homepage/our-clients/our-clients';
import ContactUs from './../components/shared/contact-us/contact-us';
import LoadAnimation from './../../static/load-animation-final.svg';

import "./../styles/core.scss";

const Index = ({ data: { prismicHomepage } }) => {
  // const getFirstLoad = sessionStorage.getItem('visited') || false;
  // const [showAnimation, setShowAnimation] = useState(!getFirstLoad);
  // if (getFirstLoad) {
  //   console.log('esta todo bien');
  // } else {
  //   sessionStorage.setItem("visited", true);
  // };

  const [showLoading, setShowLoading] = useState(false)
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShowLoading(true), 1500)

      // this will clear Timeout when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(timer1)
      }
    },
    [] //useEffect will run only one time
  )

  return(
    <Fragment>
      <Header homeAnimation/>
        <main>
          <Hero
            title={prismicHomepage.data.hero_title.text}
            image={prismicHomepage.data.hero_image.url}
            imageAlt={prismicHomepage.data.hero_image.alt}
          />
          <AboutUs />
          <OurServices />
          <OurClients />
          <ContactUs home/>
        </main>
      <Footer />
      {!showLoading && <div className="home-load-animation"><LoadAnimation /></div>}
    </Fragment>
  );
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      data {
        hero_title {
          text
        }
        hero_image {
          url
          alt
        }
      }
    }
  }
`