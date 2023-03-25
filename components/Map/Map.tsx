import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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
