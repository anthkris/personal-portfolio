const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `K. Anthony Portfolio`,
    siteUrl: `https://knanthony.com`,
    description: `Kristin is making Work you can Play`,
    twitter: `@anthkris`,
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
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `K. Anthony Portfolio`,
        short_name: `KAnthonyPortfolio`,
        description: `Kristin makes work you can play. Find out more on their portfolio.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#F4F4F4`,
        theme_color: `#37ABD4`,
        display: `standalone`,
        icon: `src/assets/images/knanthony_logo.svg`,
      },
    },
  ],
};
