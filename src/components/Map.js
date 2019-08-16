import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiaXZpbGlsaSIsImEiOiJjanl6b3JpdHkwM25mM21sbjZ2Z2g4OGh2In0.vEehuUtZy7mlWoKz7MszDA';

class Map extends Component {
	state = {
		viewport: {
			width: '100vw',
			height: '100vh',
			latitude: 43.8562586,
			longitude: 18.4130763,
			zoom: 8
		}
	};

	render() {
		return (
			<ReactMapGL
				{...this.state.viewport}
				mapStyle="mapbox://styles/mapbox/dark-v9"
				mapboxApiAccessToken={TOKEN}
				onViewportChange={(viewport) => this.setState({ viewport })}
			/>
		);
	}
}

export default Map;
