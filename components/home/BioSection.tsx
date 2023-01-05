import { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { mediaBreakpoints } from '../../utils/animation/matchMedia';
import { BaseSection } from '../../styles/globals';
import bioImage from '../../public/bio.jpg';

const Container = styled(BaseSection)`
	position: relative;
	display: grid;
	width: 100%;
	height: auto;
	grid-template-columns: 1fr;
	background: white;
	margin-top: 200vmin;
	overflow: hidden;
	@media (max-width: 860px) {
		margin-top: 400vmin;
	}
	@media (min-width: 1010px) {
		grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
	}
`;

const BioImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const BioContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	padding: 2rem 4rem 2rem 2rem;
	& .content {
		opacity: 0;
		transform: translateY(200%);
	}
	& h2 {
		margin: 0;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		& .meet-professor {
			font-size: 40%;
			text-transform: uppercase;
			line-height: 180%;
		}
		& .isreal-davila {
			padding-bottom: 20px;
		}
	}
`;

export const BioSection = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add(mediaBreakpoints, (context: any) => {
			const { reduceMotion } = context.conditions;
			if (!reduceMotion) {
				gsap.to('.content', {
					y: 0,
					stagger: 0.1,
					ease: 'power3.Out',
					scrollTrigger: {
						markers: true,
						scrub: 0.05,
						trigger: '.bio-section',
						start: '-=80%',
						end: '+=50%',
						fastScrollEnd: true,
					},
				});
				gsap.to('.content', {
					autoAlpha: 1,
					stagger: 0.1,
					ease: 'power3.Out',
					scrollTrigger: {
						markers: true,
						scrub: 0.05,
						trigger: '.bio-section',
						start: '-=70%',
						end: '+=50%',
						fastScrollEnd: true,
					},
				});
			} else {
				gsap.to('.content', {
					y: 0,
					duration: 0,
				});
				gsap.to('.content', {
					autoAlpha: 1,
					duration: 0,
				});
			}
		});

		return () => {
			mm.revert();
			ScrollTrigger.refresh();
		};
	}, []);
	return (
		<Container className="bio-section">
			<BioImage src={bioImage} alt="Professor Israel Davila" placeholder="blur" className="bio-image" />
			<BioContent>
				<h2 className="content">
					<span className="meet-professor">Meet Professor</span>
					<span className="isreal-davila">Israel Davila</span>
				</h2>
				<div className="content">
					<p>
						Owner and instructor of Brazilian Top Team Lago Vista. With over a decade of BJJ training under his belt,
						Israel is a formidable force on the mat. He's been with the Brazilian Top Team family since 2016, and his
						skills as an IBJJF competitor and multiple-time IBJJF champion speak for themselves.
					</p>
					<p>
						Israel is also known as one of the most friendly and constructive instructors you’ll ever work with. From
						kids to adult belts of all colors, Israel has a way with people that will leave you feeling heard and
						respected while sharing more than a few good laughs.
					</p>
				</div>
			</BioContent>
		</Container>
	);
};
