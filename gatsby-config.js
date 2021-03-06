require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gallay Avocat`,
    description: `Avocat à Bordeaux`,
    author: `camille villard | cdltbisou`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // sass styles
    `gatsby-plugin-sass`,
    // wordpress plugin
    {
      resolve: `gatsby-source-wordpress`,
      options: {
       baseUrl: process.env.WORDPRESS_BASE_URL,
       protocol: process.env.WORDPRESS_PROTOCOL,
       hostingWPCOM: (process.env.WORDPRESS_HOSTING_WPCOM === 'true'),
       useACF: (process.env.WORDPRESS_USE_ACF === 'true'),
       verboseOutput: (process.env.WORDPRESS_VERBOSE_OUTPUT === 'true'),
       auth: {
         wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
         wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
         wpcom_user: process.env.WORDPRESS_USER,
         wpcom_pass: process.env.WORDPRESS_PASSWORD,
       },
       includedRoutes: [
         "**/posts",
         "**/pages",
         "**/categories",
         "**/menus",
       ],
      },
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_blanc.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
