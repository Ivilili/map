import React, { Component } from 'react';
import coffeePoints from './data/features.json';
import { Marker, Popup } from 'react-map-gl';

import Map from './components/Map';
import ToggleBtn from './components/ToggleBtn';
import Sidebar from './components/Sidebar';
import './components/Sidebar.css';
import FilteredList from './components/Filter';
import './App.css';
class App extends Component {
	state = {
		open: true,
		locations: coffeePoints,
		filteredList: [],
		search: '',
		selectedPoint: null
	};
	markerRender = () => {
		return coffeePoints.map((point) => (
			<Marker key={point.id} latitude={point.geometry.coordinates[1]} longitude={point.geometry.coordinates[0]}>
				<div
					className="marker"
					onClick={(e) => {
						e.preventDefault();
						this.setState({ selectedPoint: point });
					}}
				/>
			</Marker>
		));
	};
	showPopup = () => {
		const { selectedPoint } = this.state;
		return selectedPoint ? (
			<Popup
				latitude={selectedPoint.geometry.coordinates[1]}
				longitude={selectedPoint.geometry.coordinates[0]}
				onClose={() => {
					this.setState({
						selectedPoint: null
					});
				}}
			>
				<div>
					<h2>{selectedPoint.properties.title}</h2>
				</div>
			</Popup>
		) : null;
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
		console.log(this.state.selectedPoint);

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
						placeholder="Search for a coffee shop"
					/>
					<FilteredList
						locations={locations}
						search={search}
						showPopup={this.showPopup()}
						markerRender={this.markerRender()}
					/>
				</Sidebar>

				<Map
					component={Map}
					locations={locations}
					showPopup={this.showPopup()}
					markerRender={this.markerRender()}
				/>
			</div>
		);
	}
}

export default App;
