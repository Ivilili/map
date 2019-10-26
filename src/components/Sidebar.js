import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
	render() {
		return (
			<div>
				{this.props.open && (
					<form className="sidebar">
						<h1>Coffee Shops</h1>
						{this.props.children}
					</form>
				)}
			</div>
		);
	}
}

export default Sidebar;
