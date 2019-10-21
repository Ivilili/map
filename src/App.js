import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import ToggleBtn from './components/ToggleBtn';
import Sidebar from './components/Sidebar';
import coffeePoints from './data/features.json';
import FilteredList from './components/Filter';

class App extends Component {
	state = {
		open: true,
		search: '',
		filteredList: []
	};

	toggleMenu = () => {
		this.setState((prevState) => ({
			open: !prevState.open
		}));
	};
	updateSearch = (event) => {
		this.setState({
			search: event.target.value.substr(0, 20)
		});
	};

	render() {
		let filteredList = this.state.filteredList;
		const { open, search } = this.state;

		return (
			<div className="App">
				<ToggleBtn component={ToggleBtn} open={open} toggleMenu={this.toggleMenu} />
				<Sidebar component={Sidebar} open={open} onChange={this.updateSearch} value={search} />

				<Map component={Map} />
			</div>
		);
	}
}

export default App;
