import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AlertProvider } from './context/alert/AlertContext';
import { GithubProvider } from './context/github/GithubContext';
import './index.css';

ReactDOM.render(
  <GithubProvider>
    <AlertProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertProvider>
  </GithubProvider>,
  document.getElementById('root')
);
