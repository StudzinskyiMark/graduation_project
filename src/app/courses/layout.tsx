import CourseNavBar from '@/components/courses/CourseNavBar';
import SearchInCourses from '@/components/courses/SearchInCourses';

export default function CourseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<CourseNavBar>
				<SearchInCourses />
				{children}
			</CourseNavBar>
		</>
	);
}
