import Link from 'next/link';
import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
	return (
		<footer className="w-full h-20 max-md:mb-20 py-4 px-6 absolute bottom-0 left-0 border-t-2 flex text-sm font-semibold justify-evenly items-center bg-neutral-100 dark:bg-neutral-950 z-40">
			<div className="max-md:hidden">
				StudMark&copy;
				<br /> All rights reserved
			</div>
			<div className="flex justify-around ">
				<Button variant="link" asChild>
					<Link href="#">Contact</Link>
				</Button>
				<Button variant="link" asChild>
					<Link href="#">About</Link>
				</Button>
				<Button variant="link" asChild>
					<Link href="#">Terms</Link>
				</Button>
			</div>
			<div className="flex justify-around md:w-1/4 w-1/3">
				<Link href="#">
					<Linkedin />
				</Link>
				<Link href="#">
					<Facebook />
				</Link>
				<Link href="#">
					<Instagram />
				</Link>
				<Link href="#">
					<Twitter />
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
