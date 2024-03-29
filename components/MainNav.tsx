import styled from 'styled-components';
import { Home, Info, List, LocalPhone, CalendarToday } from '@mui/icons-material';
import { ActiveLink } from './ActiveLink';
import { SIGN_UP_URL } from '../siteContent';

export const mainNavList = [
	{ url: '/', name: 'home', icon: Home },
	{ url: '/about', name: 'about', icon: Info },
	{ url: '/programs', name: 'programs', icon: List },
	{ url: '/contact', name: 'contact', icon: LocalPhone },
	{ url: '/schedules', name: 'schedules', icon: CalendarToday },
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
