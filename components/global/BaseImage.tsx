import styled from 'styled-components';
import Image from 'next/legacy/image';

// TODO might not need this. Check next js docs

export const BaseImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
