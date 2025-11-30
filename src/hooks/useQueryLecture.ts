import { keepPreviousData, useQueries, useQuery } from '@tanstack/react-query';
import LectureService from '@/services/Lecture.service';
import { LectureKEY } from '@/constanta/QueryConst';

export const useQueryLectureList = () => {
	return useQuery({
		queryKey: [LectureKEY],
		queryFn: () => LectureService.getAll(),
		select: ({ data }) => data,
	});
};

export const useQueryLectureListByCourseId = (CourseId: string | number) => {
	return useQuery({
		queryKey: ['LectureByCourseId', CourseId],
		queryFn: () => LectureService.getAllByCourseId(CourseId),
		select: ({ data }) => data,
		enabled: !!CourseId,
		placeholderData: keepPreviousData,
	});
};

export const useQueryLectureById = (LectureId: string | number) => {
	return useQuery({
		queryKey: [LectureKEY, LectureId],
		queryFn: () => LectureService.getById(LectureId),
		select: ({ data }) => data,
	});
};
