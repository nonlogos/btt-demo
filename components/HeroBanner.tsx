import styled from 'styled-components';

import { ActionsContainer } from './ActionsContainer';
import { Text, Disclaimer } from './Typography';
import { oswald } from '../utils';

interface HeroBannerProps {
	bkgdImage: string;
	title: string;
	subtitle?: string;
	bodyText?: string;
	showButtonTwo?: boolean;
	disclaimer?: string;
}

const HeroBannerContainer = styled.section`
	--max-height: 620px;
	position: relative;
	background-image: ${({ bkgdImage }: Partial<HeroBannerProps>) => `url('/${bkgdImage}.jpg');`};
	background-position: 36% 61%;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: max(30rem, 45vh);
	color: var(--font-color-light);
	@media (min-width: 450px) {
		height: min(40vh, var(--max-height));
	}
	@media (min-width: 500px) {
		height: min(80vh, var(--max-height));
	}

	@media (min-width: 1921px) {
		height: min(45vh, var(--max-height));
	}
`;

const HeroContent = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	padding: var(--sp-3x);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
	z-index: 21;
	@media (min-width: 500px) {
		padding: var(--sp-2x) var(--sp-6x);
	}
`;

const Title = styled.p`
	font-size: clamp(2rem, 2rem + 0.8vmin, 64px);
	text-shadow: var(--sm-txt-shadow);
	line-height: clamp(2.2rem, 2.2rem + 0.9vmin, 70px);
	text-transform: uppercase;
	font-weight: 700;
	max-width: 31ch;
	@media (max-width: 850px) {
		display: inline-block;
		line-height: 1.7rem;
		font-size: 1.5rem;
	}
`;

const Subtitle = styled.span`
	display: block;
	padding-top: var(--sp-2x);
	font-size: 0.7em;
	line-height: 0.7em;
	@media (max-width: 850px) {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
`;

const BodyText = styled(Text)`
	margin-top: var(--sp-3x);
	margin-bottom: var(--sp-6x);
	font-size: 1rem;
	line-height: 1.2rem;
	font-weight: 400;
	text-shadow: var(--sm-txt-shadow);
	@media (min-width: 850px) {
		font-size: clamp(1.2rem, 2vmin, 1.6rem);
		display: inline-block;
		font-size: 1em;
		line-height: 1em;
	}
`;
const ActionsContianer = styled.div`
	display: flex;
	margin-top: var(--sp-4x);
	gap: var(--sp-2x);
	& button {
		box-shadow: var(--box-shadow);
	}
`;

// TODO investigate using iframe for video

export const HeroBanner = ({
	bkgdImage,
	title,
	subtitle,
	bodyText,
	showButtonTwo = true,
	disclaimer,
}: HeroBannerProps) => {
	return (
		<HeroBannerContainer bkgdImage={bkgdImage}>
			<HeroContent>
				<Title className={oswald.className}>
					{title}
					{subtitle && <Subtitle>{subtitle}</Subtitle>}
				</Title>
				{bodyText && <BodyText>{bodyText}</BodyText>}
				<ActionsContainer showButtonTwo={showButtonTwo} />
			</HeroContent>
			<Disclaimer dark={false}>{disclaimer}</Disclaimer>
		</HeroBannerContainer>
	);
};
