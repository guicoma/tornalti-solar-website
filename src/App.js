import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import logo from './assets/logo_tornalti.svg';
import GradientBox from './components/GradientBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <img src={logo} alt="logo" />
        <h1>Tornaltí Solar</h1>
        {/* <GradientBox background="radial-gradient(circle at 25% 25%, #ffe200 0%, #ffe200 10%, transparent 10%)"> */}
          {/* <GradientBox background="linear-gradient(135deg, transparent 39%, #39a4c5 39%)">
            <GradientBox background="linear-gradient(150deg, transparent 52%, #008ab4 52%)">
            </GradientBox>
          </GradientBox> */}
        {/* </GradientBox> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
