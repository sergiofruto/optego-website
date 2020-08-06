import React, { Fragment, useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Hero from './../components/homepage/hero/hero';
import AboutUs from './../components/homepage/about-us/about-us';
import OurServices from './../components/homepage/our-services/our-services';
import OurClients from './../components/homepage/our-clients/our-clients';
import ContactUs from './../components/shared/contact-us/contact-us';
import LoadAnimation from './../../static/load-animation-final.svg';

import "./../styles/core.scss";

const Index = ({ data }) => {
  // const getFirstLoad = sessionStorage.getItem('visited') || false;
  // const [showAnimation, setShowAnimation] = useState(!getFirstLoad);
  // if (getFirstLoad) {
  //   console.log('esta todo bien');
  // } else {
  //   sessionStorage.setItem("visited", true);
  // };
  const [showLoading, setShowLoading] = useState(false);
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
  console.log(data);
  const prismicContent = data.prismic.allHomepages.edges[0];
  if (!prismicContent) return null;
  const document = prismicContent.node;
  
  return(
    <Fragment>
      <Header homeAnimation/>
        <main className="page-top">
          <Hero
            title={document.hero_title}
            image={document.hero_image.url}
            imageAlt={document.hero_image.alt}
          />
          <AboutUs 
            title={document.about_us_title}
            blocks={document.about_us_block}
          />
          <OurServices
            title={document.our_services_title}
            blocks={document.our_services_block}
          />
          <OurClients />
          <ContactUs home/>
        </main>
      <Footer />
      {!showLoading && <div className="home-load-animation"><LoadAnimation /></div>}
    </Fragment>
  );
}

export const query = graphql`
  query {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_image
            about_us_title
            about_us_block {
              image
              title
              description
            }
            our_services_title
            our_services_block {
              icon
              title
              description
            }
          }
        }
      }
    }
  }
`
export default Index;