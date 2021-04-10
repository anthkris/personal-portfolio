import { graphql } from 'gatsby';
import React from 'react';
import Image from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../components/SEO';

const PostStyles = styled.section`
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 2rem;
  .title {
    line-height: 1.2em;
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 800px;
  }
  figcaption {
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
  }
`;

const SinglePostPage = ({ data }) => {
  const { post } = data;

  console.log('Post: ', post);
  // From: https://stackoverflow.com/questions/63563616/passing-css-classes-into-sanity-block-content-root
  const overrides = {
    h2: (props) => <h2 className="title" {...props} />,
  };

  const serializers = {
    types: {
      block: (props) =>
        // Check if we have an override for the “style”
        overrides[props.node.style]
          ? // if so, call the function and pass in the children, ignoring
            // the other unnecessary props
            overrides[props.node.style]({ children: props.children })
          : // otherwise, fallback to the provided default with all props
            BlockContent.defaultSerializers.types.block(props),
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      image: ({ node }) => (
        // console.log('is this working? image');
        <figure>
          <Image {...node} />
          <figcaption>{node.title}</figcaption>
        </figure>
      ),
    },
    marks: {
      strong: (props) => <strong>{props.children}</strong>,
    },
  };

  return (
    <>
      <SEO title={post.title} />
      <PostStyles className="interior">
        <BlockContent blocks={post._rawBody} serializers={serializers} />
      </PostStyles>
    </>
  );
};

/* This needs to be dynamic based on the slug
  passed in via context in gatsby-node */
export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      _rawBody
      id
    }
  }
`;

export default SinglePostPage;
