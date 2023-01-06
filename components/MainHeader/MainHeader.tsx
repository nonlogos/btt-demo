import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

import logoBannerImage from '../../public/logo_banner_sm.svg';

const Header = styled.header`
	background: black;
	width: 100%;
	height: clamp(2rem, 10vmin, 87px);
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	padding: 0.5rem;
	transform: translateX(-4px);
	position: fixed;
	z-index: 100;
	transform: translateY(-500px);
	opacity: 0;
	@media (min-width: 800px) {
		height: clamp(2rem, 6.3vmin, 87px);
		transform: translateY(-500px);
		opacity: 0;
	}
`;

const LogoBannerImage = styled(Image)`
	width: auto;
	height: 100%;
	object-position: left;
`;

export const MainHeader = () => {
	const header = useRef<HTMLDivElement | null>(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.main-nav', {
				y: 0,
				autoAlpha: 1,
				duration: 0.2,
				ease: 'power3.out',
				scrollTrigger: {
					// markers: true,
					trigger: '.hero-bkgd',
					start: '+=1%',
					end: '+=10%',
					toggleActions: 'play none none reverse',
				},
			});
		});
		return () => ctx.revert();
	}, []);
	return (
		<Header className="main-nav" ref={header}>
			<div style={{ position: 'relative', height: '100%', width: '100%' }}>
				<LogoBannerImage src={logoBannerImage} alt="BTT Lago Vista logo banner" layout="fill" objectFit="contain" />
			</div>
		</Header>
	);
};
