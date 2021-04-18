import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogCardStyles = styled.a`
  display: block;
  margin: 0 auto;
  width: 80%;
  border: var(--black) solid 2px;
  padding: 2em;
  margin-bottom: 2em;
  text-decoration: none;
  &:hover,
  &:focus {
    border-color: var(--link-pink);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  h2 {
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
  }
  .postDescription {
    line-height: 1.8rem;
  }
`;

const BlogCard = ({ postSlug, postTitle, postDesc, postDate }) => (
  // console.log(postDate);
  <BlogCardStyles href={`/writing/${postSlug}`}>
    <h2 className="postTitle">{postTitle}</h2>
    <p className="postDate">
      {new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }).format(new Date(postDate))}
    </p>
    <p className="postDescription">{postDesc}</p>
  </BlogCardStyles>
);
export default BlogCard;

BlogCard.propTypes = {
  postSlug: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDesc: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
};
