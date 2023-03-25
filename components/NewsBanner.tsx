import styled from 'styled-components';
import { MdEmojiObjects } from 'react-icons/md';

import { Text, Box } from './';

interface NewsBannerProps {
	content: string;
}

const Container = styled(Box)`
	color: var(--font-color-light);
	background: var(--secondary-color);
	padding: 0.5rem 1rem;
`;

const Content = styled(Text)`
	margin: 0;
	margin-top: -4px;
	margin-bottom: 0; // override existing styles
	font-size: 14px;
	font-weight: 400;
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 1px;
	line-height: 16px;
	max-width: 31ch;
	@media (min-width: 530px) {
		font-size: 16px;
		line-height: 1em;
		max-width: 100%;
	}
`;

const IconSpan = styled.span`
	position: relative;
	top: 1px;
`;

const Icon = styled(MdEmojiObjects)`
	position: relative;
	display: inline-block;
	top: 3px;
	left: -2px;
	height: clamp(1rem, 4vmin, 1.2rem);
	width: auto;
`;

export const NewsBanner = ({ content }: NewsBannerProps) => (
	<Container>
		<Content>
			<IconSpan>
				<Icon />
			</IconSpan>
			{content}
		</Content>
	</Container>
);
