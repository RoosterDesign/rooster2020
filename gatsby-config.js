/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    menuLinks: [
      {
        name: "Homepage",
        link: "/",
      },
      {
        name: "About",
        link: "/about/",
      },
      {
        name: "Services",
        link: "/services/",
      },
      {
        name: "Portfolio",
        link: "/portfolio/",
      },
      {
        name: "Contact",
        link: "/contact/",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        omitGoogleFont: true,
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [
          "./src/styles/_variables.scss",
          "./src/styles/_mixins.scss",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "articleImages",
        path: `src/images/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "clientLogos",
        path: `src/images/client-logos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `src/images/`,
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/downloads/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs/`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["HalisR-Bold", "HalisR-Book"],
          urls: [`/fonts/fonts.css`],
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
  ],
}
