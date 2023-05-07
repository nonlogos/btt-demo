import styled from 'styled-components';
import { Home, Email, AlternateEmail, LocalPhone } from '@mui/icons-material';

import { Box } from '../Box';
import { EvenGrid } from '../Layouts';
import { Text } from '../Typography';
import { SIGN_IN_URL } from '../../siteContent';

const StyledContainer = styled(Box)`
	display: flex;
	align-items: center;
`;

const StyledUl = styled.ul`
	width: 100%;
	min-height: 40dvh;
	padding: var(--sp-2x);
	margin-top: var(--sp-6x);
	margin-bottom: var(--sp-10x);
	@media (min-width: 708px) {
		padding: var(--sp-2x) var(--sp-5x);
		width: 80%;
	}
	@media (min-width: 1439px) {
		padding: var(--sp-2x) var(--sp-5x);
		width: 98%;
		justify-content: center;
		text-align: center;
	}
	& > div {
		gap: var(--sp-4x);
	}
`;

const StyledTitleContainer = styled.div`
	display: flex;
	gap: var(--sp-base);
`;

const StyledTitle = styled(Text)`
	font-weight: 600;
	text-transform: uppercase;
	margin-bottom: var(--sp-base);
`;

const StyledItem = styled.li`
	align-self: start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 1.1em;
	font-size: 1rem;
	@media (min-width: 1439px) {
		text-align: center;
		justify-self: center;
	}
`;

export const ContactSources = () => {
	return (
		<StyledContainer>
			<StyledUl>
				<EvenGrid minWidth="200px">
					<StyledItem>
						<StyledTitleContainer>
							<LocalPhone color="primary" />
							<StyledTitle>Phone</StyledTitle>
						</StyledTitleContainer>
						<a href="tel:+15122223482">(512) 222-3482</a>
					</StyledItem>
					<StyledItem>
						<StyledTitleContainer>
							<Home color="primary" />
							<StyledTitle>Address</StyledTitle>
						</StyledTitleContainer>
						<address>7708 Lohman Ford Rd Suite 201E Lago Vista, TX 78645</address>
					</StyledItem>
					<StyledItem>
						<StyledTitleContainer>
							<Email color="primary" />
							<StyledTitle>Email</StyledTitle>
						</StyledTitleContainer>
						<a href="mailto:bttlagovista@gmail.com">bttlagovista@gmail.com</a>
					</StyledItem>
					<StyledItem>
						<StyledTitleContainer>
							<AlternateEmail color="primary" />
							<StyledTitle>GYMDESK</StyledTitle>
						</StyledTitleContainer>
						<a href="SIGN_IN_URL">for regular updates</a>
					</StyledItem>
				</EvenGrid>
			</StyledUl>
		</StyledContainer>
	);
};
