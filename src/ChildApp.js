import React from 'react';

class ChildApp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "Child Me"
    }

    console.log("Child - Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child - getDerivedStateFromProps", props, state);
    state.name = `Child ${props.name}`;
    return state;
  }

  componentDidMount() {
    console.log("Child - Component Did Mount", this.state);
  }

  shouldComponentUpdate(prevProps, prevState) {
    return prevProps.name !== this.props.name
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Child snapshot", prevProps, prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("Child component updated");
  }

  render() {
    console.log("Child - Render me");
    return (
      <div className="child-app">
         <h1> Child App </h1>
      </div>
    );
  }
}

export default ChildApp;
