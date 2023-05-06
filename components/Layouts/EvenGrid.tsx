import styled from 'styled-components';

/**
 * EvenGrid
 */
interface EvenGridProps {
	minWidth: string;
	gap?: string;
	alignItems?: 'stretch' | 'start' | 'end' | 'center' | 'baseline';
	children?: React.ReactNode;
}

const StyledEvenGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: ${({ minWidth, gap }: EvenGridProps) => `repeat(auto-fit, minmax(${minWidth}, 1fr))`};
	align-items: ${({ alignItems }) => alignItems};
	grid-gap: ${({ gap }: EvenGridProps) => (gap ? gap : `0px`)};
	grid-auto-flow: dense;
	margin-bottom: 0;
	@media (min-width: 707px) {
		margin-bottom: var(--sp-10x);
	}
	@media (min-width: 1020px) {
		max-width: 90%;
		margin: 0 auto;
		margin-bottom: var(--sp-10x);
	}
`;

export const EvenGrid = ({ minWidth, gap, alignItems = 'center', children }: EvenGridProps) => (
	<StyledEvenGrid minWidth={minWidth} gap={gap} alignItems={alignItems}>
		{children}
	</StyledEvenGrid>
);
