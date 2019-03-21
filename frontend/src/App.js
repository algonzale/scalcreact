import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js";
import NavigationBar from "./Components/Navigation/NavigationBar.js";
import CardList from "./Components/Card/CardList.js";


const database = [
  {
    id: 0,
    name: 'Emergency',
    percentage: 11,
  }, 
  {
    id: 1,
    name: 'Investing',
    percentage: 30,
  },
  {
    id: 2,
    name: 'School',
    percentage: 26,
  },
  {
    id: 3,
    name: 'Car',
    percentage: 11,
  }, 
  {
    id: 4,
    name: 'Computer',
    percentage: 10,
  }, 
  {
    id: 5,
    name: 'Dating',
    percentage: 6,
  },  
  {
    id: 6,
    name: 'Personal Expenses',
    percentage: 6,
  }, 
]


class App extends Component {
  constructor() {
    super();
    this.state = {
      totalMoney: 0,
    }
  } 

  onTotalChange =(inpuTotal)=> {
    this.setState({ totalMoney: inpuTotal });
  }
  
  render() {
    return (
      <div className="App gridCont">
        <Header onTotalChange={this.onTotalChange}/>
        <div className="body_cardContainer">
        </div>
        <CardList accounts={database} total = {this.state.totalMoney} />
        <NavigationBar createCard={this.createCard}/>
      </div>
    );
  }
}

export default App;
export {database};

