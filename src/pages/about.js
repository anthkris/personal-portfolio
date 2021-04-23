import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

const AboutPageStyles = styled.div`
  padding: 2rem;
  justify-content: space-between;

  section {
    @media (min-width: 768px) {
      width: 70%;
      margin: 0 auto;
    }
  }

  .motivationHighlight {
    color: var(--link-pink);
  }
  .imageSection {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
  .pupperImg {
    max-width: 800px;
    width: 100%;
    min-width: 200px;
  }
  .imageCaption {
    font-size: 0.8rem;
    padding-top: 1rem;
    span:before {
      content: '\r';
      white-space: pre;
      display: block;
      height: 0px;
    }
    @media screen and (min-width: 550px) {
      span:before {
        content: none;
      }
    }
  }
`;

const AboutPage = () => (
  <>
    <SEO title="About" />
    <AboutPageStyles className="interior longForm">
      <figure className="imageSection">
        <StaticImage
          imgClassName="pupperImg"
          src="../assets/images/Jazzy_and_Dash.jpg"
          placeholder="blurred"
          loading="eager"
          alt="Jazzy and Dashwood (dogs)"
          height={400}
          width={800}
        />
        <figcaption className="imageCaption">
          I don't have a headshot, so here are my dogs, Dashwood and Jazzy.{' '}
          <span>Sometimes they help (but mostly, they don’t).</span>
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
