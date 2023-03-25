import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { Box, header, TextItalic } from '../';
import { Testimonial } from './Testimonial';

const SliderContainer = styled.div`
	height: 100dvh;
	min-height: 25rem;
	text-align: center;
	@media (min-width: 707px) {
		height: 70dvh !important;
	}
	/* hack to override slider styles from react-awesome-slider  */
	& .awssld--organic-arrows {
		--content-background-color: var(--bkgd-section-color);
		height: 100%;
	}
	& .awssld__content {
		/* display: block; */
	}
`;

export const Testimonials = () => {
	return (
		<SliderContainer>
			<AwesomeSlider>
				<div className="content">
					<Testimonial title="Isreal is AWESOME" author="Cindy Suzuki" rank="White Belt">
						<TextItalic>
							I love BTT for so many reasons. It's family-friendly, great for beginners with no experience, and led by
							talented, down-to-earth instructors.
						</TextItalic>
						<TextItalic>
							Israel gives incredible instruction, but he's also one of the funniest, nicest guys you'll meet. He
							attracts like-minded people who are all super supportive and have desire to grow and get better together.
						</TextItalic>
					</Testimonial>
				</div>
				<div>
					<Testimonial title="Isreal is more AWESOME" author="Cindy Suzuki" rank="White Belt">
						<TextItalic>
							I love BTT for so many reasons. It's family-friendly, great for beginners with no experience, and led by
							talented, down-to-earth instructors.
						</TextItalic>
						<TextItalic>
							Israel gives incredible instruction, but he's also one of the funniest, nicest guys you'll meet. He
							attracts like-minded people who are all super supportive and have desire to grow and get better together.
						</TextItalic>
					</Testimonial>
				</div>
			</AwesomeSlider>
		</SliderContainer>
	);
};
