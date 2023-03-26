import { useRef } from 'react';
import styled from 'styled-components';
import { FiUserPlus, FiCalendar } from 'react-icons/fi';

import { Button, header, Text, Disclaimer } from '../';
import { oswald } from '../../utils';

interface HeroBannerProps {
	title: string;
	bodyText?: string;
	buttonOne?: string;
	buttonTwo?: string;
	disclaimer?: string;
}

const HeroBannerContainer = styled.section`
	--max-height: 1120px;
	position: relative;
	width: 100vw;
	height: max(30rem, 45vh);
	background: black;
	color: var(--font-color-light);
	@media (min-width: 450px) {
		height: 60vh;
	}
	@media (min-width: 800px) {
		height: min(100vh, var(max-height));
	}

	@media (min-width: 1921px) {
		height: min(45vh, var(--max-height));
	}
`;

const HeroVidBg = styled.video`
	object-fit: cover;
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 20;
	background: black;
`;

const HeroContent = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	padding: var(--sp-2x);
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

const Title = styled(header.H1)`
	line-height: 1.2em;
	text-shadow: var(--lg-txt-shadow);
	& span {
		display: block;
		font-size: 1.5em;
		line-height: 1.1em;
		@media (min-width: 850px) {
			display: inline-block;
			font-size: 1em;
			line-height: 1em;
		}
	}
`;

const BodyText = styled(Text)`
	margin-top: var(--sp-3x);
	margin-bottom: var(--sp-6x);
	font-weight: 400;
	font-size: clamp(1.2rem, 2vmin, 1.6rem);
	text-shadow: var(--sm-txt-shadow);
`;
const ActionsContianer = styled.div`
	display: flex;
	gap: var(--sp-2x);
	& button {
		box-shadow: var(--box-shadow);
	}
`;

// TODO investigate using iframe for video

export const HeroBanner = ({ title, bodyText, buttonOne, buttonTwo, disclaimer }: HeroBannerProps) => {
	const heroVid = useRef<HTMLVideoElement | null>(null);
	const titleStrings = title.split(/<span>(.*?)<\/span>/g).filter(Boolean); // remove empty string result

	return (
		<HeroBannerContainer>
			<HeroVidBg className="hero-bkgd" ref={heroVid} autoPlay loop muted playsInline preload="auto">
				<source src="/hero_vid.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</HeroVidBg>
			<HeroContent>
				<Title className={oswald.className}>
					<span>{titleStrings[0]}</span>
					{titleStrings[1]}
				</Title>
				<BodyText>{bodyText}</BodyText>
				<ActionsContianer>
					<Button Icon={FiUserPlus}>{buttonOne}</Button>
					<Button Icon={FiCalendar}>{buttonTwo}</Button>
				</ActionsContianer>
			</HeroContent>
			<Disclaimer dark={false}>{disclaimer}</Disclaimer>
		</HeroBannerContainer>
	);
};
