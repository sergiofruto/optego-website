import React, { useState }  from 'react';
import classnames from 'classnames';
import Container from "./../../shared/container/container";
import SectionTitle from './../../shared/section-title/section-title';
import AsideMark from './../../shared/aside-mark/aside-mark';
import VisibilitySensor from 'react-visibility-sensor';

// import Image1 from "./../../../../static/about-us-wwd-1.png";
// import Image2 from "./../../../../static/about-us-wwd-2.png";
// import Image3 from "./../../../../static/about-us-wwd-3.png";
import BgIllus01 from "./../../../../static/bg-shape-02.svg";

const bgIllusStyles1 = {
  backgroundImage: 'url(' + BgIllus01 + ')',
}


const AboutUs = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <section className="homepage-about-us">
        <span className="bg-illustration-01" style={bgIllusStyles1} />
        <Container>
          <AsideMark number="02" tag="about us" />
          <SectionTitle text="about us" />
            <ul className="what-we-do-cards">
              <li className={classnames('what-we-do-card', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
                <img className="what-we-do-card-image" src={`./../../../../about-us-wwd-1.png`} alt=""/>
                <h2 className="what-we-do-card-title">
                  we <br/>
                  transform<br />
                  data<br />
                </h2>
                <p className="what-we-do-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit amet ex accumsan tristique.
                </p>
              </li>
              <li className={classnames('what-we-do-card', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
                <img className="what-we-do-card-image" src={`./../../../../about-us-wwd-2.png`} alt=""/>
                <h2 className="what-we-do-card-title">
                  the <br/>
                  power of <br/>
                  Social Media <br/>
                </h2>
                <p className="what-we-do-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit amet ex accumsan tristique.
                </p>
              </li>
              <li className={classnames('what-we-do-card', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
                <img className="what-we-do-card-image" src={`./../../../../about-us-wwd-3.png`} alt=""/>
                <h2 className="what-we-do-card-title">
                  we <br/>
                  transform<br />
                  data<br />
                </h2>
                <p className="what-we-do-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod lectus. hendrerit velit sit amet ex accumsan tristique.
                </p>
              </li>
            </ul>
        </Container>
      </section>
    </VisibilitySensor>
  );
};

export default AboutUs;