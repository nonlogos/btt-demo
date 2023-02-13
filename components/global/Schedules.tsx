import styled from 'styled-components';

import { Box, header, Text, Disclaimer, Button } from './';

const Container = styled(Box)`
	flex-direction: column;
	gap: var(--sp-3x);
	min-height: max(100vmin, 725px);
	padding-top: 40%;
	background: url('/group_profile.jpg');
	background-position: 50% -15%;
	background-repeat: no-repeat;
	background-size: contain;
	background-color: var(--bkgd-highlight-color);
	@media (min-width: 707px) {
		background-position: 50% -33%;
	}
`;

const ActionsContianer = styled.div`
	display: flex;
	gap: var(--sp-2x);
`;

export const Schedules = () => {
	return (
		<Container>
			<header.H2>Class Schedule</header.H2>
			<Text>Gi and No-Gi classes are included in the fee.</Text>
			<ActionsContianer>
				<Button>See Schedule</Button>
				<Button>Enroll Today*</Button>
			</ActionsContianer>
			<Text>All classes are beginner friendly</Text>
			<Disclaimer>*Please note you'll be redirected to Gymdesk, a safe and secure website, to sign up.</Disclaimer>
		</Container>
	);
};
