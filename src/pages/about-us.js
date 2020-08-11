import React, { Fragment, useState } from 'react';
import { graphql, Link } from "gatsby";
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

import AnimatedCircle from './../../static/animated-dashed-circle.svg';

const AboutUs = ({ data }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  const prismicContent = data.prismic.allAbout_uss.edges[0];
  if (!prismicContent) return null;
  const document = prismicContent.node;
  const {
    page_title,
    page_subtitle,
    who_title,
    who_description,
    who_image,
    how_title,
    how_description,
    how_image,
    for_who_title,
    for_who_description,
    for_who_image,
    our_tech_title,
    our_tech_description,
    tech_list,
  } = document;
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
              <PageTitle text={page_title} />
              <PageSubtitle text={page_subtitle} />
              <div className="about-us-sections">
                <TextImageBlock
                  title={who_title}
                  description={who_description}
                  image={who_image}
                  order='left'
                />
                <TextImageBlock
                  title={how_title}
                  description={how_description}
                  image={how_image}
                  order='right'
                />
                <TextImageBlock
                  title={for_who_title}
                  description={for_who_description}
                  image={for_who_image}
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

export const query = graphql`
  query {
    prismic {
      allAbout_uss {
        edges {
          node {
            page_title
            page_subtitle
            tech_list {
              description
              icon
              title
            }
            our_tech_title
            our_tech_description
            how_title
            contact_us_form
            for_who_description
            for_who_image
            for_who_title
            how_description
            how_image
            who_description
            who_image
            who_title
          }
        }
      }
    }
  }
`

export default AboutUs;