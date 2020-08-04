import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Container from "../container/container";
import SectionTitle from '../section-title/section-title';
import SectionSubtitle from '../section-subtitle/section-subtitle';
import Button from '../button/button';

const OurServices = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="jobs-module">
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
        <Fragment>
          <Container>
            <div className="content">
              <SectionTitle text="jobs" isVisible={isVisible} />
              <SectionSubtitle
                text=" we find the coolest people for our coolest positions. Join us in our digital adventures."
                isVisible={isVisible}
              />
              <ul className={classnames('jobs-grid', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
                <li className="jobs-item">
                    <h2>UI Developer</h2>
                    <p>Buenos Aires, Argentina</p>
                </li>
                <li className="jobs-item">
                    <h2>UI Developer</h2>
                    <p>Buenos Aires, Argentina</p>
                </li>
                <li className="jobs-item">
                    <h2>UI Developer</h2>
                    <p>Buenos Aires, Argentina</p>
                </li>
                <li className="jobs-item">
                    <h2>UI Developer</h2>
                    <p>Buenos Aires, Argentina</p>
                </li>
              </ul>
            </div>
          </Container>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default OurServices;