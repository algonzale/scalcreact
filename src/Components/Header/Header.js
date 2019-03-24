import React, { Component } from "react";

const Header =({ onTotalChange, sumOfPer})=> {
	
	return (
		<div className="header">
			<h1 className="header_title">Savings Calculator</h1>
			<HeaderInput className="header_input" onTotalChange={onTotalChange}/>
			<div>
				<p>{`Current Percentage: ${sumOfPer}%`}</p>
			</div>	
		</div>
	);
}

class HeaderInput extends Component {

	onInputChange =(event)=> {
		const { onTotalChange } = this.props;
		onTotalChange(event.target.value);
	}

	render() {
		return (
			<div>
				<input onChange={this.onInputChange} type="number" className="header_input" placeholder="type total..."/>
			</div>
		);
	}
}

export default Header;