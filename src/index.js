// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import CSS files for global styles
import './index.css';
import './input.css';

// Import the main application component and web vitals utility
import App from './App';
import reportWebVitals from './reportWebVitals';

// Select the root DOM node where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside a StrictMode wrapper to highlight potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance in the app by logging or sending results to an analytics endpoint
// Example: reportWebVitals(console.log)
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
