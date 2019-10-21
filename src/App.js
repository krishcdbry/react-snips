import React from 'react';
import './App.css';
import { Counter } from './Counter';
import Clickcounter from './Clickcounter';
import { Hovercounter } from './Hovercounter';
import Modda from './utils';
import { Childprinter } from './Childprinter';
import { Input } from './Input';
import { Usernameinput } from './Usernameinput';
import ChildApp from './ChildApp';
import { Fragmentdemo } from './Fragmentdemo';
import ChildAppPure from './Purecomponent';
import Memocomponent from './Memocomponent';
import { Parentref } from './Parentref';
import MyInputComponent from './MyInputComponent';

class App extends React.Component {
  constructor(context, props) {
    super(context, props)
  
    console.log("CONTEXT", this.context);

    this.state = {
       name : "Krishcdbry"
    }

    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", state);
    return state;
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }
  
  changeName = () =>  {
    this.setState((prevState) => ({
      name : "Cdbry"
    }))
  }

  render() {
    console.log("Render me");
    let {name} = this.state;
    return (
      <div className="app">
        <h1> React Series </h1>

        <Modda/>

        <ChildApp name={name}/>

        <ChildAppPure name={name}/>

        <button onClick={this.changeName.bind(this)}> Change Name </button>

        <Childprinter>
          <p> Hello all dudes have a nice day </p>
        </Childprinter>

        <Counter render={(counter, incrementCounter) => 
          <Clickcounter counter={counter} incrementCounter={incrementCounter}/>
        }/>

        <Counter render={(counter, incrementCounter) => 
          <Hovercounter counter={counter} incrementCounter={incrementCounter}/>
        }/>

        <Input render={(value, inputChangeHandler) => 
          <Usernameinput value={value} inputChangeHandler={inputChangeHandler}/>
        }/>

        <Fragmentdemo/>

        <Memocomponent name={name}/>

        <Parentref/>

        <MyInputComponent name={name}/>

      </div>
    );
  }
}

export default App;
