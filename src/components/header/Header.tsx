import Link from 'next/link';
import { DarkModeToggle } from './DarkModeToggle';
import { Login } from './Login';
import NavBar from './navigation/NavBar';

// const NavBar = dynamic(() => import('./Navigation/NavBar'), { ssr: false });

function Header() {
	return (
		<header className="w-full p-1.5 z-50 mb-4 py-3 sticky top-0 shadow-mg backdrop-filter backdrop-blur bg-opacity-50 flex justify-around border-b ">
			<Link
				href="/"
				className="self-center px-4 text-xl text-neutral-900 font-bold dark:text-white">
				LOGO
			</Link>
			<NavBar />
			<span>
				<Login />
				<DarkModeToggle />
			</span>
		</header>
	);
}

export default Header;
