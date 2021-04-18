import * as React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../SEO';

const siteTitle = 'K. Anthony Portfolio';
const siteDescription = 'Kristin is making Work you can Play';
const title = 'Explorables';

const expected = [
  {
    property: 'og:title',
    content: title,
  },
  {
    property: 'og:site_name',
    content: siteTitle,
  },
  {
    name: 'description',
    content: siteDescription,
  },
];

// From https://www.emgoto.com/gatsby-unit-testing/
describe('SEO', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: 'K. Anthony Portfolio',
          description: 'Kristin is making Work you can Play',
          twitter: '@anthkris',
        },
      },
    });
  });
  it('passes correct SEO meta tags to rendered HTML', async () => {
    render(<SEO title={title} />);
    const helmet = Helmet.peek();

    expect(helmet.metaTags).toEqual(expect.arrayContaining(expected));
  });
});
