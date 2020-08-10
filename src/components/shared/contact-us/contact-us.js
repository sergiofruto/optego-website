import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from '../section-title/section-title';
import SectionSubtitle from '../section-subtitle/section-subtitle';
import AsideMark from '../aside-mark/aside-mark';
import ScrollLine from './../../shared/scroll-line/scroll-line';
import Button from '../../../components/shared/button/button';
import Form from './form';

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
              text="Contact us! We have the best team waiting to welcome you."
              isVisible={isVisible} 
            />
            <Form isVisible={isVisible} />
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default ContactUs;