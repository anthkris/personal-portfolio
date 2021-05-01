import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import SadKrisBot from '../assets/images/krisBot_404.svg';

const HalfPageStyles = styled.div`
  display: flex;
  gap: 2%;
  align-items: center;
  padding: 2rem;
  .interior {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    align-items: center;
  }
  font-size: 1.2rem;

  .fourOhFourContent {
    @media (min-width: 650px) {
      width: 58%;
    }
  }
  .imageSection {
    display: none;
    justify-content: center;
    margin: 0 auto;
    @media (min-width: 650px) {
      display: flex;
      margin: initial;
      justify-content: flex-end;
      width: 38%;
    }
  }
  .sadImg {
    max-width: 300px;
    width: 100%;
    min-width: 200px;
  }
  .fourOhFourLink {
    color: var(--link-pink);
  }
`;

const FourOhFourPage = () => (
  <>
    <SEO title="404 - Dead End" />
    <HalfPageStyles className="interior">
      <section className="imageSection">
        <img className="sadImg" src={SadKrisBot} alt="KrisBot is sad" />
      </section>
      <section className="fourOhFourContent">
        <h3>KrisBot regrets that you have hit a dead end.</h3>
        <p>
          Are you looking for my old site? Not to worry, I haven't banished it
          from the internet. It just moved.
        </p>
        <p>
          <a className="fourOhFourLink" href="https://2018.knanthony.com/">
            2018 Portfolio Site
          </a>
        </p>
      </section>
    </HalfPageStyles>
  </>
);

export default FourOhFourPage;
