import { createGlobalStyle } from 'styled-components';

const googleFontAPI = 'https://fonts.googleapis.com/css?family=Montserrat';
const fontFamily = 'Montserrat';

const Typography = createGlobalStyle`
  @import url(${googleFontAPI});

  html {
    font-family: ${fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p, li {
    letter-spacing: 0.5px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  
  a {
    color: var(--black);
    text-decoration-color: var(--yellow);
  }
  
  /* mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  } */

  .tag {
    border-radius: 1rem;
    background: var(--yellow);
    color: var(--grey);
    font-size: 1.2rem;
    padding: 0.75rem;
    margin: 0.25rem;
    display: inline-block;
  }

  .center {
    text-align: center;
  }

  .underline {
    border-bottom: 3px solid var(--yellow);
  }
`;

export default Typography;
