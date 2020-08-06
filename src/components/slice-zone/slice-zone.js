import React, { Fragment } from 'react';
import Image from '../slices/image';
import Paragraph from '../slices/paragraph';

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    image_block: Image,
    paragraph_block: Paragraph,
  }

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