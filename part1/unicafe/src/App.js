import { useState } from 'react'

const StatisticLine = (props) => {
    let { value, name } = props
    if (name.toLowerCase() === 'positive') {
        value = value * 100
        value = value.toFixed(1);
        value = `${value}%`
    }
    if (name.toLowerCase() === 'average') {
        value = value.toFixed(1);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    if (props.allStats.length !== 0) {
        return (
            <table>
                <tbody>
                    <StatisticLine name="good" value={props.good}/>
                    <StatisticLine name="neutral" value={props.neutral}/>
                    <StatisticLine name="bad" value={props.bad}/>
                    <StatisticLine name="all" value={props.good + props.neutral + props.bad}/>
                    <StatisticLine name="average" value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)}/>
                    <StatisticLine name="positive" value={props.good / (props.good + props.neutral + props.bad)}/>
                </tbody>
            </table>
        )
    }

    return <>No feedback given.</>
}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.name}
    </button>
)

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
                <Button name="good" handleClick={handleGood}/>
                <Button name="neutral" handleClick={handleNeutral}/>
                <Button name="bad" handleClick={handleBad}/>
            </div>

            <div className="statistics">
                <h2>Statistics</h2>

                <Statistics allStats={allStats} good={good} neutral={neutral} bad={bad}/>
            </div>
        </>
    )
}

export default App
