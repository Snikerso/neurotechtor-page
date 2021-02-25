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
        key: "EAAEuXLZCnp4YBAFNg2UByOqrSrMD5s1gcHfA20Yl1gZAgKZCVluCPURcSV1N0ZCB7xZAxVs24kSbPR3hXzyEBf7XU3u2ZAZB3QhxpAOyRpiN8NRM7LRJky62gHEOI2dtSH42x1J1oALH01ZCApZAXvAoK0zbsGbvjCZBq0pkgkhdEVKau3vDZCxRKrakVwZB34mpiayHUhZBSjZAwmJgZDZD", // You will need to create a Facebook application and go through review in order to get an API token.
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
