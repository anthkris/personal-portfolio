import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --game-blue: #37ABD4;
    --black: #2E2E2E;
    --portfolio-yellow: #FFCC29;
    --snow: #F4F4F4;
    --c-steely-blue: #96C4D9;
    --link-pink: #E00659; /* Previously FA3C85 */
    --pale-blue: #C1E8FA;
  }

  html {
    font-size: 14px;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  @media only screen and (min-width: 700px) {
    html {
      font-size: 18px;
    }
  }

  body {
    font-size: 2rem;
  }

  .interior {
    max-width: 1000px;
    margin: 0 auto;
  }

  .leadText {
    font-size: 1.7rem;
    line-height: 2rem;
  }

  .longForm {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* Uses Gatsby magic to load pixelated images before the real images */
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--game-blue) var(--snow);
  }
  body::-webkit-scrollbar-track {
    background: var(--snow);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--game-blue) ;
    border-radius: 6px;
    border: 3px solid var(--snow);
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .sr-only {
    position:absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

`;

export default GlobalStyles;
