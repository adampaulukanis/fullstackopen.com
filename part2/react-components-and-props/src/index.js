import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './components/Welcome'
import Comment from './components/Comment'

const root = ReactDOM.createRoot(document.getElementById('root'));

const adam = { name: 'Adam', avatarUrl: '', date: new Date().toLocaleString() }

root.render(
  <React.StrictMode>
    <div>
        <Welcome name="Sara" />
        <Welcome name="Adam" />
        <Welcome name="Kaszanka" />

        <Comment author={adam} text="Lorem Ipsum xyz" date={adam.date} />
    </div>
  </React.StrictMode>
);
