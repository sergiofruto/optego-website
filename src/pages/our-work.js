import React, { Fragment, useState } from 'react';
import { graphql, Link } from "gatsby";
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Container from '../components/shared/container/container';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';
import WorkModule from '../components/our-work/work-module/work-module';
import LayeredAnimation from '../components/shared/layered-animation/layered-animation';
import ContactUs from './../components/shared/contact-us/contact-us';
import AnimatedCircle from './../../static/animated-dashed-circle.svg';

import "./../styles/core.scss";

const OurWork = ({ data }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  const prismicContentWorks = data.prismic.allOur_works.edges[0];
  const prismicContentCases = data.prismic.allCases;
  if (!prismicContentWorks) return null;
  const documentWorks = prismicContentWorks.node;
  const documentCases = prismicContentCases.edges;
  return (
    <Fragment>
      <Header />
      <main className="page-top">
        <div className="our-work-outer-container">
          <span className="page-bg-illu-01">
            <AnimatedCircle />
          </span>
          <aside></aside>
          <Container>
            <div className="our-work-main-content">
              <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
                <div className="square-animation">
                  {<LayeredAnimation isVisible={isVisible} />}
                </div>
              </VisibilitySensor>
              <PageTitle text={documentWorks.page_title} />
              <PageSubtitle text={documentWorks.page_subtitle} />
              <div className="works-grid">
                {documentCases.map((work) =>
                  <WorkModule
                    title="Coca Cola"
                    image="../works-1.png"
                    link={'/'}
                    work={work}
                  />
                )}
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

export const query = graphql`
  query {
    prismic {
      allCases {
        edges {
          node {
            brand_name
            large_banner
            title
            _meta {
              uid
            }
          }
        }
      }
      allOur_works {
        edges {
          node {
            page_subtitle
            page_title
          }
        }
      }
    }
  }
`

export default OurWork;