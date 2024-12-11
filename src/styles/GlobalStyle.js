// estilos globais
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background--light: #fbfafa;
    --color-background--dark: #fcd3d3;
    --text-color: #333333;
    --color-shadow: rgb(2 12 27 / 10%);
    --color-shadow--card: inset 0 1px 0 0 rgb(255 255 255 / 5%);
    --color-nav--transparent: #fef6f6fa;
    --color-nav--transparent-dark: #fcd3d3f5;
    --color-font: #4b4b4b;
    --color-font--dark: #3d4351;
    --color-background--light: #fbfafa;
    --color-background--dark: #fcd3d3;
    --color-secondary: #c8023f;
    --color-secondary--light: #f8535330;
    --color-secondary--dark: rgb(145, 64, 81);
    --color-card: #FFFFFF;
    --color-footer: #fcd3d3;
  }

  body {
    margin: 0;
    background: var(--color-background--light);
    color: var(--text-color);
    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
