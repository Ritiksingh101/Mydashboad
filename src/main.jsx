// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import App from './App';
import './index.css';
import DashboardProvider from './context/DashboardProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot from ReactDOM
root.render(
  <React.StrictMode>
    <DashboardProvider>
    <App />
    </DashboardProvider>
     </React.StrictMode>
);