import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header.js";
import NavigationBar from "./Components/Navigation/NavigationBar.js";
import CardList from "./Components/Card/CardList.js";


const database = [
  {
    id: 0,
    name: 'Emergency',
    percentage: 15,
  }, 
  {
    id: 1,
    name: 'Investing',
    percentage: 20,
  },
  {
    id: 2,
    name: 'School',
    percentage: 30,
  },
  {
    id: 3,
    name: 'Car',
    percentage: 10,
  }, 
  {
    id: 5,
    name: 'Travel',
    percentage: 10,
  },  
  {
    id: 6,
    name: 'Personal Expenses',
    percentage: 15,
  }, 
]


class App extends Component {
  constructor() {
    super();
    this.state = {
      totalMoney: 0,
      sumOfPer: 100,
    }
  } 

  updatePerc =(nwDatabase)=> {
    let sumOfPer = nwDatabase.map(account => account.percentage).reduce((total, percentage) => total + percentage);
    this.setState({ sumOfPer: sumOfPer })
  }
  
  onTotalChange =(inpuTotal)=> {
    this.setState({ totalMoney: inpuTotal });
  }
  
  render() {
    return (
      <div className="App">
        <Header onTotalChange={this.onTotalChange} sumOfPer={this.state.sumOfPer}/>
        <div className="body_cardContainer gridCont">
          <CardList accounts={database} total = {this.state.totalMoney} database={database} updatePerc={this.updatePerc}/>
          <NavigationBar createCard={this.createCard}/>
        </div>
      </div>
    );
  }
}

export default App;
export {database};

