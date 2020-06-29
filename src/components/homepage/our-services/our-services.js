import React from 'react';
import SectionTitle from '../../shared/section-title/section-title';
import SectionSubtitle from '../../shared/section-subtitle/section-subtitle';
import AsideMark from '../../shared/aside-mark/aside-mark';


const OurServices = () => {
  return (
    <section class="homepage-our-services">
      <div className="inner-wrapper">
        <AsideMark number="3" tag="our services" />
        <div className="content">
          <SectionTitle text="our services" />
          <SectionSubtitle
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit."
          />
          <div className="our-services-slider">
            <ul className="our-services-grid">

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;