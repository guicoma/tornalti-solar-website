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
        {/* <GradientBox background="radial-gradient(circle at 25% 25%, #ffe200 0%, #ffe200 10%, transparent 10%)"> */}
            <GradientBox background="linear-gradient(150deg, transparent 49%, #008ab4 49%)">
          <GradientBox background="linear-gradient(135deg, transparent 47%, #39a4c5ad 47%)">
              <img src={logo} alt="logo" />
              <h1>Tornaltí Solar</h1>
            </GradientBox>
          </GradientBox>
        {/* </GradientBox> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
