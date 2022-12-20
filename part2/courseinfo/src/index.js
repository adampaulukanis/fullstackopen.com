import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const courses = [
    {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            },
        ],
    },
    {
        id: 2,
        name: 'Node.JS',
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1,
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App courses={courses}/>
)
