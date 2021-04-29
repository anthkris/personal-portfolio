import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FiGithub, FiTwitter, FiLinkedin, FiRss } from 'react-icons/fi';

const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--snow);
  font-size: 1rem;
  margin-top: auto;
  padding: 1.3rem 2rem;
  .interior {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .social {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    font-size: 1.4rem;
    flex-wrap: wrap;
    a:hover {
      color: var(--portfolio-yellow);
    }
  }
  .copyright {
    order: 1;
  }
  .backToTop {
    font-size: 1.4rem;
    order: -1;
    flex-basis: 100%;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    .interior {
      flex-direction: row;
    }
    .copyright {
      order: 0;
    }
    .backToTop {
      font-size: 1rem;
      order: 0;
      flex-basis: auto;
    }
  }
  @media screen and (min-width: 1000px) {
    padding: 1.3rem 0px;
    width: 100%;
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="interior">
      <p className="copyright">&copy; 2021 Kristin Anthony</p>
      <section className="social">
        <a href="https://github.com/anthkris/">
          <span className="sr-only">Github</span>
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/anthkris/">
          <span className="sr-only">LinkedIn</span>
          <FiLinkedin />
        </a>
        <a href="https://twitter.com/anthkris">
          <span className="sr-only">Twitter</span>
          <FiTwitter />
        </a>
        <a href="https://knanthony.com/rss.xml">
          <span className="sr-only">RSS Feed</span>
          <FiRss />
        </a>
        <AnchorLink className="backToTop" to="#reach-skip-nav">
          Back to Top ↑
        </AnchorLink>
      </section>
    </div>
  </FooterStyles>
);

export default Footer;
