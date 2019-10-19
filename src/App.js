import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import ToggleBtn from './components/ToggleBtn';
import Sidebar from './components/Sidebar';

class App extends Component {
	state = {
		open: true
	};
	toggleMenu = () => {
		this.setState((prevState) => ({
			open: !prevState.open
		}));
	};
	render() {
		return (
			<div className="App">
				<ToggleBtn component={ToggleBtn} open={this.state.open} toggleMenu={this.toggleMenu} />
				<Sidebar component={Sidebar} open={this.state.open} />

				<Map component={Map} />
			</div>
		);
	}
}

export default App;
