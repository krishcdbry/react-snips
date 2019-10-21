import React, { Component } from 'react'
import ChildRef from './ChildRef';

export class Parentref extends Component {
    constructor(props) {
        super(props)
        this.inputRef = null;
        this.inputCbRef = e => this.inputRef = e;
    }
    
    clickHandler() {
        this.inputRef.focus();
    }
    
    render() {
        return (
            <div>
                <ChildRef ref={this.inputCbRef}/>
                <button onClick={this.clickHandler.bind(this)}>Focus input</button>
            </div>
        )
    }
}

export default Parentref
