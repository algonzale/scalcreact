import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
         <h1 className="headerTitle">Savings Calculator</h1>
         <Input />
        </div>
        <Input placeholder= "total"/>
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder : "",
    }
  }
  render() {
    return (
      <div>
        <input type="number" placeholder={this.Setstate="Emergency"}  />
      </div>
    );
  }
}

class 

export default App;
