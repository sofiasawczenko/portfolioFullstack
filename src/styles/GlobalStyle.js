import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bs-body-bg: #fbfafa; /* Cor padrão de fundo */
    --bs-body-bg-gradient: linear-gradient(to bottom, #fcd3d3, #fbfafa); /* Gradiente de fundo */
    --bs-body-color: #333333; /* Cor do texto */
    --bs-font-family-sans-serif: 'proxima_nova_rgregular', Helvetica, Arial, sans-serif;
    --bs-font-family-monospace: 'Quicksand', sans-serif;

    /* Fontes e tamanhos */
    --bs-font-size-base: 1rem;
    --bs-font-size-sm: 0.875rem; /* Subtexto */
    --bs-font-size-lg: 1.5rem; /* Heading */

    /* Cores personalizadas */
    --bs-primary: #c8023f;
    --bs-secondary: #f8535330;
    --bs-danger: rgb(145, 64, 81);
    --bs-light: #fcd3d3;
    --bs-dark: #4b4b4b;
    --bs-white: #FFFFFF;
    --bs-footer-bg: #FFF6F6;
  }

  body {
    background: var(--bs-body-bg); /* Background padrão */
    color: var(--bs-body-color); /* Cor do texto */
    font-family: var(--bs-font-family-sans-serif);
    font-size: var(--bs-font-size-base);
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--bs-font-family-monospace);
    line-height: 1.2;
  }

  h1 {
    font-size: var(--bs-h1-font-size);
  }

  h2 {
    font-size: var(--bs-h2-font-size);
  }

  p {
    font-size: var(--bs-font-size-base);
  }

  small {
    font-size: var(--bs-font-size-sm);
  }

  .header-bg {
    background: var(--bs-body-bg-gradient); /* Aplicando o gradiente ao fundo */
  }
`;