import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 30.4756111,
	lng: -97.9782488,
};

const StyledMapContainer = styled.div`
	height: 80dvh;
`;
export const Map = () => {
	const { isLoaded, loadError } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
	});
	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	if (loadError) {
		console.error(`Google Map Error: ${loadError}`);
		return <div>Google Map Error Found: Map cannot be loaded right now.</div>;
	}

	return isLoaded ? (
		<StyledMapContainer>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14} onLoad={onLoad} onUnmount={onUnmount}>
				<Marker position={center} />
			</GoogleMap>
		</StyledMapContainer>
	) : null;
};
