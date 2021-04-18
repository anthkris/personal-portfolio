import * as React from 'react';
import { render, screen } from '@testing-library/react';
import BlogCard from '../BlogCard';

describe('Blog Cards', () => {
  it('renders a blog card', () => {
    const postKey = '1234';
    const postSlug = 'the-tiny-deliberate-practice-of-the-quiz-game';
    const postDesc =
      'Quiz games offer players a chance at deliberate practice on a particular, small, tightly-bound skill.';
    const postTitle = 'The Tiny Deliberate Practice of the Quiz Game';
    const postDate = '2019-03-28T09:46:00.000Z';

    render(
      <BlogCard
        key={postKey}
        postSlug={postSlug}
        postDesc={postDesc}
        postTitle={postTitle}
        postDate={postDate}
      />
    );

    const title = screen.getByText(postTitle);
    const description = screen.getByText(postDesc);
    const link = screen.getByRole('link');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(screen.getByText('March 28, 2019')).toBeInTheDocument();
  });
});
