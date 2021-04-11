import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Puppers from '../assets/images/Jazzy_and_Dash.jpg';

const HalfPageStyles = styled.div`
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  padding: 2rem;
  font-size: 1.6rem;
  justify-content: space-between;
  section {
    font-size: 1.2rem;
    @media (min-width: 700px) {
      width: 46%;
    }
  }
  .leadText {
    font-size: 1.7rem;
  }
  .motivationHighlight {
    color: var(--link-pink);
  }
  .imageSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 700px) {
      width: 46%;
      margin-left: auto;
      margin-right: 0;
    }
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

const ContactPage = () => (
  <>
    <SEO title='Contact' />
    <HalfPageStyles className="interior">
      <section>
        <p className='leadText'>
          I am fundamentally motivated to{' '}
          <span className='motivationHighlight'>learn new things</span> and
          display that learning through projects,{' '}
          <span className='motivationHighlight'>meet challenges</span> and make
          progress towards goals, and{' '}
          <span className='motivationHighlight'>make an impact</span> on
          processes, people, and organizations.
        </p>
        <p>
          Here’s how that motivation translates into the things I concentrate
          on:
        </p>
        <p>
          <strong>Work you can Play:</strong> I focus on solving problems in the
          learning space. The way I do that is by focusing on creating
          story-focused, game-based l experiences that allow people to make
          choices and experience consequences in a safe space. I’m particularly
          interested in the tech space and in social issues.
        </p>
        <p>
          <strong>Operational Excellence:</strong> I am deeply committed to
          operating with excellence. For me, that means a focus on
          accessibility, documentation, process, building solid foundations, and
          digging deep to understand the fundamentals of a problem.
        </p>
        <p>
          <strong>Intellectual Curiosity and Reflection:</strong> I love
          learning new things, particularly when I know that I will be able to
          apply that knowledge to a project or problem. I value the support and
          space to learn about new ideas, technologies, and techniques, display
          that knowledge, and share with others.
        </p>
      </section>
      <figure className="imageSection">
        <img
          className="pupperImg"
          src={Puppers}
          alt='Jazzy and Dashwood (dogs)'
        />
        <figcaption className='imageCaption'>
          Dashwood and Jazzy help, too! (but mostly, they don’t)
        </figcaption>
      </figure>
    </HalfPageStyles>
  </>
);

export default ContactPage;
