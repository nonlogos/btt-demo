import styled from 'styled-components';

import { Box, header, Text, Disclaimer, Button } from './';

interface SchedulesProps {
	bkgdImage?: boolean;
}

const Container = styled(Box)`
	position: relative;
	flex-direction: column;
	gap: var(--sp-2x);
	padding-top: 40%;
	padding-bottom: 20%;
	background: ${({ bkgdImage }: SchedulesProps) => bkgdImage && "url('/group_profile.jpg')"};
	background-position: 50% 0%;
	background-repeat: no-repeat;
	background-size: contain;
	background-color: var(--bkgd-highlight-color);
	text-align: center;
	@media (min-width: 707px) {
		gap: var(--sp-4x);
	}
	& h2,
	p {
		padding: 0 var(--sp-2x);
	}
`;

const ActionsContianer = styled.div`
	display: flex;
	gap: var(--sp-2x);
`;

export const Schedules = ({ bkgdImage = false }: SchedulesProps) => {
	return (
		<Container bkgdImage={bkgdImage}>
			<header.H2>Class Schedule</header.H2>
			<Text>Gi and No-Gi classes are included in the fee.</Text>
			<ActionsContianer>
				<Button>See Schedule</Button>
				<Button>Enroll Today*</Button>
			</ActionsContianer>
			<Text>All classes are beginner friendly</Text>
			<Disclaimer dark>
				*Please note you&apos;ll be redirected to Gymdesk, a safe and secure website, to sign up.
			</Disclaimer>
		</Container>
	);
};