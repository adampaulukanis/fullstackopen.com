import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './components/Clock.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
    root.render(
        <React.StrictMode>
        <App />

        <Clock date={new Date()} />
        </React.StrictMode>
    )
}

setInterval(tick, 1000)
