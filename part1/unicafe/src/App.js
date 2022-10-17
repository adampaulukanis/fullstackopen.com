import { useState } from 'react'

const Stat = (props) => {
    return (
        <>
            <p>{props.name}: {props.value}</p>
        </>
    )
}

const App = () => {
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)

    return (
        <>
            <h1>Give feedback</h1>
            <div className="grading-area">
                <button onClick={() => setGood(good + 1)}>good</button>
                <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
                <button onClick={() => setBad(bad + 1)}>bad</button>
            </div>

            <div className="statistics">
                <h2>Statistics</h2>
                <Stat name="good" value={good}/>
                <Stat name="neutral" value={neutral}/>
                <Stat name="bad" value={bad}/>
            </div>
        </>
    )
}

export default App
