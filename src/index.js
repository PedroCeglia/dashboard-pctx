import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/Fonts/font.css"

import GlobalStyle from "./styles/global"
import Rotas from "./Rotas"
import ThemeProvider from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle/>
      <Rotas />      
    </ThemeProvider>
  </React.StrictMode>
);


