import React from 'react'

class Clock extends React.Component {
    render() {
        return (
            <div className="clock">
                <h1>Hello, World!</h1>
                <h2>It is {this.props.date.toLocaleString()}</h2>
            </div>
        )
    }
}

export default Clock
