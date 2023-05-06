import styled from 'styled-components';
import { NewsBanner } from '../NewsBanner';
import { MainHeader } from '../MainHeader';
import { Footer } from '../Footer';
import { MobileNavBar } from '../MobileNavBar';
import { homeText } from '../../siteContent';
import { useIsMobile } from '../../hooks';
const {
	newsBanner,
	heroBanner: { title, bodyText, buttonOne, buttonTwo, disclaimer },
	taglineBanner: { title: taglineTitle, bodyText: taglineBodyText },
} = homeText;

const Main = styled.main`
	display: grid;
	grid-template-columns: 1fr;
`;

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
	const isMobile = useIsMobile();
	return (
		<>
			<Main>
				<NewsBanner content={newsBanner} />
				{!isMobile && <MainHeader />}
				{children}
			</Main>
			<Footer />
			{isMobile && <MobileNavBar />}
		</>
	);
};
