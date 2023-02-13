import styled from 'styled-components';

/**
 * EvenGrid
 */
interface EvenGridProps {
	minWidth?: string;
	gap?: string;
	children?: React.ReactNode;
}

const StyledEvenGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: ${({ minWidth, gap }: EvenGridProps) => `repeat(auto-fit, minmax(${minWidth}, 1fr))`};
	align-items: center;
	grid-gap: ${({ gap }: EvenGridProps) => (gap ? gap : `0px`)};
	grid-auto-flow: dense;
`;

export const EvenGrid = ({ minWidth = '0px', gap, children }: EvenGridProps) => (
	<StyledEvenGrid minWidth={minWidth} gap={gap}>
		{children}
	</StyledEvenGrid>
);
