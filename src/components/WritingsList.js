import { Link } from 'gatsby';
import React from 'react';

const SingleWritingPost = ({ post }) => (
  <Link to={`/writing/${post.slug.current}`}>
    <h2>{post.title}</h2>
  </Link>
);

const WritingList = ({ posts }) => {
  const postArr = posts.map((post) => (
    <SingleWritingPost key={post.id} post={post} />
  ));
  return postArr;
};

export default WritingList;
