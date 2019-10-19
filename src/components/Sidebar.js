import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
	render() {
		return (
			<div>
				{this.props.open && (
					<form className="sidebar">
						<h3>Coffee Shops</h3>
						<input type="search" placeholder="Search for coffee shop" />
					</form>
				)}
			</div>
		);
	}
}

export default Sidebar;
