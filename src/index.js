import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ModelsPage} from './components/HomePage/ModelsPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModelsPage />
  </React.StrictMode>
);
