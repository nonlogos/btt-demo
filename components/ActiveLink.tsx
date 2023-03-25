import Link from 'next/link';
import { useRouter } from 'next/router';

export const ActiveLink = ({ url, linkName }: { url: string; linkName: string }) => {
	const { pathname } = useRouter();
	return (
		<Link href={url} className={pathname === url ? 'nav-link-active' : ''}>
			{linkName}
		</Link>
	);
};
