import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioCard from '../PortfolioCard';

const image = '../assets/images/portfolioImages/column_and_veil.png';
const itemTitle = 'Column and Veil Bikes';
const itemDesc =
  'A responsive, one-page course and game build using the free and open source Adapt framework and PhaserJS.';
const itemUrl = 'http://showcase.knanthony.com/candvbikes/index.html#/id/co-05';

describe('Portfolio Card', () => {
  it('renders a portfolio card', () => {
    render(
      <PortfolioCard
        imgSrc={image}
        imgAlt=""
        itemTitle={itemTitle}
        itemDesc={itemDesc}
        itemUrl={itemUrl}
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(itemTitle)).toBeInTheDocument();
    expect(screen.getByText(itemDesc)).toBeInTheDocument();
    expect(screen.getByText('Give it a go')).toBeInTheDocument();
  });
});
