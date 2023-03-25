import { ReactNode } from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import { Box, header, Text, Disclaimer, Button } from '../';

interface TestimonialProps {
	title: string;
	children: ReactNode;
	author: string;
	rank: string;
}

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	max-width: 70%;
`;

const Header = styled(header.H4)`
	display: flex;
	gap: 1rem;
	margin-bottom: var(--sp-4x);
`;

const IconContainer = styled.span`
	position: relative;
	top: -0.5rem;
`;

export const Testimonial = ({ title, children, author, rank }: TestimonialProps) => {
	return (
		<Container>
			<Header>
				<IconContainer>
					<FaQuoteLeft size="2rem" color="gray" />
				</IconContainer>
				{title}
				<IconContainer>
					<FaQuoteRight size="2rem" color="gray" />
				</IconContainer>
			</Header>
			{children}
			<Text>
				{author}, {rank}
			</Text>
		</Container>
	);
};
