import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div className="header">
			 <h1 className="header_title">Savings Calculator</h1>
			 <HeaderInput className="header_input" />
			</div>
		);
	}
}

class HeaderInput extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: 0,
		}
	}

	onInputChange =(event)=> {
	  this.setState({ inputValue: event.target.value });
	}

	render() {
		return (
			<div>
				<input onChange={this.onInputChange} type="number" className="header_input" placeholder="type percentage..."/>
			</div>
		);
	}
}

export default Header;