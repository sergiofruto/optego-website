import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Paragraph = ({ slice }) => {
  return (
    <p>
      {slice.primary.text[0].text}
    </p>
  )
}

export default Paragraph