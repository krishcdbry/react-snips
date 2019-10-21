import React from 'react';

const WithInputHOC = (CurrentComponent) => {

    class WithInputComponent extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 value : ''
            }
        }

        onInputHandler(e) {
            this.setState({
                value : e.target.value
            })
        }

        render() {
            let {value} = this.state;
            
            return (
                <div>
                <CurrentComponent
                    value={value}
                    onInputHandler={this.onInputHandler.bind(this)}
                    {...this.props}/>
                    <h2> Searching : <b>{value}</b> </h2>
                </div>
            )
        }
        
    }

    return WithInputComponent;
}

export default WithInputHOC;