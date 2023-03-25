import { ReactNode, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { roboto, oswald } from '../../utils';

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

const StyledItalicText = styled(StyledText)`
	font-style: italic;
	font-weight: 100;
`;

export const Text = ({ children, className }: TextProps) => (
	<StyledText className={`${roboto.className} ${className}`}>{children}</StyledText>
);

export const TextItalic = ({ children, className }: TextProps) => (
	<StyledItalicText className={`${roboto.className} ${className}`}>{children}</StyledItalicText>
);

export const Subtitle = styled(StyledText)`
	margin-top: var(--sp-2x);
	font-weight: 600;
	line-height: 1.2em;
	letter-spacing: 0.1px;
	color: var(--font-color-dark);
`;

export const Disclaimer = styled(StyledText)`
	position: absolute;
	bottom: var(--sp-4x);
	width: 100%;
	color: ${({ dark }: { dark: boolean }) => (dark ? 'var(--primary-color)' : 'var(--font-color-light)')};
	font-size: 0.7em;
	text-align: center;
	line-height: 1em;
	font-weight: 400;
	text-shadow: ${({ dark }: { dark: boolean }) => (dark ? 'none' : 'var(--sm-txt-shadow)')};
	z-index: 20;
	padding: 0 var(--sp-2x);
`;
