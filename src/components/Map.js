import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import coffeePoints from '../data/features.json';

import './Map.css';

const TOKEN = 'pk.eyJ1IjoiaXZpbGlsaSIsImEiOiJjanl6b3JpdHkwM25mM21sbjZ2Z2g4OGh2In0.vEehuUtZy7mlWoKz7MszDA';

class Map extends Component {
	state = {
		viewport: {
			width: '100vw',
			height: '100vh',
			latitude: 43.85555,
			longitude: 18.42,
			zoom: 16,
			pitch: 80,
			bearing: -17.6
		},
		selectedPoint: null
	};

	render() {
		const { selectedPoint } = this.state;
		return (
			<ReactMapGL
				{...this.state.viewport}
				mapStyle="mapbox://styles/mapbox/dark-v9"
				mapboxApiAccessToken={TOKEN}
				onViewportChange={(viewport) => this.setState({ viewport })}
			>
				{coffeePoints.map((point) => (
					<Marker
						key={point.id}
						latitude={point.geometry.coordinates[1]}
						longitude={point.geometry.coordinates[0]}
					>
						<div
							className="marker"
							onClick={(e) => {
								e.preventDefault();
								this.setState({ selectedPoint: point });
							}}
						/>
					</Marker>
				))}
				{selectedPoint ? (
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
				) : null}
			</ReactMapGL>
		);
	}
}

export default Map;
