import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../__mocks__/matchMedia-mock';
import PageHead from '../PageHead';

const postTitle = 'The Tiny Deliberate Practice of the Quiz Game';
const markText = 'is learning';
const tagline = 'something';

describe('PageHead', () => {
  it('renders the default PageHead', () => {
    render(<PageHead />);
    expect(screen.getByText('Anthony')).toBeInTheDocument();
    expect(screen.getByText('Makes Work you can Play')).toBeInTheDocument();
  });
  it('renders the PageHead with different props', () => {
    render(<PageHead markText={markText} tagline={tagline} />);
    expect(screen.getByText(markText)).toBeInTheDocument();
    expect(screen.getByText(tagline)).toBeInTheDocument();
  });
  it('renders the PageHead of a post page', () => {
    render(<PageHead postTitle={postTitle} />);
    expect(screen.getByText(postTitle)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Back to all writing/i })
    ).toBeInTheDocument();
  });
});
