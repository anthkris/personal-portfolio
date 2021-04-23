import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  // console.log('Props from ssr', props);
  // console.log('Element from ssr', element);
  return <Layout {...props}>{element}</Layout>;
}
