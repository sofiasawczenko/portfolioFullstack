import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Cores */
    --color-background--light: #fbfafa;
    --color-background--dark: #fcd3d3;
    --text-color: #333333;
    --color-shadow: rgb(2 12 27 / 10%);
    --color-shadow--card: inset 0 1px 0 0 rgb(255 255 255 / 5%);
    --color-nav--transparent: #fef6f6fa;
    --color-nav--transparent-dark: #fcd3d3f5;
    --color-font: #4b4b4b;
    --color-font--dark: #3d4351;
    --color-secondary: #c8023f;
    --color-secondary--light: #f8535330;
    --color-secondary--dark: rgb(145, 64, 81);
    --color-card: #FFFFFF;
    --color-footer: #fcd3d3;

    --font-family-base: 'proxima_nova_rgregular', Helvetica, Arial, sans-serif;
    --font-family-intro: 'Quicksand', sans-serif;

    --font-size-base: 1rem;
    --font-size-subtext: 0.875rem; /* 14px */
    --font-size-body: 1rem;       /* 16px */
    --font-size-title: 2rem;     /* 32px */
    --font-size-heading: 1.5rem; /* 24px */

    --line-height-base: 1.5;
    --line-height-title: 1.2;
  }

  body {
    margin: 0;
    background: var(--color-background--light);
    color: var(--text-color);
    font-family: var(--font-family-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-title);
    line-height: var(--line-height-title);
  }

  h1 {
    font-size: var(--font-size-title);
  }

  h2 {
    font-size: var(--font-size-heading);
  }

  p {
    font-size: var(--font-size-body);
  }

  small {
    font-size: var(--font-size-subtext);
  }
`;
