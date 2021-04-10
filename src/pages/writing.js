import React from 'react';
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

export const query = graphql`
  query PostQuery {
    posts: allSanityPost(sort: { fields: publishedAt }) {
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
`;
