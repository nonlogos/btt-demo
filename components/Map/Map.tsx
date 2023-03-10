import { useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { IoLocationSharp } from 'react-icons/io5';
import styled from 'styled-components';

// https://www.google.com/maps/place/Brazilian+Top+Team+Austin/@30.4502297,-97.7841392,15z/data=!4m5!3m4!1s0x0:0x8bc6997f10213eed!8m2!3d30.4502676!4d-97.7841742

//www.google.com/maps/place/7708+Lohman+Ford+Rd,+Lago+Vista,+TX+78645/@30.4756111,-97.9782488,17z/data=!3m1!4b1!4m5!3m4!1s0x865b25493110e5e5:0x8779fbcbb2506c26!8m2!3d30.4756111!4d-97.9760601

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 30.4756111,
	lng: -97.9782488,
};

export const Map = () => {
	const { isLoaded, loadError } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
	});

	if (loadError) {
		console.error(`Google Map Error: ${loadError}`);
		return <div>Google Map Error Found: Map cannot be loaded right now.</div>;
	}

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
			<Marker position={center} />
		</GoogleMap>
	) : null;
};
