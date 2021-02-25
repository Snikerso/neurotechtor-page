module.exports = {
  siteMetadata: {
    title: "neurotechtor",
    siteUrl:'https://neurotechtor.netlify.app'
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`111736127626645`], // Can be either a numeric ID or the URL ID
        params: {
          fields: 'hours, posts { message, created_time }', // See Facebooks API to see what you can query for
        },
        key: "EAAEuXLZCnp4YBANjnEdMTMgzTOILx2maHum4BZCIJwGBjZATpZB3KoFdVZCZCZCpZBETbnswL8FKv9feqpZAayvljUZAtxM7hYVAlaIzAdRgObLgXHAQtzMHbTbV1OJjrEKmRaluxE0StVGnVoRnYgO1gyJtsNBt8IPExUqNwZC8pkrdd9s5bYMEHX6WnXydXAwIxq7e8zj9lB1sQZDZD", // You will need to create a Facebook application and go through review in order to get an API token.
        version: '10.0', // The version of the graph API to use. Defaults to 5.0
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
