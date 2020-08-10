import React, { Fragment } from 'react';
import Image from '../slices/image';
import Paragraph from '../slices/paragraph';
import ChartsModule from '../slices/charts-module';
import PillsLabels from '../slices/pills-labels';

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    image_block: Image,
    paragraph_block: Paragraph,
    charts_module: ChartsModule,
    services_pill_labels: PillsLabels,
  };

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return (
    <Fragment>
      {sliceZoneContent}
    </Fragment>
  )
}

export default SliceZone;