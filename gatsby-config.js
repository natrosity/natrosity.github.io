const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Natrosity",
    siteUrl: "https://natrosity.github.io/",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`),
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "natrosity-components": path.join(__dirname, "src/components"),
        "natrosity-styles": path.join(__dirname, "src/styles"),
        "natrosity-images": path.join(__dirname, "src/images"),
        "natrosity-pages": path.join(__dirname, "src/pages"),
      },
    },
  ],
};
