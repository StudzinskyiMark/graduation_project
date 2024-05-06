import SearchInCourses from '@/components/courses/SearchInCourses';
import TanStackProvider from '@/providers/TanStackProvider';

export default function CourseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SearchInCourses />

			{children}
		</>
	);
}
