import styled from 'styled-components';

// [TODO] can probably delete

export const BaseSection = styled.div`
	position: relative;
	height: clamp(10rem, 100vmin, 1052px);
	@media (max-width: 1026px) {
		height: auto;
		min-height: 90vh;
	}
	@media (min-width: 1921px) {
		height: 70vh;
	}
`;
