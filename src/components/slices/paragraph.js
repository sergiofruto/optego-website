import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Paragraph = ({ slice }) => {
  return (
    <p>
      {RichText.asText(slice.primary.text)}
      {console.log(slice)}
    </p>
  )
}

export default Paragraph