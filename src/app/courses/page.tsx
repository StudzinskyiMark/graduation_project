'use client';

import Link from 'next/link';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useQueryCourseList } from '@/hooks/useQueryCourse';

export default function Course() {
	const { isLoading, data, isSuccess } = useQueryCourseList();

	return (
		<>
			<div className="flex gap-5 flex-row flex-wrap justify-center lg:px-32 px-2 ">
				{isLoading ? (
					<>
						<Card className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
							<CardHeader>
								<CardTitle>
									<Skeleton className="w-full h-7 rounded-full" />
								</CardTitle>
								<div className=" pt-2 text-ellipsis overflow-hidden whitespace-nowrap space-y-1">
									<Skeleton className="w-full h-3 rounded-full" />
									<Skeleton className="w-full h-3 rounded-full" />
								</div>
							</CardHeader>
						</Card>
						<Card className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
							<CardHeader>
								<CardTitle>
									<Skeleton className="w-full h-7 rounded-full" />
								</CardTitle>
								<div className=" pt-2 text-ellipsis overflow-hidden whitespace-nowrap space-y-1">
									<Skeleton className="w-full h-3 rounded-full" />
									<Skeleton className="w-full h-3 rounded-full" />
								</div>
							</CardHeader>
						</Card>
						<Card className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
							<CardHeader>
								<CardTitle>
									<Skeleton className="w-full h-7 rounded-full" />
								</CardTitle>
								<div className=" pt-2 text-ellipsis overflow-hidden whitespace-nowrap space-y-1">
									<Skeleton className="w-full h-3 rounded-full" />
									<Skeleton className="w-full h-3 rounded-full" />
								</div>
							</CardHeader>
						</Card>
						<Card className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
							<CardHeader>
								<CardTitle>
									<Skeleton className="w-full h-7 rounded-full" />
								</CardTitle>
								<div className=" pt-2 text-ellipsis overflow-hidden whitespace-nowrap space-y-1">
									<Skeleton className="w-full h-3 rounded-full" />
									<Skeleton className="w-full h-3 rounded-full" />
								</div>
							</CardHeader>
						</Card>
						<Card className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
							<CardHeader>
								<CardTitle>
									<Skeleton className="w-full h-7 rounded-full" />
								</CardTitle>
								<div className=" pt-2 text-ellipsis overflow-hidden whitespace-nowrap space-y-1">
									<Skeleton className="w-full h-3 rounded-full" />
									<Skeleton className="w-full h-3 rounded-full" />
								</div>
							</CardHeader>
						</Card>
					</>
				) : isSuccess ? (
					data?.map((course) => (
						<Card
							key={course.id}
							className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
							<Link href={`/courses/${course.id}`}>
								<CardHeader>
									<CardTitle className="text-ellipsis overflow-hidden whitespace-nowrap">
										{course.title || (
											<Skeleton className="w-full h-7 rounded-full" />
										)}
									</CardTitle>
									<CardDescription className="text-ellipsis overflow-hidden whitespace-nowrap">
										{course.info}
									</CardDescription>
								</CardHeader>
							</Link>
						</Card>
					))
				) : (
					<>
						<h1>Data not found!</h1>
						<div> </div>
					</>
				)}
			</div>
		</>
	);
}
