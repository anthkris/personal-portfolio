import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const ConnectDivStyles = styled.div`
  margin: 1rem auto;
  max-width: 60%;
  text-align: center;
  @media (min-width: 750px) {
    max-width: 50%;
  }
  h3 {
    font-weight: normal;
    font-size: 1.2rem;
    font-family: 'Lato';
  }
  .connectIcons {
    display: flex;
    justify-content: space-between;
    padding-top: 1.3rem;
  }
  .connectBubble {
    background-color: var(--game-blue);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: center;
    svg {
      height: 100%;
    }
  }
  a {
    &:hover,
    &:focus {
      .connectBubble {
        background-color: var(--link-pink);
        svg {
          stroke: white;
        }
      }
    }
  }
`;

const Connect = ({ name }) => (
  <ConnectDivStyles>
    <h3>Connect with {name}</h3>
    <div className="connectIcons">
      <a href="https://github.com/anthkris/">
        <div className="connectBubble">
          <span className="sr-only">Github</span>
          <FiGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/anthkris/">
        <div className="connectBubble">
          <span className="sr-only">LinkedIn</span>
          <FiLinkedin />
        </div>
      </a>
      <a href="https://twitter.com/anthkris">
        <div className="connectBubble">
          <span className="sr-only">Twitter</span>
          <FiTwitter />
        </div>
      </a>
    </div>
  </ConnectDivStyles>
);

export default Connect;

Connect.propTypes = {
  name: PropTypes.string.isRequired,
};
