import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

import { mediaBreakpoints } from '../../utils/animation/matchMedia';
import logoBannerImage from '../../public/logo.svg';

const Container = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
	background-color: white;
	overflow: hidden;
`;

const ImageContainer = styled.div`
	--gradients: linear-gradient(limegreen, transparent), linear-gradient(90deg, skyblue, transparent),
		linear-gradient(-90deg, coral, transparent);
	--linear-gradients: linear-gradient(to top, #86f5f9 0%, #000066 100%);
	position: absolute;
	height: 50%;
	width: 100%;
	top: 0;
	left: 0;
	margin-left: 0;
	margin-right: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	@media (min-width: 415px) {
		position: absolute;
		height: 100%;
	}
	@media (min-width: 500px) {
		width: 50%;
	}
`;

const RollImageOne = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	background: var(--linear-gradients), url('/roll_3.jpg');
	background-size: cover;
	background-blend-mode: screen;
	background-position: 54% 39%;
	opacity: 1;
`;

const RollImageTwo = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	background: var(--linear-gradients), url('/roll_1.jpg');
	background-size: cover;
	background-blend-mode: screen, screen;
	background-position: 85% 39%;
	opacity: 1;
`;

const RollImageThree = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	transform: translateX(0);
	background: var(--linear-gradients), url('/roll_feature.jpg');
	background-size: cover;
	background-blend-mode: screen;
	background-position: 49% 50%;
	opacity: 1;
`;

// Text content

const Content = styled.div`
	position: relative;
	left: -1vw;
	z-index: 3;
	height: 23%;
	width: 321px;
`;

const LogoContainer = styled.div`
	position: absolute;
	z-index: 4;
	top: -48px;
	left: 71px;
	width: 228px;
	height: 140px;
	&:before {
		content: ' ';
		background: white;
		position: absolute;
		top: -26px;
		left: 17px;
		height: 138%;
		width: 85.2%;
		border-radius: 50%;
	}
`;

const LogoBannerImage = styled(Image)`
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0px;
	top: 6px;
	right: 0;
	bottom: 0;
	scale: 1.4;
`;

const Title = styled.h2`
	--size: 93.24px;
	position: relative;
	max-width: 6ch;
	z-index: 3;
	margin: 0;
	font-size: var(--size);
	line-height: calc(var(--size) - 7px);
	text-align: justify;
	font-weight: 600;
	letter-spacing: -2.1px;
	text-shadow: var(--bkgd-color) 2px 0 15px;
`;
const BTTText = styled.text`
	fill: white;
	stroke: url(#gradient);
	stroke-width: 1px;
	stroke-linejoin: round;
	animation: 2s pulsate infinite;
	@keyframes pulsate {
		50% {
			stroke-width: 2.5px;
		}
	}
`;

const BTTSVGTop = styled.svg`
	position: absolute;
	top: 50%;
	left: 103px;
	width: auto;
	height: 150px;
`;

const BTTSVGBottom = styled(BTTSVGTop)`
	top: 87%;
	width: auto;
	height: 145px;
`;

export const Test = () => {
	const elem = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add(mediaBreakpoints, (context: any) => {
			const { reduceMotion, isMobile } = context.conditions;
			if (!reduceMotion) {
				const tl = gsap
					.timeline({
						scrollTrigger: {
							trigger: '.coming-soon-section',
							start: 'center center',
							end: () => '+=350%',
							pin: '.coming-soon-section',
							anticipatePin: 1,
							// markers: true,
							toggleActions: 'play none none reset',
							scrub: 0.3,
							// id: 'center tl',
						},
					})
					.to('.image-three', {
						x: '-100%',
						duration: 2,
						delay: 1,
						ease: 'power4.easeOut',
					})
					.to(
						'.image-three',
						{
							autoAlpha: 0,
							duration: 1,
							ease: 'power4.easeOut',
						},
						'<0.5'
					)
					.to('.image-two', {
						x: '-100%',
						duration: 1.5,
						ease: 'power4.easeOut',
					})
					.to(
						'.image-two',
						{
							autoAlpha: 0,
							duration: 1,
							ease: 'power4.easeOut',
						},
						'<0.5'
					)
					.to('.image-one', {
						x: '0',
						duration: 1,
					});
			}
		});
		return () => mm.revert();
	}, []);

	return (
		<Container className="coming-soon-section" ref={elem}>
			<ImageContainer className="image-container">
				<RollImageOne className="image-one" />
				<RollImageTwo className="image-two" />
				<RollImageThree className="image-three" />
			</ImageContainer>
			<Content>
				<LogoContainer>
					<LogoBannerImage src={logoBannerImage} alt="BTT Lago Vista logo banner" layout="fill" objectFit="contain" />
				</LogoContainer>
				<Title>
					<span>is coming to</span>
					<span>
						<BTTSVGTop viewBox="0 0 600 130">
							<defs>
								<linearGradient id="gradient" y1="0" y2="1">
									<stop stopColor="#86f5f9" offset="0" />
									<stop stopColor="#000066" offset="1" />
								</linearGradient>
							</defs>
							<BTTText y="120" x="0">
								Lago
							</BTTText>
						</BTTSVGTop>
						<BTTSVGBottom viewBox="0 0 600 130">
							<defs>
								<linearGradient id="gradient" y1="0" y2="1">
									<stop stopColor="#86f5f9" offset="0" />
									<stop stopColor="#000066" offset="1" />
								</linearGradient>
							</defs>
							<BTTText y="125" x="0">
								Vista
							</BTTText>
						</BTTSVGBottom>
					</span>
				</Title>
			</Content>
		</Container>
	);
};
