import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import WritingList from '../components/WritingsList';

const WritingStyles = styled.section`
  font-size: 1.3rem;
  padding: 2rem;
`;

const WritingPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <>
      <SEO title="Writing" />
      <WritingStyles className="interior">
        <WritingList posts={posts} />
      </WritingStyles>
    </>
  );
};

export default WritingPage;

WritingPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query PostQuery {
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        slug {
          current
        }
        id
        publishedAt
        description
      }
    }
  }
`;
