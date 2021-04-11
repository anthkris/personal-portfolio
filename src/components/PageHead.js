import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';

const PageHeadStyles = styled.header`
  background: var(--portfolio-yellow);
  padding: 2rem;
  font-family: 'Fredoka One';
  text-align: center;
  text-transform: uppercase;

  h1 {
    margin-bottom: 0px;
    font-size: 1.3em;
  }

  .mark {
    padding: 10px;
    width: 90%;
    display: block;
    margin: 10px auto;
  }

  .postTitle {
    font-size: 1.45em;
    text-transform: none;
  }

  h2 {
    font-size: 1rem;
  }

  .backToWriting {
    font-size: 1.3rem;
    text-transform: capitalize;
  }

  .goArrow {
    font-family: 'Fredoka Dingbats';
  }

  @media only screen and (min-width: 700px) {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.3rem;
    }
    .mark {
      width: 70%;
    }
  }
`;

const PageHead = ({
  postTitle = null,
  markText = 'Anthony',
  tagline = 'Makes Work you can Play',
}) => (
  <PageHeadStyles>
    <div className='interior'>
      <Nav />
      {!postTitle && (
        <>
          <h1>
            Kristin
            <span className='mark'>{markText}</span>
          </h1>
          <h2>{tagline}</h2>
        </>
      )}
      {postTitle && (
        <>
          <h1 className='postTitle'>{postTitle}</h1>
          <p className='backToWriting'>
            <Link to='/writing'>
              <span className="goArrow">M</span> Back to all writing
            </Link>
          </p>
        </>
      )}
    </div>
  </PageHeadStyles>
);

export default PageHead;
