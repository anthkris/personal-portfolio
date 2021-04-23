const dotenv = require('dotenv');

const {
  getBlogUrl,
  filterOutDocsPublishedInTheFuture,
} = require('./src/utils/rssFeedHelpers');

dotenv.config({ path: '.env' });

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: 'K. Anthony Portfolio',
    siteUrl: 'https://knanthony.com',
    description: 'Kristin is making Work you can Play',
    twitter: '@anthkris',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'fredoka one',
          'lato:400,400i,700', // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'K. Anthony Portfolio',
        short_name: 'KAnthonyPortfolio',
        description:
          'Kristin makes work you can play. Find out more on their portfolio.',
        lang: 'en',
        start_url: '/',
        background_color: '#F4F4F4',
        theme_color: '#37ABD4',
        display: 'standalone',
        icon: 'src/assets/images/knanthony_logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allSanityPost = [] } }) =>
              allSanityPost.edges
                .filter(({ node }) => filterOutDocsPublishedInTheFuture(node))
                .filter(({ node }) => node.slug)
                .map(({ node }) => {
                  const { title, publishedAt, slug, description } = node;
                  const url =
                    site.siteMetadata.siteUrl + getBlogUrl(slug.current);
                  return {
                    title,
                    date: publishedAt,
                    url,
                    guid: url,
                    description,
                  };
                }),
            query: `{
              allSanityPost(sort: {fields: publishedAt, order: DESC}) {
                edges {
                  node {
                    title
                    publishedAt
                    slug {
                      current
                    }
                    description
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'K. Anthony Blog',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        // Unique site id
        siteId: 'TREJQEXO',
      },
    },
  ],
};
