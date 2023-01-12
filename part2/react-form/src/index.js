import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Reservation from './components/Reservation'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Reservation />
    </React.StrictMode>
);
