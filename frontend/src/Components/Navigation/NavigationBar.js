import React from "react";

const NavigationBar =({ createCard })=> {
	return ( 
		<div className="navigation">
				<button onClick={createCard} className="navigation_button">+</button>
		</div>
	);
}

export default NavigationBar;