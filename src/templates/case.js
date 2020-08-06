import React, { Fragment } from "react";
import { graphql } from 'gatsby';

import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Hero from '../components/campaign/hero';
import SliceZone from '../components/slice-zone/slice-zone';
import ChartsModule from '../components/campaign/charts-module/charts-module';
import SinglePieChart from '../components/campaign/single-pie-chart/single-pie-chart';
import ContactUs from '../components/shared/contact-us/contact-us';

const Page = ({ data }) => {
  const prismicContent = data.prismic.allCases.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node

  return (
    <Fragment>
      <Header />
      <main>
        <div className="campaign-container">
          <aside></aside>
          <Hero
            tagline={document.title}
            title={document.title}
            image={document.large_banner.url}
            imageAlt={document.large_banner.alt}
          />
          <article className="campaign-container__article">
            <SliceZone sliceZone={document.body} />
            <ChartsModule>
              <SinglePieChart
                labelNumber='+230'
                labelUnit="MM"
                labelText="Experiences"
              />
              <SinglePieChart
                labelNumber='+820'
                labelUnit="MM"
                labelText="of impacts"
              />
              <SinglePieChart
                labelNumber='+26'
                labelUnit="%"
                labelText="of engagement"
              />
            </ChartsModule>
          </article>
          <ContactUs />
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}

export const query = graphql`
query PageQuery($uid: String) {
  prismic {
    allCases(uid: $uid) {
      edges {
        node {
          title
          large_banner
          body {
            ... on PRISMIC_CaseBodyParagraph_block {
              type
              label
              primary {
                text
              }
            }
            ... on PRISMIC_CaseBodyImage_block {
              type
              label
              primary {
                desktop_image
                mobile_image
              }
            }
          }
        }
      }
    }
  }
}
`

export default Page