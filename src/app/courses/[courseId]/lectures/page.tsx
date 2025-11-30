'use client';

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useQueryLectureListByCourseId } from '@/hooks/useQueryLecture';
import Link from 'next/link';

function Lectures({ params }: { params: { courseId: string } }) {
	const { isLoading, data } = useQueryLectureListByCourseId(params.courseId);

	return (
		<>
			<div className="flex gap-5 flex-row flex-wrap justify-center lg:px-32 px-2">
				{isLoading ? (
					<>Loading lectures...</>
				) : data?.length ? (
					data?.map((lecture) => (
						<Card
							key={lecture.id}
							className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
							<Link
								href={`/courses/${params.courseId}/lectures/${lecture.id}`}>
								<CardHeader>
									<CardTitle>{lecture.title}</CardTitle>
									<CardDescription className="text-ellipsis overflow-hidden whitespace-nowrap">
										{lecture.info}
									</CardDescription>
								</CardHeader>
							</Link>
						</Card>
					))
				) : (
					<>
						<h1>Lecture for this course not found!</h1>
						<div> </div>
					</>
				)}
			</div>
		</>
	);
}

export default Lectures;
