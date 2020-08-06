
import React from 'react'

const Image = ({ slice }) => (
  <figure className="campaign-image-wrapper">
    <img
      src={slice.primary.desktop_image.url}
      alt={slice.primary.desktop_image.alt}
    />
  </figure>
);

export default Image;