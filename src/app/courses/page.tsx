'use client';

import Link from 'next/link';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import CoursesService from '@/services/Course.service';

async function getCourseData() {
	try {
		const { data: response } = await axios.get(
			`${process.env.DATABASE_URL}/courses`
		);
		return response;
	} catch {}
}

export default function Course() {
	// const data = await getCourseData();

	const { isLoading, data, isSuccess } = useQuery({
		queryKey: ['Course'],
		queryFn: () => CoursesService.getAll(),
		select: ({ data }) => data,
	});

	console.table(data);

	return (
		<>
			<div className="flex gap-5 flex-row flex-wrap justify-center lg:px-28">
				{/*TODO:PRELOADER*/}

				{isLoading ? (
					<h1>Data loading...</h1>
				) : isSuccess ? (
					data.map((course) => (
						<Card key={course.id} className="w-80 min-w-fit shadow-md">
							<Link href={`/courses/${course.id}`}>
								<CardHeader>
									<CardTitle>{course.name}</CardTitle>
									<CardDescription>{course.info}</CardDescription>
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
