import { useState } from 'react'

const Statistics = (props) => {
    let { value, name } = props
    if (props.name.toLowerCase() === 'positive') {
        value = value * 100
        value = value.toFixed(2);
        value = `${value}%`
    }
    if (name.toLowerCase() === 'average') {
        value = value.toFixed(2);
    }
    return (
        <>
            <p>{name}: {value}</p>
        </>
    )
}

const History = (props) => {
    if (props.allStats.length !== 0) {
        return (
            <>
                <Statistics name="good" value={props.good}/>
                <Statistics name="neutral" value={props.neutral}/>
                <Statistics name="bad" value={props.bad}/>
                <Statistics name="all" value={props.good + props.neutral + props.bad}/>
                <Statistics name="average" value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)}/>
                <Statistics name="positive" value={props.good / (props.good + props.neutral + props.bad)}/>
            </>
        )
    }

    return <>No feedback given.</>
}

const App = () => {
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)
    const [ allStats, setStats ] = useState([]);

    const handleGood = () => {
        setStats(allStats.concat('G'))
        setGood(good + 1);
    }

    const handleNeutral = () => {
        setStats(allStats.concat('N'))
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setStats(allStats.concat('B'))
        setBad(bad + 1)
    }

    return (
        <>
            <h1>Give feedback</h1>
            <div className="grading-area">
                <button onClick={handleGood}>good</button>
                <button onClick={handleNeutral}>neutral</button>
                <button onClick={handleBad}>bad</button>
            </div>

            <div className="statistics">
                <h2>Statistics</h2>

                <History allStats={allStats} good={good} neutral={neutral} bad={bad}/>
            </div>
        </>
    )
}

export default App
