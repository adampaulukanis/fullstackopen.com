import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const notes = [
    {
        id: 1,
        content: 'HTML is cool',
        date: '2022-12-17T21:01:32.123Z',
        impotant: true
    },
    {
        id: 2,
        content: 'Browser can execute not only JacaScript these days',
        date: '2022-12-17T22:12:11.088Z',
        impotant: false
    },
    {
        id: 3,
        content: 'GET and POST are two most important methods of HTTP protocol',
        date: '2022-12-17T23:55:01.278Z',
        impotant: true
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes}/>
)
