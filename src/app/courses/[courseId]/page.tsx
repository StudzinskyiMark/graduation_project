'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useQueryCourseById } from '@/hooks/useQueryCourse';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CourseId({ params }: { params: { courseId: string } }) {
	const pathName = usePathname();
	const { isLoading, data } = useQueryCourseById(params.courseId);
	return (
		<>
			{isLoading ? (
				<Skeleton className="w-64 h-8 rounded-full mx-auto mb-12" />
			) : (
				<div className="text-center text-2xl font-semibold mb-12">
					{data?.title}
				</div>
			)}
			<div className="flex gap-5 flex-row flex-wrap justify-center lg:px-28">
				<Card className="w-80">
					<Link href={`${pathName}/lectures`}>
						<CardHeader>
							<CardTitle className="text-center">Lectures</CardTitle>
						</CardHeader>
					</Link>
				</Card>
				<Card className="w-80">
					<Link href={`${pathName}/tasks`}>
						<CardHeader>
							<CardTitle className="text-center">Tasks</CardTitle>
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
