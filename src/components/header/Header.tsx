import Link from 'next/link';
import { DarkModeToggle } from './DarkModeToggle';
import { Login } from './Login';
import NavBar from './navigation/NavBar';
import { NotificationToggle } from './NotificationToggle';

// const NavBar = dynamic(() => import('./Navigation/NavBar'), { ssr: false });

function Header() {
	return (
		<header className="w-full p-1.5 z-50 py-3 sticky top-0 shadow-mg  backdrop-blur-lg flex justify-around max-md:justify-between border-b bg-white dark:bg-neutral-950 bg-opacity-65 dark:bg-opacity-60">
			<Link
				href="/"
				className="self-center px-4 text-xl text-neutral-900 font-bold dark:text-white">
				StudMark
			</Link>
			<NavBar />
			<div className="flex items-center justify-evenly mx-2">
				<DarkModeToggle />
				<Login />
				<NotificationToggle />
			</div>
		</header>
	);
}

export default Header;
