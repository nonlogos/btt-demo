import styled from 'styled-components';

import { Box, header, Text, Disclaimer, Button } from './';
import adultsProgramImage from '../../public/group-kids.jpg';

const Container = styled(Box)`
	position: relative;
	gap: var(--sp-4x);
	margin-top: 3rem;
	height: 30rem;
	padding: var(--sp-2x);
	text-align: center;
	background: linear-gradient(to bottom, white 5%, #7b929c 98%), url('/group-kids.jpg');
	background-blend-mode: hard-light;
	background-position: 48% -5%;
	background-repeat: no-repeat;
	background-size: cover;
	border-top: 2px solid white; // to hide the bordeer of the image
	@media (min-width: 707px) {
		margin-top: 8rem;
	}
`;

export const PreEnrolling = () => {
	return (
		<Container>
			<header.H2>Pre-enrolling</header.H2>
			<Text>The best time to start Brazilian Jiu-Jitsu was a year ago. The next best time is now.</Text>
			<Button>Enroll Today *</Button>
			<Disclaimer dark>
				*Please note you&apos;ll be redirected to Gymdesk, a safe and secure website, to sign up.
			</Disclaimer>
		</Container>
	);
};
