import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './components/Form.js'
import Toggle from './components/Toggle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
        <Form />
        <Toggle />
    </>
  </React.StrictMode>
);
