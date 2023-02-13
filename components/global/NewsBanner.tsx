import styled from 'styled-components';
import { MdEmojiObjects } from 'react-icons/md';

import { Text } from './fonts/Text';
import { Box } from './Box';

interface NewsBannerProps {
	content: string;
}

const Container = styled(Box)`
	color: var(--font-color-light);
	background: var(--font-color-dark);
	padding: 0.5rem 1rem;
`;

const Content = styled(Text)`
	margin: 0;
	font-size: 18px;
	font-weight: 400;
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 1px;
	@media (max-width: 530px) {
		font-size: 0.7em;
		line-height: 1em;
		max-width: 31ch;
	}
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
			<span>
				<Icon />
			</span>
			{content}
		</Content>
	</Container>
);
