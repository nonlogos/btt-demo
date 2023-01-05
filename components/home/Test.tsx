import styled from 'styled-components';
import Image from 'next/image';

import { BaseSection } from '../../styles/globals';
import logoBannerImage from '../../public/logo_banner_sm.svg';
import featureImage from '../../public/roll_feature.jpg';

const Container = styled(BaseSection)`
	height: calc(clamp(10rem, 90vmin, 60rem) + 10vmin);
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 1;
	background-color: white;
	/* clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%); */
	&:after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(red, transparent), linear-gradient(to top left, lime, transparent),
			linear-gradient(to top right, blue, transparent), url('/roll_feature.jpg'), url('/roll_feature.jpg');
		background-size: cover;
		background-blend-mode: screen, hue, lighten;
		background-position: 50% 50%;
		opacity: 0.1;
	}
`;

const Content = styled.div`
	position: relative;
	z-index: 3;
	margin-top: 20vmin;
	height: 100%;
	width: 411px;
`;

const LogoContainer = styled.div`
	position: absolute;
	z-index: 4;
	top: 41px;
	left: 167px;
	width: 223px;
	height: 60px;
	border: 10px solid black;
	background: black;
	&:before {
		content: ' ';
		background: black;
		position: absolute;
		top: -27px;
		left: -44px;
		height: 240%;
		width: 145%;
		transform: skew(-38deg);
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
	--size: 126.24px;
	position: relative;
	z-index: 3;
	margin: 0;
	font-size: var(--size);
	line-height: var(--size);
	text-align: justify;
	font-weight: 600;
	letter-spacing: -2.1px;
`;

const BTTSVGTop = styled.svg`
	position: absolute;
	top: 64%;
	left: 134px;
	width: auto;
	height: 155px;
`;

const BTTText = styled.text`
	fill: none;
	stroke: black;
	stroke-width: 1.5px;
	stroke-linejoin: round;
	animation: 2s pulsate infinite;
	@keyframes pulsate {
		50% {
			stroke-width: 2.5px;
		}
	}
`;
const BTTSVGBottom = styled(BTTSVGTop)`
	top: 101%;
	width: auto;
	height: 160px;
`;

const BkgdPatternTop = styled.div`
	position: absolute;
	/* z-index: 2; */
	top: 43px;
	left: 28px;
	height: 90px;
	width: 219px;
	transform: skewX(63deg) rotate(14deg);
	background-color: #e5e5f7;
	opacity: 0.5;
	background-image: linear-gradient(to right, #444cf7, #444cf7 6px, #e5e5f7 6px, var(--bkgd-color));
	background-size: 11px 100%;
`;

const BkgdPatternMiddle = styled.div`
	position: absolute;
	z-index: 2;
	top: 78px;
	left: 28px;
	height: 90px;
	width: 219px;
	transform: skewX(63deg);
	background-color: #e5e5f7;
	opacity: 0.3;
	background-image: linear-gradient(to right, #444cf7, #444cf7 6px, #e5e5f7 6px, var(--bkgd-color));
	background-size: 11px 100%;
`;

export const Test = () => {
	return (
		<Container className="coming-soon-section">
			<Content>
				<LogoContainer>
					<LogoBannerImage src={logoBannerImage} alt="BTT Lago Vista logo banner" layout="fill" objectFit="contain" />
				</LogoContainer>
				<Title>
					<span>is coming to</span>
					<span>
						<BTTSVGTop viewBox="0 0 600 130">
							<BTTText y="120" x="0">
								Lago
							</BTTText>
						</BTTSVGTop>
						<BTTSVGBottom viewBox="0 0 600 130">
							<BTTText y="125" x="0">
								Vista
							</BTTText>
						</BTTSVGBottom>
					</span>
				</Title>
				{/* <BkgdPatternTop /> */}
				{/* <BkgdPatternMiddle /> */}
			</Content>
		</Container>
	);
};
