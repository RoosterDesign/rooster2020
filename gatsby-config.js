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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            "HalisR-Bold",
            "HalisR-Book",
            "HalisR-ExtraLight",
            "HalisR-Medium",
          ],
          urls: [`/fonts/fonts.css`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rooster Design`,
        short_name: `Rooster`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
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
        name: "portfolioImages",
        path: `src/images/portfolio/`,
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
        name: "skillLogos",
        path: `src/images/skill-logos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "services",
        path: `src/images/services/`,
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
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    // "gatsby-plugin-preload-link-crossorigin",
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-47630581-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
      },
    },
  ],
}
