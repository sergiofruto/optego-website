import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import classnames from 'classnames';
import Button from '../../shared/button/button';

const WorkModule = ({title, image, link}) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <article>
      <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
        <Fragment>
          <div className={classnames('work-wrapper', 'animate__animated', (isVisible && 'animate__fadeInUp'))}>
            <img src={image} alt={title} />
            <div className="work-info">
              <h2 className="work-title">{title}</h2>
              <Button text="view campaign" link="/campaign" arrow small />
            </div>
          </div>
        </Fragment>
      </VisibilitySensor>
    </article>
  );
};

export default WorkModule;