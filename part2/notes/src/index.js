import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2022-12-21T00:30:37.097Z',
        important: false,
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2022-12-21T00:32:37.123Z',
        important: false,
    },
    {
        id: 3,
        content: 'GET and POST are methods of HTTP protocol',
        date: '2022-12-21T00:33:37.342Z',
        important: true,
    },
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes}/>
)
