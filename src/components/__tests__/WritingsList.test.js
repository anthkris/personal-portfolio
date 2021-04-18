import * as React from 'react';
import { render, screen } from '@testing-library/react';
import WritingList from '../WritingsList';

const postArr = [
  {
    title: 'The Tiny Deliberate Practice of the Quiz Game',
    slug: {
      current: 'the-tiny-deliberate-practice-of-the-quiz-game',
    },
    id: '-9528ed57-cb3d-5df8-beb1-8da8b9d9e70c',
    publishedAt: '2019-03-28T09:46:00.000Z',
    description:
      'Quiz games offer players a chance at deliberate practice on a particular, small, tightly-bound skill.',
  },
  {
    title: 'On Being an "Un-Opinionated" Developer',
    slug: {
      current: 'on-being-an-un-opinionated-developer',
    },
    id: '-30b11728-bdb5-50b3-8b14-e43f295dea79',
    publishedAt: '2017-09-26T09:43:00.000Z',
    description:
      'Having a bunch of tools that I know and can wield allows me to continually say "Yes, and..."',
  },
  {
    title: 'Ideas on Effective Simulations',
    slug: {
      current: 'ideas-on-effective-simulations',
    },
    id: '-828b8e1e-b008-5415-986d-e8fe1f6c64fc',
    publishedAt: '2016-08-23T09:41:00.000Z',
    description:
      'Online learning is about making simulations. We should be making effective ones.',
  },
];

describe('Writing List', () => {
  it('renders a series of blog cards', () => {
    render(<WritingList posts={postArr} />);

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(
      screen.getByText('On Being an "Un-Opinionated" Developer')
    ).toBeInTheDocument();
    expect(screen.getByText('August 23, 2016')).toBeInTheDocument();
  });
});
