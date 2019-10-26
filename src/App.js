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
		filteredLocations: [],
		search: ''
	};

	//filterLocations = () => {
	//	const { selectedPoint } = this.props;
	//	const { filteredLocations, locations } = this.state;

	//	this.setState({
	//		filteredLocations: locations.filter((location) => selectedPoint.includes//(location.properties.title))
	//	});
	//};

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

		//	this.filterLocations();
	};

	render() {
		const { open, search, locations } = this.state;

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
