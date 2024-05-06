'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

function Quizzes() {
	const pathName = usePathname();

	return (
		<>
			<div className="flex gap-5 flex-row flex-wrap justify-center lg:px-28">
				<Card className="w-80">
					<Link href={`${pathName}/lectures`}>
						<CardHeader>
							<CardTitle className="text-center">Lectures</CardTitle>
						</CardHeader>
					</Link>
				</Card>
				<Card className="w-80">
					<Link href={`${pathName}/quizzes`}>
						<CardHeader>
							<CardTitle className="text-center">Quizzes</CardTitle>
						</CardHeader>
					</Link>
				</Card>
				<Card className="w-80">
					<Link href={`${pathName}/tests`}>
						<CardHeader>
							<CardTitle className="text-center">Tests</CardTitle>
						</CardHeader>
					</Link>
				</Card>
				<Card className="w-80">
					<Link href={`${pathName}/exams`}>
						<CardHeader>
							<CardTitle className="text-center">Exams</CardTitle>
						</CardHeader>
					</Link>
				</Card>
			</div>
		</>
	);
}

export default Quizzes;
