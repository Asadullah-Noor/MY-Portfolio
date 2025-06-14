// FILE: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// CHANGE THIS LINE: Import HashRouter instead of BrowserRouter
import { HashRouter } from 'react-router-dom'; //
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* CHANGE THIS TAG: Use HashRouter here */}
    <HashRouter> {/* */}
      <App />
    </HashRouter>
  </React.StrictMode>
);