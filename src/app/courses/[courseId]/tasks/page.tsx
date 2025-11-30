import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';

function Tasks({ params }: { params: { courseId: string } }) {
	return (
		<div className="flex gap-5 flex-row flex-wrap justify-center lg:px-32 px-2">
			<Card
				key={''}
				className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
				<Link href={`/courses/${params.courseId}/tasks/${1}`}>
					<CardHeader>
						<CardTitle>Task 1</CardTitle>
						<CardDescription className="text-ellipsis overflow-hidden whitespace-nowrap">
							Info about task 1
						</CardDescription>
					</CardHeader>
				</Link>
			</Card>
			<Card
				key={''}
				className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
				<Link href={`/courses/${params.courseId}/tasks/${2}`}>
					<CardHeader>
						<CardTitle>Task 2</CardTitle>
						<CardDescription className="text-ellipsis overflow-hidden whitespace-nowrap">
							Info about task 2
						</CardDescription>
					</CardHeader>
				</Link>
			</Card>
			<Card
				key={''}
				className="max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
				<Link href={`/courses/${params.courseId}/tasks/${3}`}>
					<CardHeader>
						<CardTitle>Task 3</CardTitle>
						<CardDescription className="text-ellipsis overflow-hidden whitespace-nowrap">
							Info about task 3
						</CardDescription>
					</CardHeader>
				</Link>
			</Card>
		</div>
	);
}

export default Tasks;
