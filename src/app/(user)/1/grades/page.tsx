import React from 'react';
import { options } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

const Subjects = [
	{
		subject: 'Software Engineering',
		grade: '25.5',
	},
	{
		subject: 'Database Management Systems',
		grade: '15.8',
	},
	{
		subject: 'Web Development',
		grade: '50.0',
	},
	{
		subject: 'Cloud Computing',
		grade: '40.7',
	},
	{
		subject: 'Big Data Analytics',
		grade: '55.0',
	},
	{
		subject: 'Mobile Application Development',
		grade: '20.5',
	},
];

async function userGrades() {
	const session = await getServerSession(options);

	return (
		<div className="container p-4 bg-white dark:bg-neutral-900 rounded-lg md:w-2/3 w-full drop-shadow-lg">
			<header className="w-full mb-4">
				<Avatar className="h-16 w-16 rounded-full mx-auto ">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback className="rounded-sm bg-indigo-200">
						MS
					</AvatarFallback>
				</Avatar>
				<div className="mt-2 text-center text-xl font-semibold">
					{session?.user?.name}
				</div>
			</header>
			<main>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="">Subjects</TableHead>
							<TableHead className="text-center">Grades</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Subjects.map((invoice) => (
							<TableRow key={invoice.subject} className="">
								<TableCell className="font-medium">
									{invoice.subject}
								</TableCell>
								<TableCell className="text-center">
									{invoice.grade}/100
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</main>
		</div>
	);
}

export default userGrades;
