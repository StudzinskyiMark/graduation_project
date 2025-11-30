'use client';

import { useQueryLectureListByCourseId } from '@/hooks/useQueryLecture';
import { useRouter } from 'next/navigation';

export default function ListInCourse({
	props,
}: {
	props: {
		ListType: 'lectures' | 'exams' | 'tests' | 'tasks';
		CourseId: number | string;
	};
}) {
	const router = useRouter();

	if (props.ListType === 'lectures') {
		const { data, isSuccess } = useQueryLectureListByCourseId(props.CourseId);
		return (
			<ul>
				{isSuccess ? (
					<>
						{data.map((data) => {
							return (
								<button
									className="w-full"
									onClick={() =>
										router.push(
											`/courses/${props.CourseId}/${props.ListType}/${data.id}`
										)
									}>
									<li className="hover:underline bg-opacity-10 text-left hover:bg-neutral-100 hover:dark:bg-neutral-800 bg-opacity-30 px-6 py-2 rounded-md text-ellipsis overflow-hidden whitespace-nowrap">
										{data.title}
									</li>
								</button>
							);
						})}
					</>
				) : (
					<h1>lecture not found</h1>
				)}
			</ul>
		);
	}
}
