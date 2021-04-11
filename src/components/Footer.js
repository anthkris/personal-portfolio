import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--snow);
  font-size: 1rem;
  margin-top: auto;
  padding: 1.3rem 0px;
  width: 100%;
  .interior {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .social {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    font-size: 1.4rem;
  }
  .backToTop {
    font-size: 1rem;
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className='interior'>
      <p>&copy; 2021 Kristin Anthony</p>
      <section className='social'>
        <a href='https://github.com/anthkris/'>
          <span className='sr-only'>Github</span>
          <FiGithub />
        </a>
        <a href='https://www.linkedin.com/in/anthkris/'>
          <span className='sr-only'>LinkedIn</span>
          <FiLinkedin />
        </a>
        <a href='https://twitter.com/anthkris'>
          <span className='sr-only'>Twitter</span>
          <FiTwitter />
        </a>
        <AnchorLink className='backToTop' to='#reach-skip-nav'>
          Back to Top ↑
        </AnchorLink>
      </section>
    </div>
  </FooterStyles>
);

export default Footer;
