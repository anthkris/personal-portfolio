import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Puppers from '../assets/images/Jazzy_and_Dash.jpg';

const AboutPageStyles = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
  justify-content: space-between;

  section {
    font-size: 1.2rem;
    line-height: 1.5rem;
    @media (min-width: 768px) {
      width: 70%;
      margin: 0 auto;
    }
  }
  .leadText {
    font-size: 1.7rem;
    line-height: 2rem;
  }
  .motivationHighlight {
    color: var(--link-pink);
  }
  .imageSection {
    width: 100%;
  }
  .pupperImg {
    max-width: 400px;
    width: 100%;
    min-width: 200px;
  }
  .imageCaption {
    font-size: 0.7rem;
    padding-top: 1rem;
  }
`;

const AboutPage = () => (
  <>
    <SEO title="About" />
    <AboutPageStyles className='interior'>
      <figure className='imageSection'>
        <img
          className='pupperImg'
          src={Puppers}
          alt="Jazzy and Dashwood (dogs)"
        />
        <figcaption className="imageCaption">
          Dashwood and Jazzy help, too! (but mostly, they don’t)
        </figcaption>
      </figure>
      <section>
        <p className="leadText">
          I am fundamentally motivated to{' '}
          <span className="motivationHighlight">learn new things</span> and
          display that learning through projects,{' '}
          <span className="motivationHighlight">meet challenges</span> and make
          progress towards goals, and{' '}
          <span className="motivationHighlight">make an impact</span> on
          processes, people, and organizations.
        </p>
        <p>
          Can you remember the first online course you ever took? Well I can
          remember the first one I ever made… and it was awful. But I didn’t
          have the vocabulary to describe what was going wrong. With that desire
          to articulate what I experienced as I was creating that first course,
          I fell into learning experience design. But since the very beginning,
          I’ve been fascinated by the tech and development side of that work.
        </p>
        <p>
          I started teaching myself web development so that I could create
          learning experiences that went beyond what typical WYSIWYG elearning
          tools allowed. During my career, I’ve created HTML5 games, progressive
          web apps, and even simulations of enterprise tools with tools such as
          Phaser, React, NextJS, and AWS tools such as Lambda, Translate, and
          Step Functions. That journey culminated in my first official front-end
          engineer role in 2021.
        </p>
        <p>
          I’m currently a front-end engineer at Amazon building experiences with
          AmazonSmile.
        </p>
        <p>
          In my personal work, I focus on combining learning and tech into work
          you can play: gameful, story-driven experiences that promote
          inclusion, diversity, equity, and healthy, productive lives.
        </p>
      </section>
    </AboutPageStyles>
  </>
);

export default AboutPage;
