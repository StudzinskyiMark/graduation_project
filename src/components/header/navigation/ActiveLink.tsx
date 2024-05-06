'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const ActiveLink = ({
	children,
	size,
	...rest
}: { children: React.ReactNode } & LinkProps & { size: any }) => {
	const { href } = rest;
	const pathName = usePathname();

	const isActive = '/' + pathName.split('/')[1] === href;
	return (
		<Button asChild size={size} variant={isActive ? 'default' : 'ghost'}>
			<Link {...rest}>{children}</Link>
		</Button>
	);
};

export default ActiveLink;
