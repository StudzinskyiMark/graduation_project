import Link from 'next/link';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';
import { options } from '@/app/api/auth/[...nextauth]/authOptions';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getServerSession } from 'next-auth';

export async function Login() {
	const session = await getServerSession(options);

	return (
		<>
			{session ? (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className="md:mx-4 mx-2 px-0 md:pl-4 px-1 select-none">
							<span className="max-md:hidden">{session.user?.name}</span>
							<Avatar className="h-8 w-8 md:ml-4 rounded-sm">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback className="rounded-sm bg-indigo-200">
									MS
								</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="mt-3 w-48 max-md:mr-2">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<Link href="/1/profile">Profile</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<Link href="/1/grades">Grades</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>Calendar</DropdownMenuItem>

						<DropdownMenuSeparator />
						<DropdownMenuItem asChild className="text-red-600 ">
							<Link href="/api/auth/signout">Log out</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<Button className="md:mx-4 mx-2" asChild>
					<Link href="signIn">
						<Mail className="md:mr-4 h-5 w-5" />
						<span className="max-md:hidden">Sign In</span>
					</Link>
				</Button>
			)}
		</>
	);
}
