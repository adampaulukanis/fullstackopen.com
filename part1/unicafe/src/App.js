import { useState } from 'react'

const sanitize = (value) => {
    if (isNaN(value)) {
        return 0
    }
    return value
}

const Stat = (props) => {
    let value = props.value
    if (props.name.toLowerCase() === 'positive') {
        value = value * 100
        value = value.toFixed(2);
        value = `${value}%`
    }
    if (props.name.toLowerCase() === 'average') {
        value = value.toFixed(2);
    }
    return (
        <>
            <p>{props.name}: {value}</p>
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
                <Stat name="all" value={good + neutral + bad}/>
                <Stat name="average" value={sanitize((good - bad) / (good + neutral + bad))}/>
                <Stat name="positive" value={sanitize(good / (good + neutral + bad))}/>
            </div>
        </>
    )
}

export default App
