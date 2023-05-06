import { useState, useRef, ReactNode } from 'react';
import styled from 'styled-components';

import { roboto } from '../utils';

interface ButtonProps {
	Icon?: any;
	className?: string;
	children?: ReactNode;
}

export const StyledButton = styled.button`
	--animation: 250ms ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: var(--sp-base);
	padding: var(--sp-base) calc(var(--sp-base) + 3px);
	background-color: var(--primary-color);
	border: none;
	border-radius: 6px;
	color: var(--font-color-light);
	font-size: 14px;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	cursor: pointer;
	transition: background-color var(--animation);
	@media (min-width: 500px) {
		padding: 10px var(--sp-2x);
	}
	& svg {
		transition: transform var(--animation);
	}
	&:hover {
		background-color: var(--secondary-color);
		& svg {
			transform: ${({ buttonWidth }: { buttonWidth?: number | undefined }) =>
				buttonWidth ? `translateX(calc(${buttonWidth / 2 - 30}px + (1em / 2) ))` : 'translateX(0px)'};
		}
	}
	& * {
		transition: opacity var(--animation);
	}

	& .visible {
		opacity: 1;
	}
	& .hidden {
		opacity: 0;
	}
	& a {
		&:hover {
			color: var(--font-color-light);
		}
	}
`;

export const Button = ({ Icon, className, children }: ButtonProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const buttonWidth = buttonRef.current?.offsetWidth;

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	if (Icon) {
		return (
			<>
				<StyledButton
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className={`${roboto.className} ${className}`}
					buttonWidth={buttonWidth}
					ref={buttonRef}
				>
					<Icon />
					<span className={isHovered && Icon ? 'hidden' : 'visible'}>{children}</span>
				</StyledButton>
			</>
		);
	}
	return <StyledButton className={`${roboto.className} ${className}`}>{children}</StyledButton>;
};
