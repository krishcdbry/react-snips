import React from 'react';

class ChildAppPure extends React.PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "Pure Child Me"
    }

    console.log("Pure Child - Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Pure Child - getDerivedStateFromProps", props, state);
    state.name = `Pure Child ${props.name}`;
    return state;
  }

  componentDidMount() {
    console.log("Pure Child - Component Did Mount", this.state);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Pure Child snapshot", prevProps, prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("Pure Child component updated");
  }

  render() {
    console.log("Pure Child - Render me");
    return (
      <div className="child-app">
         <h1> Pure Child App </h1>
      </div>
    );
  }
}

export default ChildAppPure;
