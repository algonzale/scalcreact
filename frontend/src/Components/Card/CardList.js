import React, { Component } from "react";
import database from '../../App.js';

const CardList =({accounts, total})=> {
	let currentPercentage  ;
	return (
		<div className="cardlist">
		<div className="currentPercentageDiv">
			<p className="currentPercentage">{`Current Percentage: ${100}%`}</p>
		</div>
			{
				accounts.map((account, i)=> {
					return(
						<Card key={i}
						name={accounts[i].name}
						percentage={accounts[i].percentage}
						total={total}
						/> 
					);
				})
			}
		</div>
	);
}

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percentage: 0,
		}
	}

	componentDidMount =()=> {
		this.setState({ percentage: this.props.percentage / 100 })
	}

	onPercentageChange =(event)=> {
		this.setState({ percentage: event.target.value / 100 });

 }

	render() {
		return(
			<div className="card">
				<p>{this.props.name}</p>
				<input 
					className="Card_input" 
					type="number" 
					placeholder= {((this.props.percentage >= 0) ? this.props.percentage : '...') + "%"}
					onChange={this.onPercentageChange} 
				/>	
				<p className="cardTotal">{"$"+this.props.total * this.state.percentage}</p>
			  </div>
		)
	}
}

export default CardList;