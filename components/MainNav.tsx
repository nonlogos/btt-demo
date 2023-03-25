import styled from 'styled-components';
import { ActiveLink } from './ActiveLink';
import { Home, Info, List, LocalPhone, AddCircle } from '@mui/icons-material';

export const mainNavList = [
	{ url: '/', name: 'home', icon: Home },
	{ url: '/about', name: 'about', icon: Info },
	{ url: '/programs', name: 'programs', icon: List },
	{ url: '/contact', name: 'contact', icon: LocalPhone },
	{ url: '#', name: 'sign Up', icon: AddCircle },
];

const StyledLi = styled.li`
	text-transform: capitalize;
`;
export const MainNav = (
	<nav>
		<ul>
			{mainNavList.map(({ url, name }) => (
				<StyledLi key={name}>
					<ActiveLink url={url} linkName={name} />
				</StyledLi>
			))}
		</ul>
	</nav>
);
