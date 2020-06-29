import React from 'react';
import SectionTitle from '../section-title/section-title';
import SectionSubtitle from '../section-subtitle/section-subtitle';
import AsideMark from '../aside-mark/aside-mark';
import Button from '../button/button';

import Client1 from './../../../static/client-logo-movistar.svg';
import Client2 from './../../../static/client-logo-sams-club.svg';
import Client3 from './../../../static/client-logo-coca-cola.svg';

const OurServices = () => {
  return (
    <section class="contact-us-section">
      <div className="inner-wrapper">
        <AsideMark number="5" tag="contact us" />
        <div className="content">
          <SectionTitle text="contact us" />
          <SectionSubtitle
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
          />
          <form action="">
            <input type="text"/>
            <input type="email"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
          </form>
          <div className="button-row">
            <Button text="view all clients" link="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;