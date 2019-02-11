import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js";
import NavigationBar from "./Components/Navigation/NavigationBar.js";
import Card from "./Components/Card/Card.js";


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    }
  } 

  createCard =()=> {
    let name = prompt("What's the name of the account?"),
    percentage = prompt("What do you want the default percentage to be?");
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body_cardContainer">
        </div>
        <NavigationBar createCard={this.createCard}/>
      </div>
    );
  }
}

export default App;

