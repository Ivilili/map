import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import ToggleBtn from './components/ToggleBtn';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ToggleBtn>
					{({ open, toggleMenu }) => (
						<div>
							<button className="toggle-btn" onClick={toggleMenu}>
								&#9776;
							</button>
							{open && (
								<div className="sidebar">
									<h3>Coffee Shops</h3>
									<input
										type="text"
										value={this.props.search}
										onChange={this.handleChange}
										placeholder="Search for coffee shop"
									/>
								</div>
							)}
						</div>
					)}
				</ToggleBtn>

				<Map component={Map} />
			</div>
		);
	}
}

export default App;
