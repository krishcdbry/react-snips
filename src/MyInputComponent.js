import React, { Component } from 'react'
import WithInputHOC from './WithInputHOC';

class MyInputComponent extends Component {
    render() {
        let {value, onInputHandler} = this.props;
        return (
            <div>
                <h1> {this.props.name} </h1>
                <input type="text" value={value} onChange={onInputHandler}/>
            </div>
        )
    }
}

export default WithInputHOC(MyInputComponent)
