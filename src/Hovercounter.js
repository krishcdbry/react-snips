import React, { Component } from 'react'

export class Hovercounter extends Component {
    render() {
        return (
            <div onMouseOver={this.props.incrementCounter}>
                Hovered {this.props.counter} times
            </div>
        )
    }
}

export default Hovercounter
