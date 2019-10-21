import React, { Component } from 'react'

class Clickcounter extends Component {
    render() {
        return (
            <div>
               <button onClick={this.props.incrementCounter}>Clicked {this.props.counter} Times</button>
            </div>
        )
    }
}

export default Clickcounter
