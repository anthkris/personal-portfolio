// eslint-disable react/jsx-props-no-spreading
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SanityImage from 'gatsby-plugin-sanity-image';

const PlainCardStyles = styled.a`
  background: var(--c-steely-blue);
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 1.2rem;
  padding: 2rem;
  text-decoration: none;
  &:hover,
  &:focus {
    background: var(--portfolio-yellow);
  }
  .cardImg {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const PlainCard = ({ imgAsset, itemTitle, itemDesc, itemUrl, imgAlt }) => (
  // console.log(imgAlt);
  <PlainCardStyles href={itemUrl}>
    {imgAsset && (
      <SanityImage
        {...imgAsset}
        width={700}
        alt={`${imgAlt}`}
        height={600}
        className="cardImg"
      />
    )}
    <h4 className="itemTitle">{itemTitle}</h4>
    <p className="itemDescription">{itemDesc}</p>
  </PlainCardStyles>
);
export default PlainCard;

PlainCard.propTypes = {
  imgAsset: PropTypes.object,
  itemTitle: PropTypes.string.isRequired,
  itemDesc: PropTypes.string.isRequired,
  itemUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
};
