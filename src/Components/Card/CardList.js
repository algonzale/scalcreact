import React, { Component } from "react";

const CardList =({accounts, total, database, updatePerc})=> {
	return (
		<div className="cardlist">
			{
				accounts.map((account, i)=> {
					return(
						<Card key={i}
						id={accounts[i].id}
						name={accounts[i].name}
						percentage={accounts[i].percentage}
						total={total}
						database = {database}
						updatePerc={updatePerc}
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
		this.props.database[this.props.id].percentage = Number(event.target.value);
		this.props.updatePerc(this.props.database);
 }

	render() {
		return(
			<div className="card">
				<p className="cardName">{this.props.name}</p>
				<input 
					className="Card_input" 
					type="number" 
					placeholder= {((this.props.percentage >= 0) ? this.props.percentage : '...') + "%"}
					onChange={this.onPercentageChange} 
				/>	
				<p className="cardTotal">{"$"+(this.props.total * this.state.percentage).toFixed(2)}</p>
			  </div>
		)
	}
}

export default CardList;