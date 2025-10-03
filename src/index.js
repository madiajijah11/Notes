/**
 * @file The entry point for the React application.
 * This file handles the initial rendering of the App component into the DOM.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App/>);