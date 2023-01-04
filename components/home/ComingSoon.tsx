import { useEffect, MutableRefObject } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import featureImage from '../../public/row_feature.jpg';
import rollImage2 from '../../public/row_1.jpg';
import rollImage4 from '../../public/roll_4.jpg';
import { BaseSection, BaseImage, PictureFrame } from '../../styles/globals';

const ComingSoonSection = styled(BaseSection)`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 10;
	transform: translateY(0);
	height: clamp(30rem, 160vh, 1240px);
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
		opacity: 0.1;
	}
	& h2 {
		position: absolute;
		display: flex;
		flex-direction: column;
		height: 100%;
		transform: translateY(50%);
		left: 36%;
		font-size: 166px;
		font-weight: 900;
		line-height: 130px;
		& .coming-to {
			font-size: 56px;
			line-height: 75px;
		}
		& .lago {
			letter-spacing: -0.5px;
			text-transform: uppercase;
		}
		& .vista {
			letter-spacing: 0.5px;
			text-transform: uppercase;
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
	transform: translateY(-77px);
	left: 18%;
	width: 372px;
	height: 305px;
`;

const ImageTop = styled(BaseImage)`
	object-position: 52% 0%;
	/* scale: 1.1; */
`;

const FeatureImageContainer = styled(PictureFrame)`
	position: absolute;
	width: 500px;
	height: 352px;
	transform: translateX(7%);
	top: 227px;
	will-change: transform;
`;

const ImageFeature = styled(BaseImage)`
	object-position: 125% 0%;
	/* scale: 1.2; */
`;

const ImageBottomContainer = styled(PictureFrame)`
	position: absolute;
	width: 300px;
	height: 350px;
	transform: translateY(110px);
	right: 14%;
`;

const ImageBottom = styled(BaseImage)`
	object-position: 0% 86%;
`;

export const ComingSoon = ({ video }: { video: MutableRefObject<HTMLVideoElement | null> }) => {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(min-width: 800px)', () => {
			gsap.to('.coming-soon-section', {
				y: '0%',
				scrollTrigger: {
					// markers: true,
					scrub: true,
					trigger: '.coming-soon-section',
					start: '-=40%',
					end: '+=60%',
					onToggle: (self) => (self.isActive ? video.current?.pause() : video.current?.play()),
				},
			});
			gsap.to('.image-top-container', {
				y: '-55px',
				ease: 'power4.easeIn',
				scrollTrigger: {
					// markers: true,
					scrub: 0.05,
					trigger: '.coming-soon-section',
					start: '-=30%',
					end: '+=30%',
					invalidateOnRefresh: true,
					// fastScrollEnd: true,
				},
			});
			gsap.to('.image-feature-container', {
				x: '9%',
				ease: 'power4.easeIn',
				scrollTrigger: {
					// markers: true,
					scrub: 0.05,
					trigger: '.coming-soon-section',
					start: '-=30%',
					end: '+=30%',
					invalidateOnRefresh: true,
					// fastScrollEnd: true,
				},
			});

			gsap.to('.image-feature', {
				objectPosition: '95% 0%',
				ease: 'power4.easeIn',
				overwrite: 'auto',
				scrollTrigger: {
					// markers: true,
					scrub: 0.05,
					trigger: '.coming-soon-section',
					start: '-=30%',
					end: '+=30%',
					invalidateOnRefresh: true,
					// fastScrollEnd: true,
				},
			});
			gsap.to('.image-bottom-container', {
				y: '146px',
				ease: 'power4.easeIn',
				scrollTrigger: {
					// markers: true,
					scrub: 0.05,
					trigger: '.coming-soon-section',
					start: '-=30%',
					end: '+=20%',
					invalidateOnRefresh: true,
					// fastScrollEnd: true,
				},
			});

			gsap.to('.image-bottom', {
				objectPosition: '0% 0%',
				ease: 'power4.easeIn',
				overwrite: 'auto',
				scrollTrigger: {
					// markers: true,
					scrub: 0.05,
					trigger: '.coming-soon-section',
					start: '-=30%',
					end: '+=20%',
					invalidateOnRefresh: true,
					fastScrollEnd: true,
				},
			});
			gsap.to('.coming-soon-header', {
				y: '45.9%',
				ease: 'power4.easeIn',
				scrollTrigger: {
					// markers: true,
					scrub: 0.05,
					trigger: '.coming-soon-section',
					start: '-=20%',
					end: '+=30%',
					invalidateOnRefresh: true,
					// fastScrollEnd: true,
				},
			});
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
							<ImageTop className="image-top" src={rollImage2} alt="Roll image" />
						</ImageTopContainer>
					</div>
					<div style={{ filter: 'drop-shadow(0px 2px 15px rgba(50, 50, 0, 0.5))' }}>
						<FeatureImageContainer className="image-feature-container">
							<ImageFeature className="image-feature" src={featureImage} alt="Row image" />
						</FeatureImageContainer>
					</div>
					<div style={{ filter: 'drop-shadow(0px 2px 15px rgba(50, 50, 0, 0.5))' }}>
						<ImageBottomContainer className="image-bottom-container">
							<ImageBottom className="image-bottom" src={rollImage4} alt="Row image" />
						</ImageBottomContainer>
					</div>
				</ImagesContainer>
			</Content>
		</ComingSoonSection>
	);
};
