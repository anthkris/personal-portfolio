const graphql = require('gatsby');

const path = require('path');
const fetch = require('isomorphic-fetch');

const turnPostsIntoPages = async ({ graphql, actions }) => {
  // 1. Get a template for this page
  const postTemplate = path.resolve('./src/templates/Post.js');
  // 2. Query all posts
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
          id
          publishedAt
        }
      }
    }
  `);

  // 3. Loop over each post and create a page for it
  data.posts.nodes.forEach((post) => {
    console.log(`Creating a page for ${post.title}`);
    actions.createPage({
      // What is the url for this new page?
      path: `writing/${post.slug.current}`,
      component: postTemplate,
      // use context to pass data to the page
      context: {
        slug: post.slug.current,
      },
    });
  });
};

exports.createPages = async (params) => {
  // Create pages dynamically
  // 1. Posts
  // Run all of the concurrently
  await Promise.all([turnPostsIntoPages(params)]);
};
