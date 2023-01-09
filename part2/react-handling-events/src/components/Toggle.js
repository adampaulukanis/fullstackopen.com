import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true,
        }

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this)
    }

    handleClick(...args) {
        console.log(this, args)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div className="Toggle">
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default Toggle
