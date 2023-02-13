import styled from 'styled-components';

import { Box, header, Text, Disclaimer, Button } from './';

const Container = styled(Box)`
	flex-direction: column;
	gap: var(--sp-3x);
	min-height: max(100vmin, 725px);
`;

export const Testimonials = () => {
	return (
		<Container>
			<header.H2>Testimonials</header.H2>
			<Text>Gi and No-Gi classes are included in the fee.</Text>
			<Text>All classes are beginner friendly</Text>
			<Disclaimer>*Please note you'll be redirected to Gymdesk, a safe and secure website, to sign up.</Disclaimer>
		</Container>
	);
};
