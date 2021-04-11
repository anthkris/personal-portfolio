import React from 'react';
import BlogCard from './BlogCard';

const WritingList = ({ posts }) => {
  const postArr = posts.map((post) => (
    <BlogCard
      key={post.id}
      postSlug={post.slug.current}
      postDesc={post.description}
      postTitle={post.title}
      postDate={post.publishedAt}
    />
  ));
  return postArr;
};

export default WritingList;
