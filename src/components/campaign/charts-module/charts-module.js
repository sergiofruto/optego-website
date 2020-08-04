import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const ChartsModule = ({ children }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
      <Fragment>
        <div className="charts-module">
          {isVisible && children}
        </div>
      </Fragment>
    </VisibilitySensor>
  );
};

export default ChartsModule;