import React, { Fragment } from "react";

import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import Container from '../components/shared/container/container';
import Hero from '../components/campaign/hero';
import ContactUs from '../components/shared/contact-us/contact-us';

import "./../styles/core.scss";

import HeroImage from "./../static/capaign-hero-01.png";
import Image1 from "./../static/works-1.png";
import Image2 from "./../static/campaign-image-03@2x.png";

export default function OurWork() {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="campaign-container">
          <aside></aside>
          <Hero image={HeroImage}></Hero>
          <div className="content">
            <div className="container-campaign">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae pretium magna. Sed aliquet felis at arcu rhoncus bibendum ut in nibh. Duis efficitur, risus rutrum dictum dapibus, nulla lectus rutrum odio, id blandit ligula eros non magna. Praesent auctor mauris eu metus mattis, id lacinia sem venenatis. Nullam congue placerat diam, vitae vehicula massa consectetur in. Nunc sodales facilisis velit, a scelerisque mi laoreet sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sodales venenatis scelerisque. Proin ac volutpat velit, id interdum dui. Proin volutpat et nibh eu bibendum.
              </p>
              <div className="campaign-image-wrapper">
                <img src={Image1} alt="" />
              </div>
              <div className="campaign-image-wrapper">
                <img src={Image1} alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloribus in rerum unde. Asperiores possimus dicta maiores similique impedit? Voluptates illo nisi magni beatae iste illum iusto accusamus tempora nemo.</p>
              <div className="campaign-image-wrapper">
                <img src={Image2} alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloribus in rerum unde. Asperiores possimus dicta maiores similique impedit? Voluptates illo nisi magni beatae iste illum iusto accusamus tempora nemo.</p>
            </div>
          </div>
          <ContactUs />
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}
