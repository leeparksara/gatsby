/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
 path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Gatsby ITHS`,
    description: `Enkel starter template för ITHS-studenter`,
    author: `Håkan Gleissman`,
    siteUrl: `http://dummy-site.com`,
  },
  
  plugins: [
    
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,

      },
      
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
       spaceId: `ehx48sa6mjjl`,
        accessToken: `qm-6g_-Jkf28R0HV_svem1pn7YDCM101eLeVHGYVFWk`,
      },
    }, 
  ],
}
