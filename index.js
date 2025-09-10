import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css'; // Add this line for Bootstrap
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
