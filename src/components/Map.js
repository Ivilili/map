import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import coffeePoints from '../data/features.json';

import './Map.css';

const TOKEN = 'pk.eyJ1IjoiaXZpbGlsaSIsImEiOiJjanl6b3JpdHkwM25mM21sbjZ2Z2g4OGh2In0.vEehuUtZy7mlWoKz7MszDA';

class Map extends Component {
	state = {
		viewport: {
			width: '100vw',
			height: '100vh',
			latitude: 43.8562586,
			longitude: 18.4130763,
			zoom: 16,
			pitch: 80,
			bearing: -17.6
		},
		search: ''
	};

	render() {
		console.log(coffeePoints);
		return (
			<ReactMapGL
				{...this.state.viewport}
				mapStyle="mapbox://styles/mapbox/dark-v9"
				mapboxApiAccessToken={TOKEN}
				onViewportChange={(viewport) => this.setState({ viewport })}
			>
				{coffeePoints.map((e) => (
					<Marker key={e.id} latitude={e.geometry.coordinates[1]} longitude={e.geometry.coordinates[0]}>
						<div className="marker" />
					</Marker>
				))}
			</ReactMapGL>
		);
	}
}

export default Map;
