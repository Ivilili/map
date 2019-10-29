import React, { Component } from 'react';
import coffeePoints from './data/features.json';

import Map from './components/Map';
import ToggleBtn from './components/ToggleBtn';
import Sidebar from './components/Sidebar';
import './components/Sidebar.css';
import FilteredList from './components/Filter';
class App extends Component {
	state = {
		open: true,
		locations: coffeePoints,
		filteredList: [],
		search: ''
	};

	toggleMenu = () => {
		this.setState((prevState) => ({
			open: !prevState.open
		}));
	};
	updateSearch = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const { open, search, locations } = this.state;
		console.log(this.props.selectedPoint);

		return (
			<div className="App">
				<ToggleBtn component={ToggleBtn} open={open} toggleMenu={this.toggleMenu} />
				<Sidebar component={Sidebar} open={open} locations={locations}>
					<input
						type="text"
						name="search"
						value={this.state.search}
						search={search}
						onChange={this.updateSearch}
						placeholder="Search for coffee shop"
					/>
					<FilteredList locations={locations} search={search} />
				</Sidebar>

				<Map component={Map} locations={locations} />
			</div>
		);
	}
}

export default App;
