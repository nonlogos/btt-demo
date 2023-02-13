import { ReactNode } from 'react';
import styled from 'styled-components';

import { roboto, oswald } from '../../../utils';

interface TextProps {
	children: ReactNode;
	className?: string;
}

const StyledText = styled.p`
	font-size: clamp(1.125rem, calc(1rem + 0.2vmin), 1.2rem);
	line-height: clamp(1.4rem, calc(1.5rem + 0.5vmin), 1.7rem);
	font-weight: 300;
	margin-bottom: var(--sp-2x);
`;

export const Text = ({ children, className }: TextProps) => (
	<StyledText className={`${roboto.className} ${className}`}>{children}</StyledText>
);
export const Subtitle = styled(StyledText)`
	margin-top: var(--sp-2x);
	font-weight: 600;
	line-height: 1.2em;
	letter-spacing: 0.1px;
	color: var(--font-color-dark);
`;

export const Disclaimer = styled(StyledText)`
	margin-top: var(--sp-10x);
	font-size: 0.8em;
	line-height: 1em;
	font-weight: 400;
	text-shadow: var(--sm-shadow);
`;

// export const Subtitle = ({ children, className }: TextProps) => (
// 	<StyledSubtitle className={`${oswald.className} ${className}`}>{children}</StyledSubtitle>
// );
