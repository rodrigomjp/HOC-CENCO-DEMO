import React from 'react';
import { ThemeProvider } from '@library/cenco-ux-components';
import { JUMBO_THEME, PARIS_THEME } from '@library/cenco-ux-components/themes';
import './index.scss';
import App from './App';
import ReactDOM from 'react-dom';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={PARIS_THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
