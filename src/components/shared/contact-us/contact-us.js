import React from 'react';
import Container from "./../../shared/container/container";
import SectionTitle from '../section-title/section-title';
import SectionSubtitle from '../section-subtitle/section-subtitle';
import AsideMark from '../aside-mark/aside-mark';
import Arrow from './../../../static/icon-arrow-white.svg';

const withArrowStyles = {
  backgroundImage: 'url(' + Arrow + ')',
}

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <Container>
        {/* <AsideMark number="5" tag="contact us" /> */}
        <SectionTitle text="get in touch" />
        <SectionSubtitle
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
        />
        <form className="contact-us-form" action="">
          <input className="half" placeholder="name" type="text"/>
          <input className="half" placeholder="email" type="email"/>
          <input className="half" placeholder="budget" type="number"/>
          <input className="half" placeholder="services" type="text"/>
          <textarea placeholder="message" name="message"></textarea>
          <button className="main-btn" type="submit">
            Enviar
            <span className="main-btn-arrow" style={withArrowStyles} />
          </button>
        </form>
      </Container>
    </section>
  );
};

export default ContactUs;