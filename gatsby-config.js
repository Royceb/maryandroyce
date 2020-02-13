module.exports = {
  siteMetadata: {
    title: '🎉 Mary and Royce 🎉',
    author: 'Royce Brooks',
    description: "Mary and Royce's wedding site",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/fav.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
