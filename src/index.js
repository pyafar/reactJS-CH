import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './components/MainApp';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainApp />
    </ BrowserRouter>
  </React.StrictMode>
);
