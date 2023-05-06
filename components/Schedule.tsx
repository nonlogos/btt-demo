import styled from 'styled-components';

import { Box, header, Text, Disclaimer, Button } from '.';
import { ActionsContainer } from './ActionsContainer';
interface ScheduleProps {
	bkgdImage?: boolean;
}

const Container = styled(Box)`
	position: relative;
	flex-direction: column;
	gap: var(--sp-2x);
	padding-top: 40%;
	padding-bottom: 20%;
	background: ${({ bkgdImage }: ScheduleProps) => bkgdImage && "url('/group_profile.jpg')"};
	background-position: 50% 0%;
	background-repeat: no-repeat;
	background-size: contain;
	background-color: var(--bkgd-highlight-color);
	text-align: center;
	@media (min-width: 707px) {
		gap: var(--sp-4x);
		padding-top: 35%;
		padding-bottom: 10%;
	}
	& h2,
	p {
		padding: 0 var(--sp-2x);
	}
`;

export const Schedule = ({ bkgdImage = false }: ScheduleProps) => {
	return (
		<Container bkgdImage={bkgdImage}>
			<header.H2>Class Schedule</header.H2>
			<Text>Gi and No-Gi classes are included in the fee.</Text>
			<ActionsContainer />
			<Text>All classes are beginner friendly</Text>
			<Disclaimer dark>
				*Please note you&apos;ll be redirected to Gymdesk, a safe and secure website, to sign up.
			</Disclaimer>
		</Container>
	);
};
