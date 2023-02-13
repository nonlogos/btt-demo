import { ReactNode } from 'react';
import styled from 'styled-components';

import { EvenGrid, header, Box, Subtitle, Button } from './';

interface TwoColumnLayoutProps {
	contentRight?: boolean;
	children?: ReactNode;
	Image: any;
	title: string;
	subTitle?: string;
	actionText?: string;
	actionLink?: string;
}

const Container = styled.section`
	height: 100%;
	min-height: var(--min-height);
	background: rgb(232, 230, 230);

	& .section-image {
		object-fit: cover;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	height: 100%;
	min-height: var(--min-height);
	grid-column: 1;
	border: 50px solid white;
	@media (min-width: 707px) {
		grid-column: ${({ contentRight }: { contentRight?: boolean }) => (contentRight ? 2 : 1)};
		/* border: none; */
	}
	& img {
		width: 50%;
	}
`;

const TextContainer = styled(Box)`
	flex-direction: column;
	align-items: start;
	gap: var(--sp-2x);
	min-height: var(--min-height);
	padding: var(--sp-3x);
	text-align: center;
	@media (min-width: 707px) {
		padding: var(--sp-8x);
	}
`;

const TextHeaderContainer = styled.div`
	width: 100%;
	margin-top: var(--sp-8x);
	margin-bottom: var(--sp-4x);
`;

const TextBodyContainer = styled.div`
	width: 100%;
	text-align: left;
`;

const StyledButton = styled(Button)`
	margin-top: var(--sp-2x);
	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const TwoColumnLayout = ({
	contentRight = false,
	Image,
	title,
	subTitle,
	children,
	actionText,
	actionLink,
}: TwoColumnLayoutProps) => {
	console.log(Image);
	return (
		<Container>
			<EvenGrid minWidth="350px">
				<ImageContainer contentRight={contentRight}>
					<Image />
				</ImageContainer>
				<TextContainer>
					<TextHeaderContainer>
						<header.H3>{title}</header.H3>
						<Subtitle>{subTitle}</Subtitle>
					</TextHeaderContainer>
					<TextBodyContainer>{children}</TextBodyContainer>
					{actionText && <StyledButton>{actionText}</StyledButton>}
				</TextContainer>
			</EvenGrid>
		</Container>
	);
};
