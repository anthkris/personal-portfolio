import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import matchMediaPolyfill from 'mq-polyfill';
import '../../../__mocks__/matchMedia-mock';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Nav from '../Nav';

// Test that desktopNav shows on desktop and mobileNav on mobile
// Snapshot info: https://medium.com/simply/snapshots-painless-testing-of-react-components-6bce3c4d51fc

describe('Nav', () => {
  it('renders the desktopNav top nav on desktop', async () => {
    const tree = renderer.create(<Nav />).toJSON();
    const { container } = render(<Nav />);
    // console.log(container.firstChild);
  });
  it('renders the mobileNav top nav on mobile', async () => {});
});
