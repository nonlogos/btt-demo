import styled from 'styled-components';

import { Text } from './fonts/Text';
import { oswald } from '../../utils';

// [TODO] background image blend mode on h2 is not working in safari

interface TaglineBannerProps {
	title: string;
	bodyText: string;
}

const Container = styled.section`
	--linear-gradients: linear-gradient(to top, #d7ccc8 0%, #3f51b5 100%);
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 25rem;
	padding: var(--sp-10x) 0;
	background: var(--bkgd-top-color);
	text-align: center;
	z-index: 5;
	overflow: hidden;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

const Header = styled.h2`
	margin: 0;
	margin-bottom: 2px;
	max-width: 800px;
	background-image: var(--linear-gradients), url('/roll_feature.jpg');
	background-blend-mode: multiply;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top 68% left 50%;
	background-position-x: 68%;
	background-position-y: 50%;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: clamp(3rem, 20vmin, 120px);
	text-align: center;
	font-weight: bold;
	text-transform: uppercase;
	font-weight: 800;
	line-height: 1em;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.5px;
	@media (min-width: 1100px) {
		background-position: 68% 50%;
	}
`;

const BodyText = styled(Text)`
	margin: 0;
	padding: var(--sp-4x) var(--sp-2x) 0 var(--sp-2x);
`;

export const TaglineBanner = ({ title, bodyText }: TaglineBannerProps) => {
	return (
		<Container>
			<Header className={oswald.className}>{title}</Header>
			<BodyText>{bodyText}</BodyText>
		</Container>
	);
};
