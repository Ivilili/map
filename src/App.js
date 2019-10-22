import React, { Component } from 'react';

import './App.css';
import Map from './components/Map';
import ToggleBtn from './components/ToggleBtn';
import Sidebar from './components/Sidebar';
import coffeePoints from './data/features.json';

class App extends Component {
	state = {
		open: true,
		locations: coffeePoints,
		filteredLocations: [],
		search: '',
		filteredList: []
	};
	filterList = () => {
		this.setState((prevState) => {
			return {
				filteredList: prevState.locations
					.filter((value) => value.properties.title.toLowerCase().startsWith(prevState.search))
					.map((value) => value.properties.title)
			};
		});
	};
	filterLocations = () => {
		this.setState((prevState) => {
			return {
				filteredLocations: prevState.locations.filter((location) =>
					prevState.filteredList.includes(location.properties.title)
				)
			};
		});
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
		this.filterList();
		this.filterLocations();
	};

	render() {
		const { open, search, locations } = this.state;

		const completedList = locations.map((value, index) => <li key={index}>{value.properties.title}</li>);
		console.log(completedList);
		return (
			<div className="App">
				<ToggleBtn component={ToggleBtn} open={open} toggleMenu={this.toggleMenu} />
				<Sidebar component={Sidebar} open={open} onChange={this.updateSearch} value={search}>
					<div className="filter filter-list">
						<div className="tip">Use the input field to search a location</div>
						<ul>{completedList}</ul>
					</div>
				</Sidebar>

				<Map
					component={Map}
					locations={
						this.state.filteredLocations.length > 0 ? this.state.filteredLocations : this.state.locations
					}
				/>
			</div>
		);
	}
}

export default App;
