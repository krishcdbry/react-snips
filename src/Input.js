import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value : ''
        }

        this.inputRef = null;
        this.setInputCBRef = (e) => { this.inputRef = e; }
    }

    componentDidMount() {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }

    inputChangeHandler (e) {
        console.log(e.target.value);
        this.setState({
            value : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                {this.props.render(this.state.value, this.inputChangeHandler)}
                <input type="text" ref={this.setInputCBRef}/>
            </div>
        )
    }
}

export default Input
