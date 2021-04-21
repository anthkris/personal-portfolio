import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import PlainCard from '../components/PlainCard';

const PlayProjectStyles = styled.section`
  font-size: 1.6rem;
  padding: 2rem;
  text-align: center;
  .playProjectCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    text-align: left;
  }
`;

const PlayPage = ({ data }) => {
  const playProjects = data.play.nodes;
  // console.log('Play Projects', playProjects.length);

  const playProjectCards = playProjects.map((project) => (
    // console.log(project.image.asset);
    // console.log(project.image.asset);
    <PlainCard
      key={project.id}
      itemTitle={project.name}
      itemDesc={project.description}
      itemUrl={project.projectUrl}
      imgAsset={project.image}
      imgAlt={project.altText}
      whichHeadingSize="h3"
    />
  ));
  return (
    <>
      <SEO title="Play" />
      <PlayProjectStyles className="interior">
        <div className="playProjectCards">{playProjectCards}</div>
      </PlayProjectStyles>
    </>
  );
};

export const query = graphql`
  query PlayQuery {
    play: allSanityProject(
      filter: { projectType: { elemMatch: { projectType: { eq: "Play" } } } }
      sort: { fields: publishedAt }
    ) {
      nodes {
        image {
          ...ImageWithPreview
        }
        description
        id
        name
        projectUrl
        altText
      }
    }
  }
`;

export default PlayPage;

PlayPage.propTypes = {
  data: PropTypes.shape({
    play: PropTypes.object,
  }).isRequired,
};
