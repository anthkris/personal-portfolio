import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PlainCard from '../PlainCard';

// Have to mock gatsby-plugin-sanity-image or receive errors
// Issue: https://github.com/coreyward/gatsby-plugin-sanity-image/issues/8
jest.mock('gatsby-plugin-sanity-image', () => {
  const mockImage = () => {
    return <img src="" alt="Test" />;
  };
  return mockImage;
});

const itemTitle = 'Dear Instructional Designer';
const itemDesc =
  'The four-season podcast about the instructional design journey.';
const itemUrl = 'https://www.dearinstructionaldesigner.com/';
const imgAsset = {
  asset: {
    metadata: {
      preview:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…+F03Wcydq8f+/LHgoTNQ/8Rp/u8TJKEcAAAAASUVORK5CYII=',
    },
  },
  _id: 'image-01fb1f1ae7e6a1d83e5f11b1cb4851dcdb99617d-3248x2786-png',
  crop: null,
  hotspot: null,
};

describe('PlainCard', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders a plain card without an image', () => {
    render(
      <PlainCard itemTitle={itemTitle} itemDesc={itemDesc} itemUrl={itemUrl} />
    );
    expect(screen.getByText(itemTitle)).toBeInTheDocument();
    expect(screen.getByText(itemDesc)).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /Dear Instructional Designer The four-season podcast about the instructional design journey./i,
      })
    ).toBeInTheDocument();
  });
  it('renders a plain card with an image', () => {
    render(
      <PlainCard
        itemTitle={itemTitle}
        itemDesc={itemDesc}
        itemUrl={itemUrl}
        imgAsset={imgAsset}
        imgAlt="An image"
      />
    );
    expect(screen.getByText(itemTitle)).toBeInTheDocument();
    expect(screen.getByText(itemDesc)).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /Dear Instructional Designer The four-season podcast about the instructional design journey./i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
