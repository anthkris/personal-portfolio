import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ExplorablesPageStyles = styled.div`
  padding: 2rem;
  section {
    font-size: 1.2rem;
  }
  .leadText {
    font-size: 1.7rem;
  }
  .motivationHighlight {
    color: var(--link-pink);
  }
`;

const ExplorablesPage = () => (
  <>
    <SEO title='Explorables' />
    <ExplorablesPageStyles className="interior">
      <section>
        <p className='leadText'>
          My dream is to bring together my experience as a learning experience
          designer with my work as a front-end engineer into the concept of{' '}
          <span className="motivationHighlight">Work you can Play</span>.{' '}
          <a href='https://explorabl.es/'>Explorable explanations</a> are a
          medium championed by my creative hero Nicky Case. On this page, I'll
          showcase my examples of explorables.
        </p>
        <p>Explorables coming soon.</p>
      </section>
    </ExplorablesPageStyles>
  </>
);

export default ExplorablesPage;
