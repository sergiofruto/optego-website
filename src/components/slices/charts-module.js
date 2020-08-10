import React, { Fragment, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import SinglePiechart from './single-pie-chart/single-pie-chart';
import { RichText } from 'prismic-reactjs'

const ChartsModule = ({ slice }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility active={!isVisible} offset={{ top: -30 }}>
      <Fragment>
        <div className="charts-module">
          {isVisible && slice.fields.map((item) => (
            <SinglePiechart
              labelPreNumber={RichText.asText(item.pre_number)}
              labelNumber={RichText.asText(item.number)}
              labelUnit={RichText.asText(item.unit)}
              labelText={RichText.asText(item.label)}
            />
          ))}
        </div>
      </Fragment>
    </VisibilitySensor>
  );
};

export default ChartsModule;