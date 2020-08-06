/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Optego Website',
    description: 'welcome to digital marketing services based on data knowledge and experience',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'optego',
        defaultLang: 'en-us', // optional, but recommended
        accessToken: `${process.env.API_KEY}`,
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        pages: [{ // optional
          type: 'Case', // TypeName from prismic
          match: '/:uid', // pages will be generated under this pattern
          previewPath: '/preview', // optional path for unpublished documents
          component: require.resolve('./src/templates/case.js'),
          // sortBy: 'date_ASC', // optional, default: meta_lastPublicationDate_ASC; useful for pagination
        }],
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:400,500,600,700,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    }
  ]
}
