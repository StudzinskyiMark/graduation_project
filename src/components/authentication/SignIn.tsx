'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';
import { Separator } from '../ui/separator';
import { useToast } from '@/components/ui/use-toast';

type ClassProp = {
	className?: string;
	callbackUrl?: string;
};

export default function SignIn(props: ClassProp) {
	const userName = useRef('');
	const userPassword = useRef('');
	const { toast } = useToast();

	const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await signIn('credentials', {
			username: userName.current,
			password: userPassword.current,
			redirect: true,
			callbackUrl: props.callbackUrl ?? '/courses',
		});
		toast({
			title: 'Oh! Something went wrong.',
			description: 'There was a problem with sign in',
		});
	};

	const onSignInGoogle = async () => {
		await signIn('google', {
			redirect: true,
			callbackUrl: props.callbackUrl ?? '/courses',
		});
	};

	return (
		<div
			className={`absolute top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 border pt-8 rounded-lg bg-white dark:bg-neutral-950 md:max-w-lg md:w-3/5 lg:w-2/5 max-md:content-center max-md:mt-20 max-md:h-lvh max-md:w-full max-md:flex-col ${props.className}`}>
			<div className="font-medium text-xl text-center">Let's Sign In!</div>
			<form
				onSubmit={onSignIn}
				className="w-full py-6 px-16 max-md:px-10 space-y-6">
				<div>
					<Label htmlFor="email">Login</Label>
					<Input
						className="mt-1"
						type="text"
						id="text"
						placeholder="Enter login"
						onChange={(e) => (userName.current = e.target.value)}
					/>
				</div>
				<div>
					<Label htmlFor="password">Password</Label>
					<Input
						className="mt-1 "
						type="password"
						id="password"
						placeholder="Enter password"
						onChange={(e) => (userPassword.current = e.target.value)}
					/>
				</div>
				<div className="space-x-4 flex items-center justify-center">
					<Button
						type="submit"
						className="w-full"
						onClick={() => {
							toast({
								title: 'Oh! Something went wrong.',
								description: 'There was a problem with sign in',
							});
						}}>
						Sign In
					</Button>
				</div>
				<Separator />
				<Button
					variant="outline"
					onClick={onSignInGoogle}
					className="w-full">
					<svg
						className="block w-5 h-5 mr-2"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48">
						<path
							fill="#EA4335"
							d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
						<path
							fill="#4285F4"
							d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
						<path
							fill="#FBBC05"
							d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
						<path
							fill="#34A853"
							d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
						<path fill="none" d="M0 0h48v48H0z"></path>
					</svg>
					Sign in with Google
				</Button>
			</form>
		</div>
	);
}
