import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NumberList from './components/NumberList'
import Blog from './components/Blog'

const root = ReactDOM.createRoot(document.getElementById('root'));

const posts = [
    {
        id: 1,
        title: 'Hello, World!',
        content: 'Lorem Ipsum xyz',
    },
    {
        id: 2,
        title: 'Installation',
        content: 'You can install React from npm.',
    }
]

root.render(
    <React.StrictMode>
        <>
            <NumberList numbers={[1, 2, 4, 77, 101]} />

            <Blog posts={posts} />
        </>
    </React.StrictMode>
);
