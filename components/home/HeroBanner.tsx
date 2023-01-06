import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import logoBannerImage from '../../public/logo_banner_sm.svg';

const HeroBannerContainer = styled.section`
	position: relative;
	height: clamp(10rem, 100vh, 1600px);
	width: 100vw;
	height: 35vh;
	@media (min-width: 450px) {
		height: 60vh;
	}
	@media (min-width: 800px) {
		height: 100vh;
	}

	@media (min-width: 1921px) {
		height: 45vh;
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

const LogoImage = styled(Image)`
	width: auto;
	max-height: clamp(2rem, 8vmin, 5rem);
	border: white solid 5px;
	box-shadow: 0px 2px 16px 8px rgba(0, 0, 0, 0.65);
`;

const TitleComponents = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 21;
`;

const Title = styled.h2`
	display: flex;
	flex-direction: column;
	margin: 4vmin 0;
	color: white;
	font-size: min(6vmin, 59.4px);
	text-shadow: black 2px 0 15px;
	text-align: center;
	& .champions,
	& .mat {
		display: block;
	}

	& .champions {
		font-size: min(11vmin, 99px);
		line-height: min(15vmin, 140px);
		letter-spacing: 2.2px;
		letter-spacing: 2.2px;
	}
	& .mat {
		letter-spacing: normal;
	}
`;

export const HeroBanner = () => {
	const heroVid = useRef<HTMLVideoElement | null>(null);

	return (
		<HeroBannerContainer>
			<HeroVidBg className="hero-bkgd" ref={heroVid} autoPlay loop muted playsInline preload="auto">
				<source src="/hero_vid.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</HeroVidBg>
			<TitleComponents>
				<LogoImage src={logoBannerImage} alt="BTT Lago Vista logo" />
				<Title>
					<span className="champions">Champions</span>
					<span className="mat">on and off the mat</span>
				</Title>
			</TitleComponents>
		</HeroBannerContainer>
	);
};
