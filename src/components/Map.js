import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

import './Map.css';

const TOKEN = 'pk.eyJ1IjoiaXZpbGlsaSIsImEiOiJjanl6b3JpdHkwM25mM21sbjZ2Z2g4OGh2In0.vEehuUtZy7mlWoKz7MszDA';

class Map extends Component {
	state = {
		viewport: {
			width: '100vw',
			height: '100vh',
			latitude: 43.85555,
			longitude: 18.42,
			zoom: 15,
			pitch: 80,
			bearing: -17.6
		}
	};

	render() {
		return (
			<ReactMapGL
				{...this.state.viewport}
				mapStyle="mapbox://styles/mapbox/dark-v9"
				mapboxApiAccessToken={TOKEN}
				onViewportChange={(viewport) => this.setState({ viewport })}
			>
				{this.props.markerRender}
				{this.props.showPopup}
			</ReactMapGL>
		);
	}
}

export default Map;
