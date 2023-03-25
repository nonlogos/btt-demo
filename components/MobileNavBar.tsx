import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { mainNavList } from './MainNav';

const StyledPaper = styled(Paper)`
	z-index: 100;
	& .css-imwso6-MuiBottomNavigationAction-label.Mui-selected {
		line-height: 14px;
		text-transform: capitalize;
	}
	& .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root {
		min-width: 74px;
	}
`;

export const MobileNavBar = () => {
	const { pathname } = useRouter();
	const currentPath = pathname.replace('/', '') || 'home';
	// set initial active state
	const [value, setValue] = useState(currentPath);

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<StyledPaper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation value={value} onChange={handleChange}>
				{mainNavList.map(({ url, name, icon }) => {
					const Icon = icon;
					return (
						<BottomNavigationAction key={name} icon={<Icon />} value={name} label={name} component={Link} href={url} />
					);
				})}
			</BottomNavigation>
		</StyledPaper>
	);
};
