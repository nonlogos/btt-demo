import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import logoBannerImage from '../../public/logo_banner_sm.svg';

const HeroBannerContainer = styled.section`
	position: relative;
	height: clamp(10rem, 100vh, 1600px);
	width: 100vw;
	@media (max-width: 800px) {
		height: 35vmax;
	}
	@media (min-width: 1921px) {
		height: 45vmax;
	}
`;

const Figure = styled.figure`
	object-fit: cover;
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 99;
	margin: 0;
`;

const HeroVidBg = styled.video`
	object-fit: cover;
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 99;
	background: black;
`;

const LogoImage = styled(Image)`
	width: auto;
	max-height: clamp(2rem, 7vw, 7rem);
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
	z-index: 100;
`;

export const HeroBanner = () => {
	const heroVid = useRef<HTMLVideoElement | null>(null);

	return (
		<HeroBannerContainer>
			{/* <Figure id="videoContainer"> */}
			<HeroVidBg className="hero-bkgd" ref={heroVid} autoPlay loop muted playsInline preload="metadata">
				<source src="/hero_vid.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</HeroVidBg>
			<TitleComponents>
				<LogoImage src={logoBannerImage} alt="BTT Lago Vista logo" />
			</TitleComponents>
			{/* </Figure>
			<figcaption>
				&copy; Blender Foundation |<a href="http://mango.blender.org">mango.blender.org</a>
			</figcaption> */}
		</HeroBannerContainer>
	);
};
