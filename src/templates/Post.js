import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Image from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SEO from '../components/SEO';

const PostStyles = styled.section`
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
  a {
    color: var(--link-pink);
  }
  pre,
  code {
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const SinglePostPage = ({ data }) => {
  const { post } = data;
  const h2Override = ({ children, ...props }) => (
    <h2 className="title" {...props}>
      {children}
    </h2>
  );
  const imgSerializer = ({ node }) => (
    // console.log('is this working? image');
    <figure>
      <Image {...node} />
      <figcaption>{node.title}</figcaption>
    </figure>
  );
  const ytSerializer = ({ node }) => {
    const { url } = node;
    const id = getYouTubeId(url);
    return <YouTube videoId={id} />;
  };
  const codeSerializer = ({ node }) => {
    if (!node || !node.code) {
      return null;
    }
    const { language, code } = node;
    return (
      <SyntaxHighlighter language={language || 'text'} style={docco}>
        {code}
      </SyntaxHighlighter>
    );
  };
  const markSerializer = ({ children }) => <strong>{children}</strong>;
  // console.log('Post: ', post);
  // From: https://stackoverflow.com/questions/63563616/passing-css-classes-into-sanity-block-content-root
  const overrides = {
    h2: h2Override,
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
      image: imgSerializer,
      youtube: ytSerializer,
      code: codeSerializer,
    },
    marks: {
      strong: markSerializer,
    },
  };

  return (
    <>
      <SEO title={post.title} />
      <PostStyles className="interior longForm">
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

SinglePostPage.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.object,
  }).isRequired,
  node: PropTypes.object,
  children: PropTypes.object,
};
