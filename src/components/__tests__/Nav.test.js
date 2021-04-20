import * as React from 'react';
import { render, screen } from '@testing-library/react';
import matchMediaPolyfill from 'mq-polyfill';
import '../../../__mocks__/matchMedia-mock';
import { matches } from '../../utils/test-utils';
import 'jest-styled-components';
import Nav from '../Nav';

// Test that desktopNav shows on desktop and mobileNav on mobile
// Snapshot info: https://medium.com/simply/snapshots-painless-testing-of-react-components-6bce3c4d51fc
// https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b

describe('Nav', () => {
  it('renders the desktopNav top nav on desktop', () => {
    matches(<Nav />);
  });
  it('renders the mobileNav top nav on mobile', () => {
    matchMediaPolyfill(window);
    window.matchMedia('(min-width: 768px)');
    // console.log(window.innerWidth);
    window.resizeTo = async function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'));
    };
    window.resizeTo(500, 667);
    // console.log(window.innerWidth);
    matches(<Nav />);
  });
});
