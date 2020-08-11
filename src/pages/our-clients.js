import React, { Fragment, useState } from 'react';
import { graphql } from "gatsby";
import VisibilitySensor from 'react-visibility-sensor';
import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Container from '../components/shared/container/container';
import PageTitle from '../components/shared/page-title/page-title';
import PageSubtitle from '../components/shared/page-subtitle/page-subtitle';
import LayeredAnimation from '../components/shared/layered-animation/layered-animation';
import OurClients from './../components/homepage/our-clients/our-clients';
import ContactUs from './../components/shared/contact-us/contact-us';
import AnimatedCircle from './../../static/animated-dashed-circle.svg';

import "./../styles/core.scss";

const OurWork = ({ data }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  const prismicContentClients = data.prismic.allOur_clientss.edges[0];
  const prismicClients = data.prismic.allHomepages.edges[0];
  if (!prismicContentClients) return null;
  const documentClients = prismicContentClients.node;
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
              {/* <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
                <div className="square-animation">
                  {<LayeredAnimation isVisible={isVisible} />}
                </div>
              </VisibilitySensor> */}
              <PageTitle text={documentClients.page_title} />
              <PageSubtitle text={documentClients.page_subtitle} />
              <div className="clients-module">
                <OurClients
                  clients={prismicClients.node.our_customers_module.body[0].fields}
                  noLine
                />
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
      allOur_clientss {
        edges {
          node {
            page_subtitle
            page_title
          }
        }
      }
      allHomepages {
        edges {
          node {
            our_customers_module {
              ... on PRISMIC_Customers_list {
                body {
                  ... on PRISMIC_Customers_listBodyCustomer {
                    type
                    label
                    fields {
                      customer_description
                      customer_logo
                      customer_name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default OurWork;