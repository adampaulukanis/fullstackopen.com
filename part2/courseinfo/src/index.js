import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const course = {
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
            name: 'Extra module',
            exercises: 1,
            id: 4
        },
        {
            name: 'Extra module ABC',
            exercises: 32,
            id: 5
        },
    ],
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App course={course}/>
)
