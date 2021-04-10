import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PlainCardStyles = styled.a`
  background: var(--c-steely-blue);
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;
  &:hover,
  &:focus {
    background: var(--portfolio-yellow);
  }
  .gatsby-image-wrapper {
    margin-bottom: 20px;
  }
`;

const PlainCard = ({ imgSrc, imgAlt, itemTitle, itemDesc, itemUrl }) => (
  <PlainCardStyles href={itemUrl}>
    {imgSrc && <Img fluid={imgSrc} alt={imgAlt} width='300' height='100' />}
    <h4 className="itemTitle">{itemTitle}</h4>
    <p className="itemDescription">{itemDesc}</p>
  </PlainCardStyles>
);

export default PlainCard;
