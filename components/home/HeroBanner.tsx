import { forwardRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import logoBannerImage from '../../public/logo_banner_sm.svg';

const HeroBannerContainer = styled.section`
	position: relative;
	height: clamp(10rem, 100vh, 1600px);
	width: 100vw;
	@media (max-width: 800px) {
		height: 25vh;
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
	z-index: 1;
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
	z-index: 2;
`;

export const HeroBanner = forwardRef<HTMLVideoElement>((_, ref) => {
	return (
		<HeroBannerContainer>
			<HeroVidBg className="hero-bkgd" ref={ref} autoPlay={false} muted loop>
				<source src="hero_vid.mp4" type="video/mp4" />
			</HeroVidBg>
			<TitleComponents>
				<LogoImage src={logoBannerImage} alt="BTT Lago Vista logo" />
			</TitleComponents>
		</HeroBannerContainer>
	);
});
