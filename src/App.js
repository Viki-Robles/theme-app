import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/globalStyles';
import {useTheme} from './theme/useTheme';

const Container = styled.div`
  text-align: center
`;


function App() {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
          <h1>Sign up</h1>
          <form>
          <input placeholder='Username' type='text'/>
          <input placeholder='Email' type='email'/>
          <input placeholder='Password' type='password'/>
          <input placeholder='Repeat Password' type='password'/>
          </form>
          <button>Register</button>
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
