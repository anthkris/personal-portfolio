import React from 'react';
import styled from 'styled-components';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css'; // this will auto show and hide the link on focus
import PageHead from './PageHead';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  background: var(--snow);
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  // console.log(children);
  let postTitle;
  let markText;
  let tagline;
  if (children.props.location.pathname.includes('/play')) {
    markText = 'is making stuff';
    tagline = 'on the interwebs';
  } else if (children.props.pageContext.slug) {
    // console.log('has slug');
    postTitle = children.props.data.post.title;
    markText = null;
    tagline = null;
  } else if (children.props.location.pathname.includes('/writing')) {
    markText = 'is writing';
    tagline = 'to be as transparent, helpful, and reflective as they can';
  } else if (children.props.location.pathname.includes('/contact')) {
    markText = 'is around';
    tagline = 'somewhere';
  } else {
    markText = 'Anthony';
    tagline = 'makes work you can play';
  }
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <SkipNavLink />
        <PageHead postTitle={postTitle} markText={markText} tagline={tagline} />
        <SkipNavContent />
        <main>{children}</main>
        <Footer />
      </ContentStyles>
    </>
  );
};

export default Layout;
