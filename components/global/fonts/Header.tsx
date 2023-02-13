import { ReactNode } from 'react';
import styled from 'styled-components';

import { oswald } from '../../../utils';

// [TODO] rework this logic

interface HeaderProps {
	children?: ReactNode;
	className?: string;
}

interface Header {
	H1: React.FC<HeaderProps>;
	H2: React.FC<HeaderProps>;
}

const StyledH1 = styled.h1`
	font-size: clamp(1.9rem, 7vmin, 72px);
	line-height: clamp(2.1rem, 8vmin, 78px);
	text-transform: uppercase;
`;

const StyledH2 = styled.h2`
	font-size: clamp(1.7rem, 1.7rem + 0.8vmin, 64px);
	line-height: clamp(1.9rem, 1.9rem + 0.8vmin, 72px);
	text-transform: uppercase;
`;

const StyledH3 = styled.h3`
	font-size: clamp(1.5rem, 2rem + 0.5vmin, 48px);
	line-height: clamp(1.7rem, 2rem + 0.5vmin, 56px);
	text-transform: uppercase;
`;

const H1 = ({ children, className }: HeaderProps) => (
	<StyledH1 className={`${oswald.className} ${className}`}>{children}</StyledH1>
);
const H2 = ({ children, className }: HeaderProps) => (
	<StyledH2 className={`${oswald.className} ${className}`}>{children}</StyledH2>
);
const H3 = ({ children, className }: HeaderProps) => (
	<StyledH3 className={`${oswald.className} ${className}`}>{children}</StyledH3>
);

const header = {
	H1: H1,
	H2: H2,
	H3: H3,
};

export { header };
