'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

type ClassProp = {
	className?: string;
};

export default function SignOut(props: ClassProp) {
	return (
		<div
			className={`absolute top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 border py-8 rounded-lg bg-white dark:bg-black md:max-w-lg md:w-3/5 lg:w-2/5 max-md:content-center max-md:mt-20 max-md:h-lvh max-md:w-full max-md:flex-col space-y-10 ${props.className}`}>
			<div className="font-medium text-xl text-center">
				Are you leaving already?
				<div className="text-sm mt-2">Are you sure?</div>
			</div>
			<div className="px-24">
				<Button
					className="w-full"
					onClick={() => signOut({ callbackUrl: '/' })}
					variant="destructive">
					Sign Out
				</Button>
			</div>
		</div>
	);
}
