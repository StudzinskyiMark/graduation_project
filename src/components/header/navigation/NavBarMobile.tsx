import ActiveLink from './ActiveLink';
import NavLinks from '@/actions/navigation-links';

function NavBarMobile() {
	// const isMobile = useMediaQuery('(max-width : 768px)');

	return (
		<>
			<nav className="fixed left-0 bottom-0 bg-white dark:bg-neutral-950  border-t-2 rounded-md w-full h-20 z-10 p-1.5 flex justify-evenly px-16 pb-8 pt-3 md:hidden">
				{NavLinks.map((link) => {
					// console.log(link.icon);
					return (
						<ActiveLink href={link.href} size="icon" key={link.name}>
							<link.icon />
						</ActiveLink>
					);
				})}
			</nav>
		</>
	);
}

export default NavBarMobile;
