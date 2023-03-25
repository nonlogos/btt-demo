import styled from 'styled-components';
import { EvenGrid } from './Layouts';
import { ActiveLink } from './ActiveLink';
import { MainNav } from './MainNav';
import { Text } from './Typography';

const StyledFooter = styled.footer`
	position: relative;
	display: flex;
	min-height: 15rem;
	margin: 0;
	padding-bottom: var(--sp-5x);
	background: var(--primary-color);
	justify-content: center;
	font-size: 0.8rem;
	color: var(--font-color-light);
`;

const Heading = styled.h4`
	padding-bottom: var(--sp-2x);
`;

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: start;
	width: 100%;
	height: 100%;
	padding: var(--sp-5x) var(--sp-3x) 0;
	line-height: 2.5em;
	@media (min-width: 780px) {
		padding: var(--sp-10x) var(--sp-8x);
	}
`;

const AboutContent = styled.div`
	& p {
		font-size: 0.8rem;
		line-height: 1.2rem;
	}
`;

const infoLinks = () => (
	<ul>
		<li>
			<ActiveLink url="#" linkName="Privacy Policy" />
		</li>
		<li>
			<ActiveLink url="#" linkName="Terms and Conditions" />
		</li>
	</ul>
);

const aboutText = () => (
	<AboutContent>
		<Text>
			Brazilian Top Team (BTT) Lago Vista is a Brazilian Jiu Jitsu Academy offering beginner, intermediate, and advanced
			classes for both adults and kiddos.
		</Text>
		<Text>
			Led by multiple-time IBJJF champion Prof. Israel Davila, BTT welcomes the Lago Vista and surrounding communities
			to the Team.
		</Text>
		<Text>Awaken your inner champion at BTT Lago Vista!</Text>
	</AboutContent>
);

export const Footer = () => {
	return (
		<StyledFooter>
			<EvenGrid minWidth="260px">
				<StyledColumn>
					<Heading>Quick Links</Heading>
					{MainNav}
				</StyledColumn>
				<StyledColumn>
					<Heading>Info</Heading>
					{infoLinks()}
				</StyledColumn>
				<StyledColumn>
					<Heading>About BTT Lago Vista</Heading>
					{aboutText()}
				</StyledColumn>
			</EvenGrid>
		</StyledFooter>
	);
};
