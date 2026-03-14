require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  
  module.exports = {
    siteMetadata: {
      title: `Harpreet Saini Portfolio`,
      description: `My personal portfolio and blog built with Gatsby and Contentful`,
      author: `Harpreet Saini`,
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      },
    ],
  }