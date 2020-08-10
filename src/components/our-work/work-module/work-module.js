import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import { RichText } from 'prismic-reactjs'
import Button from '../../shared/button/button';

const WorkModule = ({work, title, image, link}) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };
  let img = image;
  if (work.node.large_banner) {
    img = work.node.large_banner.url;
  }
  console.log(work);
  return (
    <article>
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
        <Fragment>
          <div className={classnames('work-wrapper', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
            <img src={img} alt={title} />
            <div className="work-info">
              <h2 className="work-title">
                {RichText.asText(work.node.brand_name)}
              </h2>
              <Button text="view campaign" link={`/${work.node._meta.uid}`} arrow small />
            </div>
          </div>
        </Fragment>
      </VisibilitySensor>
    </article>
  );
};

export default WorkModule;