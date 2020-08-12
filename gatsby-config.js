module.exports = {
  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato',
            variants: ['400', '400i', '700', '700i', '900'],
          },
          {
            family: 'Amiri',
            variants: ['400', '400i', '700', '700i'],
          },
        ],
      },
    },
   {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
      repositoryName: 'audioeye-preview',
       path: '/preview',
    previews: true,
    pages: [{
      type: 'Page',
      match: '/:uid',
      previewPath: '/page-preview',
      component: require.resolve('./src/templates/Page.js'),
    }],
      },
   },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
  ],
}
