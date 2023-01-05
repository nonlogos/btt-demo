import { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import featureImage from '../../public/roll_feature.jpg';
import rollImage2 from '../../public/roll_1.jpg';
import rollImage4 from '../../public/roll_4.jpg';
import { BaseSection, BaseImage, PictureFrame } from '../../styles/globals';
import { mediaBreakpoints } from '../../utils/animation/matchMedia';

const ComingSoonSection = styled(BaseSection)`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 10;
	transform: translateY(0);
	height: clamp(30rem, 160vh, 1240px);
	box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
	background-color: white;
	overflow: hidden;
	&:before {
		content: '';
		height: 100%;
		width: 100%;
		position: absolute;
		background-color: gray;
		background-image: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 50%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0.5) 100%
		);
		opacity: 0.3;
	}
	& h2 {
		position: relative;
		display: flex;
		flex-direction: column;
		height: auto;
		margin: 0;
		margin-top: 8rem;
		transform: translateY(0%);
		font-weight: 900;
		font-size: 165px;
		line-height: 79px;
		text-align: center;

		& .coming-to {
			position: relative;
			left: -55px;
			font-size: 36px;
			line-height: 44px;
		}
		& .lago {
			font-size: 93px;
			text-transform: uppercase;
			position: relative;
			left: -5px;
			letter-spacing: 2.2px;
		}
		& .vista {
			position: relative;
			left: 0;
			font-size: 98px;
			text-transform: uppercase;
			letter-spacing: -1.5px;
		}

		@media (min-width: 540px) {
			position: absolute;
			height: 100%;
			transform: translateY(50%);
			left: 34%;
			font-size: 165px;
			font-weight: 900;
			line-height: 134px;
			text-align: inherit;
			& .coming-to {
				left: 0px;
				font-size: 53px;
				line-height: 43px;
			}

			& .lago {
				font-size: 165px;
				text-transform: inherit;
				position: relative;
				left: 0;
				letter-spacing: normal;
			}
			& .vista {
				position: relative;
				left: 39px;
				font-size: 106%;
				text-transform: inherit;
			}
		}
	}
`;

const Content = styled.div`
	position: relative;
	height: 100%;
	width: min(100%, 921px);
	margin: 0 auto;
`;

const ImagesContainer = styled.div`
	position: relative;
	top: 150px;
	height: 100%;
`;

const ImageTopContainer = styled(PictureFrame)`
	position: absolute;
	transform: translateY(-166px) rotate(-5deg);
	width: 67%;
	left: -70px;
	height: 266px;
	@media (min-width: 540px) {
		transform: translateY(-77px) rotate(-2deg);
		left: 18%;
		width: 372px;
		height: 305px;
	}
`;

const FeatureImageContainer = styled(PictureFrame)`
	position: relative;
	width: 85%;
	height: 30vh;
	top: 81px;
	margin: 0 auto;
	@media (min-width: 540px) {
		position: absolute;
		width: 500px;
		height: 352px;
		transform: translateX(7%);
		top: 227px;
	}
`;

const ImageBottomContainer = styled(PictureFrame)`
	position: absolute;
	width: 222px;
	height: 271px;
	transform: translateY(110px) rotate(7deg);
	right: 1%;
	top: -63px;
	@media (min-width: 540px) {
		width: 300px;
		height: 350px;
		transform: translateY(110px) rotate(0deg);
		right: 14%;
	}
`;

const ImageBottom = styled(BaseImage)`
	object-position: 0% 86%;
`;

export const ComingSoon = () => {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add(mediaBreakpoints, (context: any) => {
			const { reduceMotion, isDesktop } = context.conditions;
			if (!reduceMotion && isDesktop) {
				gsap.to('.image-top-container', {
					y: '-55px',
					ease: 'power4.easeIn',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: '-=35%',
						end: '+=50%',
						invalidateOnRefresh: true,
						fastScrollEnd: true,
					},
				});
				gsap.to('.image-feature-container', {
					x: '9%',
					ease: 'power4.easeIn',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: '-=35%',
						end: '+=50%',
						invalidateOnRefresh: true,
						fastScrollEnd: true,
					},
				});

				gsap.to('.image-bottom-container', {
					y: '146px',
					ease: 'power4.easeIn',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: '-=35%',
						end: '+=60%',
						invalidateOnRefresh: true,
						fastScrollEnd: true,
					},
				});

				gsap.to('.coming-soon-header', {
					y: '45%',
					ease: 'power4.easeIn',
					scrollTrigger: {
						// markers: true,
						scrub: 0.05,
						trigger: '.coming-soon-section',
						start: '-=20%',
						end: '+=70%',
						invalidateOnRefresh: true,
						fastScrollEnd: true,
					},
				});
			}
		});
		return () => mm.revert();
	}, []);
	return (
		<ComingSoonSection className="coming-soon-section">
			<Content>
				<h2 className="coming-soon-header">
					<span className="coming-to">coming to</span>
					<span className="lago">Lago</span>
					<span className="vista">Vista</span>
				</h2>
				<ImagesContainer>
					<div style={{ filter: 'drop-shadow(0px 2px 15px rgba(50, 50, 0, 0.5))' }}>
						<ImageTopContainer className="image-top-container">
							<BaseImage className="image-top" src={rollImage2} alt="Roll image" />
						</ImageTopContainer>
					</div>
					<div style={{ filter: 'drop-shadow(0px 2px 15px rgba(50, 50, 0, 0.5))' }}>
						<FeatureImageContainer className="image-feature-container">
							<BaseImage className="image-feature" src={featureImage} alt="Roll image" />
						</FeatureImageContainer>
					</div>
					<div style={{ filter: 'drop-shadow(0px 2px 15px rgba(50, 50, 0, 0.5))' }}>
						<ImageBottomContainer className="image-bottom-container">
							<ImageBottom className="image-bottom" src={rollImage4} alt="Roll image" />
						</ImageBottomContainer>
					</div>
				</ImagesContainer>
			</Content>
		</ComingSoonSection>
	);
};
