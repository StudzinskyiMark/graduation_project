import { keepPreviousData, useQuery } from '@tanstack/react-query';
import CoursesService from '@/services/Course.service';
import { CourseKEY } from '@/constanta/QueryConst';

export const useQueryCourseList = () => {
	return useQuery({
		queryKey: [CourseKEY],
		queryFn: () => CoursesService.getAll(),
		select: ({ data }) => data,
		placeholderData: keepPreviousData,
	});
};

export const useQueryCourseById = (CourseId: string) => {
	return useQuery({
		queryKey: [CourseKEY, CourseId],
		queryFn: () => CoursesService.getById(CourseId),
		select: ({ data }) => data,
	});
};
