import React, { Fragment } from "react";
import { graphql } from 'gatsby';

import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Hero from '../components/campaign/hero';
import SliceZone from '../components/slice-zone/slice-zone';
import ContactUs from '../components/shared/contact-us/contact-us';

import "./../styles/core.scss";

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
            tagline={document.brand_name}
            title={document.title}
            image={document.large_banner.url}
            imageAlt={document.large_banner.alt}
          />
          <article className="campaign-container__article">
            <SliceZone sliceZone={document.body} />
          </article>
          <div className="related-articles">
            
          </div>
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
          brand_name
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
            ... on PRISMIC_CaseBodyServices_pill_labels {
              type
              label
              fields {
                pill_label
              }
            }
            ... on PRISMIC_CaseBodyCharts_module {
              type
              label
              fields {
                pre_number
                label
                number
                unit
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