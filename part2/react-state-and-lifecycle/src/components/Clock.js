function Clock(props) {
    return (
        <div className="clock">
            <h1>Hello, World!</h1>
            <h2>It is {props.date.toLocaleString()}</h2>
        </div>
    )
}

export default Clock
