import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      Helvetica, sans-serif;
  }
`;

export const breakpoints = {
  phone: '320px',
  tablet: '768px',
  desktop: '1024px',
  large: '1800px',
};

const theme = {
  colors: {
    black: '#333',
    primary: '#0070f3',
    blue: '#067df7',
    greyText: '#434343',
    greyBorder: '#9b9b9b',
    red: '#f00',
  },
  breakpoints,
};

export default theme;
