import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from '../section-title/section-title';
import SectionSubtitle from '../section-subtitle/section-subtitle';
import AsideMark from '../aside-mark/aside-mark';
import ScrollLine from './../../shared/scroll-line/scroll-line';
import Button from '../../../components/shared/button/button';

const ContactUs = ({ home }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="contact-us-section">
      {home && <ScrollLine />}
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible}>
        <Fragment>
          <Container>
            {home && <AsideMark number="05" tag="contact us" />}
            <SectionTitle text="get in touch" isVisible={isVisible}  />
            <SectionSubtitle
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
              isVisible={isVisible} 
            />
            <form className={classnames('contact-us-form', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
              <input className="half" placeholder="name" type="text" />
              <input className="half" placeholder="email" type="email" />
              <input className="full" placeholder="services" type="text" />
              <textarea placeholder="message" name="message"></textarea>
              <div className="button-row">
                <Button text="send" link="#" arrow />
              </div>
            </form>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default ContactUs;