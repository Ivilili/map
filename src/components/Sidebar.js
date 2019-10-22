import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
	render() {
		return (
			<div>
				{this.props.open && (
					<form className="sidebar">
						<h1>Coffee Shops</h1>
						<input
							type="text"
							name="search"
							value={this.props.search}
							onChange={this.props.updateSearch}
							placeholder="Search for coffee shop"
						/>
					</form>
				)}
			</div>
		);
	}
}

export default Sidebar;
