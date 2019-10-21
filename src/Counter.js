import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter : 0
        }
    }

    incrementCounterOld = () => {
        let {counter} = this.state;
        counter++;
        this.setState({
            counter
        })
    }

    incrementCounter = () => {
        this.setState((prevState) => ({
            counter : prevState.counter + 1
        }));
    }
    
    render() {
        return (
            <div>
                {this.props.render(this.state.counter, this.incrementCounter)}
            </div>
        )
    }
}

export default Counter
