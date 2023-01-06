import styled from 'styled-components';
import Image from 'next/image';

export const BaseSection = styled.div`
	position: relative;
	height: clamp(10rem, 100vmin, 1052px);
	@media (min-width: 1921px) {
		height: 70vh;
	}
`;

export const SectionHeader = styled.h2`
	align-self: flex-start;
`;

export const PictureFrame = styled.div`
	clip-path: inset(0 0 0 0);
	/* border: 17px solid white; */
	position: relative;
`;

export const BaseImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
