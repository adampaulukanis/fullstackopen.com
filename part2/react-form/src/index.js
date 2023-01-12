import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import NameForm from './components/NameForm'
import EssayForm from './components/EssayForm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NameForm />
        <br />
        <EssayForm />
    </React.StrictMode>
);
