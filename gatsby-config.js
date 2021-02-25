module.exports = {
  siteMetadata: {
    title: "neurotechtor",
    siteUrl:'https://neurotechtor.netlify.app'
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-facebook-customer-chat`,
      options: {
        sdk: {
          appId: '111736127626645',
          ...
        },
        chat: {
          pageId: '111736127626645',
          loggedInGreeting: 'Hi! How can I help you?',
          loggedOutGreeting: 'Hi! How can I help you?',
        }
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "260024080",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
