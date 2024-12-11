import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { Navbar } from './components/Navbar.js';
import { theme } from './styles/theme';
import { Header } from './components/Header.js'
import { Spacer } from './components/Spacer.js';
import { AboutMe } from './components/AboutMe.js';
import { SocialMedia } from './components/SocialMedia.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <nav>
        <Navbar />
        <SocialMedia />
      </nav>
      <Spacer />
      <div>
        <Header />
        <AboutMe />
      </div>
    </ThemeProvider>
  );
}


export default App;
