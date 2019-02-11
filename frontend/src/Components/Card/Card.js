import React, { Component } from "react";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
      value: 0,
		}
	}
	render() {
		return (
		   <div className="card">
		   	 <p>{this.props.name}</p>
		   	 <CardInput />
		   	 <p>{ /*this.value.toFixed(2) */ 5}</p>
		   </div>
		);
	}
}

class CardInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
      percentage: 0,
		}
	}

	onPercentageChange =(event)=> {
		 this.setState({ percentage: event.target.value / 100 });
		 console.log(this.state.percentage);
	}

	render() {
		return(
			<div>
				<input 
					className="Card_input" 
					type="number" 
					placeholder="..."
					onChange={ this.onPercentageChange} 
				/>	
			</div>
		);
	}
}

export default Card;