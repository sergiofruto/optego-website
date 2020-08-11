import React from 'react'

const Paragraph = ({ slice }) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: slice.primary.text[0].text }} />
  )
}

export default Paragraph