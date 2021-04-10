import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Connect from '../components/Connect';
import PortfolioCard from '../components/PortfolioCard';
import PlainCard from '../components/PlainCard';
import KrisBot from '../assets/images/knanthony_logo.svg';
import ColumnAndVeil from '../assets/images/portfolioImages/column_and_veil.png';
import BoB from '../assets/images/portfolioImages/brink_of_burnout.png';

const HalfPageStyles = styled.div`
  padding: 2rem;
  .interior {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    align-items: center;
  }
  font-size: 1.2rem;
  .leadText {
    font-size: 1.7rem;
  }
  section {
    @media (min-width: 650px) {
      width: 48%;
    }
  }
  .imageSection {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    @media (min-width: 650px) {
      margin: initial;
    }
  }
  .homeImg {
    max-width: 300px;
    width: 100%;
    min-width: 200px;
  }
`;

const PortfolioStyles = styled.section`
  background-color: var(--pale-blue);
  text-align: center;
  padding: 2rem;
  font-size: 1.6rem;
  .portfolioCards {
    display: grid;
    gap: 20px;
  }
  @media (min-width: 750px) {
    .portfolioCards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const OtherProjectStyles = styled.section`
  font-size: 1.6rem;
  padding: 2rem;
  text-align: center;
  .otherProjectCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 4rem;
    text-align: left;
  }
`;

const HomePage = () => (
  <>
    <SEO title='Home' />
    <HalfPageStyles>
      <div className='interior'>
        <section>
          <p className="leadText">Howdy!</p>
          <p className="leadText">
            I'm a front-end engineer and learning technologist — a mix of web
            developer, learning experience designer, and game developer. I
            create story-focused learning experiences that help solve problems
            for people.
          </p>
          <p>
            I’ve been in the learning space for a while (almost a decade!),
            hosted the Dear Instructional Designer podcast, and help wherever I
            can to foster newbies into learning experience design.
          </p>
          <Connect name="Me" />
        </section>
        <section className='imageSection'>
          <img
            className='homeImg'
            src={KrisBot}
            alt="KrisBot, Kristin's Robot pal"
          />
        </section>
      </div>
    </HalfPageStyles>
    <PortfolioStyles>
      <div className='interior'>
        <h3>
          Kristin focuses on creating story-focused, game-based learning
          experiences…
        </h3>
        <div className='portfolioCards'>
          <PortfolioCard
            imgSrc={BoB}
            imgAlt=''
            itemTitle='Brink of Burnout'
            itemDesc='Brink of Burnout is an xAPI-enabled interactive story about taking back control of your work.'
            itemUrl='https://brink-of-burnout.netlify.app/'
          />
          <PortfolioCard
            imgSrc={ColumnAndVeil}
            imgAlt=''
            itemTitle='Column and Veil Bikes'
            itemDesc='A responsive, one-page course and game build using the free and open source Adapt framework and PhaserJS.'
            itemUrl='http://showcase.knanthony.com/candvbikes/index.html#/id/co-05'
          />
        </div>
      </div>
    </PortfolioStyles>
    <OtherProjectStyles>
      <div className="interior">
        <h3>… and lots of other resources, too!</h3>
        <div className='otherProjectCards'>
          <PlainCard
            itemTitle='Dear Instructional Designer'
            itemDesc='The four-season podcast about the instructional design journey.'
            itemUrl='https://www.dearinstructionaldesigner.com/'
          />
          <PlainCard
            itemTitle='Go Design Something'
            itemDesc='Project briefs for instructional designers.'
            itemUrl='https://godesignsomething.co/'
          />
          <PlainCard
            itemTitle='Hack ID'
            itemDesc='Resources for Self Taught IDs.'
            itemUrl='https://hackid.github.io/'
          />
          <PlainCard
            itemTitle='LX Research'
            itemDesc='Learning experience design and development research.'
            itemUrl='https://lx-research.netlify.app/'
          />
          <PlainCard
            itemTitle='ID Interview Questions'
            itemDesc='Practice questions for instructional design interviews.'
            itemUrl='https://github.com/anthkris/instructional-design-interview-questions'
          />
        </div>
      </div>
    </OtherProjectStyles>
  </>
);

export default HomePage;
