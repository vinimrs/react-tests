import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <Header />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
