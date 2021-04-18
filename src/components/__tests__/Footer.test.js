import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('shows a copyright statement and links', () => {
    render(<Footer />);

    expect(screen.getByText('© 2021 Kristin Anthony')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /RSS Feed/i })).toBeInTheDocument();
  });
});
