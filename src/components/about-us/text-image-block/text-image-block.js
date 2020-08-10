import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import { RichText } from 'prismic-reactjs'

const TextImageBlock = ({ title, description, image, order}) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <section className="about-us-section">
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible}>
        <Fragment>
            <div className={classnames('left-panel animate__animated', (isVisible && 'animate__fadeInLeft'))}>
              {(order == 'left') &&
                <Fragment>
                  <h2 className="about-us-title">
                    {RichText.asText(title)}
                  </h2>
                  <p
                    className="about-us-description"
                    dangerouslySetInnerHTML={{ __html: description[0].text }}
                  />
                </Fragment>
              }
              {(order == 'right') && <img src={image.url} alt={title} className="illustration"/>}
            </div>
            <div className={classnames('right-panel animate__animated', (isVisible && 'animate__fadeInRight'))}>
              {(order == 'right') &&
                <Fragment>
                  <h2 className="about-us-title">
                    {RichText.asText(title)}
                  </h2>
                  <p
                    className="about-us-description"
                    dangerouslySetInnerHTML={{ __html: description[0].text }}
                  />
                </Fragment>
              }
              {(order == 'left') && <img src={image.url} alt={title} className="illustration"/>}
            </div>
        </Fragment>
      </VisibilitySensor>
    </section>
  );
};

export default TextImageBlock;