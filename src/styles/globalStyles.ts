import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;

    @media (max-width:1024px) {
      font-size: 60%;
    };

    @media (max-width:768px) {
      font-size: 57.5%;
    };
  }

  * {
    box-sizing: inherit;
  }

  *::before: {
    box-sizing: inherit;
  }

  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    padding-bottom: 6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    font-size: 1.6rem;

    color: ${colors.black600};

    @media (max-width:768px) {
      padding: 0 .8rem
    };
  }

  h1 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }
`;
