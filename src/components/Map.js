import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import coffeePoints from '../data/features.json';

const TOKEN = 'pk.eyJ1IjoiaXZpbGlsaSIsImEiOiJjanl6b3JpdHkwM25mM21sbjZ2Z2g4OGh2In0.vEehuUtZy7mlWoKz7MszDA';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const pinStyle = {
	fill: '#d00',
	stroke: 'none'
};

class Map extends Component {
	state = {
		viewport: {
			width: '100vw',
			height: '100vh',
			latitude: 43.8562586,
			longitude: 18.4130763,
			zoom: 14
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
						<svg height={40} viewBox="0 0 24 24" style={pinStyle}>
							<path d={ICON} />
						</svg>
					</Marker>
				))}
			</ReactMapGL>
		);
	}
}

export default Map;
