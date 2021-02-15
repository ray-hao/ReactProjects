import React from "react"
import ReactDOM from "react-dom"

class ClassCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.incriment = this.incriment.bind(this)
    }

    incriment() {
        this.setState((prev) => {
            return {
                counter: prev.counter +1
            }
        })
    }

    render() {
        return (
            <button onClick={this.incriment}> Count: {this.state.counter}</button>
        )
    }

}

export default ClassCounter