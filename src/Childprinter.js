import React, { Component } from 'react'

export class Childprinter extends Component {
    render() {
        return (
            <div>
                Hello, I am a child printer 
                {this.props.children}
            </div>
        )
    }
}

export default Childprinter
