import { ReactNode } from 'react';
import styled from 'styled-components';

import { EvenGrid, header, Box, Subtitle, Button } from './';

interface TwoColumnLayoutProps {
	contentRight?: boolean;
	children?: ReactNode;
	Image: any;
	title: string;
	subtitle?: string;
	actionText?: string;
	actionLink?: string;
}

type StyledProps = { contentRight: boolean };

const Container = styled.section`
	min-height: var(--min-height);
	background: var(--bkgd-base-color);
	padding-bottom: var(--sp-6x);
	@media (min-width: 707px) {
		padding-bottom: 0;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	min-height: var(--min-height);
	grid-column: 1;
	@media (min-width: 707px) {
		grid-column: ${({ contentRight }: StyledProps) => (contentRight ? 2 : 1)};
		display: flex;
		justify-content: center;
		align-items: start;
		height: 100%;
		${({ contentRight }: StyledProps) => {
			return contentRight ? `padding-right: var(--sp-6x)` : `padding-left: var(--sp-6x)`;
		}}
	}
	@media (min-width: 1021px) {
		${({ contentRight }: StyledProps) => {
			return contentRight ? `padding-right: var(--sp-10x)` : `padding-left: var(--sp-10x)`;
		}}
	}
`;

const ImageContent = styled.div`
	position: relative;
	min-height: 450px;
	@media (min-width: 707px) {
		margin-top: var(--sp-10x);
		width: 90%;
		border: 30px solid white;
		box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.35);
	}
`;

const TextContainer = styled(Box)`
	flex-direction: column;
	align-items: start;
	gap: var(--sp-1x);
	min-height: var(--min-height);
	padding: var(--sp-4x);
	text-align: center;
	@media (min-width: 707px) {
		padding: 10rem var(--sp-6x) var(--sp-6x);
	}
	@media (min-width: 1021px) {
		padding: 10rem var(--sp-10x);
	}
`;

const TextHeaderContainer = styled.div`
	width: 100%;
	text-align: left;
	margin-bottom: var(--sp-base);
	@media (min-width: 707px) {
		margin-bottom: var(--sp-2x);
	}
	& h3 {
		margin-bottom: 0;
	}
`;

const TextBodyContainer = styled.div`
	width: 100%;
	text-align: left;
`;

const ButtonContainer = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: var(--sp-2x);
	@media (min-width: 707px) {
		align-items: start;
	}
`;

const StyledButton = styled(Button)`
	/* margin-top: var(--sp-2x); */
	width: 100%;
	@media (min-width: 707px) {
		width: auto;
	}
`;

export const TwoColumnLayout = ({
	contentRight = false,
	Image,
	title,
	subtitle,
	children,
	actionText,
	actionLink,
}: TwoColumnLayoutProps) => {
	console.log(Image);
	return (
		<Container>
			<EvenGrid minWidth="280px">
				<ImageContainer contentRight={contentRight}>
					<ImageContent>
						<Image />
					</ImageContent>
				</ImageContainer>
				<TextContainer>
					<TextHeaderContainer>
						<header.H3>{title}</header.H3>
						{subtitle && <Subtitle>{subtitle}</Subtitle>}
					</TextHeaderContainer>
					<TextBodyContainer>{children}</TextBodyContainer>
					{actionText && (
						<ButtonContainer>
							<StyledButton>{actionText}</StyledButton>
						</ButtonContainer>
					)}
				</TextContainer>
			</EvenGrid>
		</Container>
	);
};
