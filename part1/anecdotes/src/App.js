import { useState } from 'react'

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
]
const randomNumber = (prev) => {
    const random = Math.floor(Math.random() * anecdotes.length)
    if (prev === random) return randomNumber(prev)
    return random
}

const points = new Array(anecdotes.length).fill(0)

const App = () => {

    const [ selected, setSelected ] = useState(0)
    const [ votes, setVotes ] = useState([...points])

    const maxPoint = (point) => point === Math.max(...points)

    return (
        <>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <p>
                <button onClick={() => {
                    points[selected] += 1
                    setVotes([...points])
                }}>vote</button>
                <button onClick={() => setSelected(randomNumber(selected))}>next anecdote</button>
            </p>

            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[points.findIndex(maxPoint)]}</p>
            <p>has {Math.max(...points)} votes</p>
        </>
    )
}

export default App
