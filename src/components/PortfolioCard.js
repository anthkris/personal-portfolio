import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PortfolioCardStyles = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;
  margin-top: 4rem;

  .portfolioItemImg {
    margin-top: -4rem;
    padding-bottom: 1rem;
    max-height: 100px;
  }

  .itemDescription {
    text-align: left;
  }

  .portfolioItemLink {
    margin-top: auto;
    color: var(--link-pink);
    text-decoration: underline;
    .goArrow {
      font-family: 'Fredoka Dingbats';
    }
  }
  .cardLink {
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const PortfolioCard = ({ imgSrc, imgAlt, itemTitle, itemDesc, itemUrl }) => (
  <PortfolioCardStyles>
    <a href={itemUrl} className="cardLink">
      <img className="portfolioItemImg" src={imgSrc} alt={imgAlt} />
      <h4>{itemTitle}</h4>
      <p className="itemDescription">{itemDesc}</p>
      <span className="portfolioItemLink">
        Give it a go <span className="goArrow">L</span>
      </span>
    </a>
  </PortfolioCardStyles>
);

export default PortfolioCard;

PortfolioCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemDesc: PropTypes.string.isRequired,
  itemUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};
