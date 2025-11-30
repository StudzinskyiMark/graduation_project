import { ILecture } from '@/types/Lecture.interface';
import axios from 'axios';

class LectureService {
	private URL = `${process.env.NEXT_PUBLIC_URL}/lecture`;

	async getById(LectureId: string | number) {
		return axios.get<ILecture>(`${this.URL}/${LectureId}`);
	}

	async getAll() {
		return axios.get<ILecture[]>(this.URL);
	}

	async getAllByCourseId(CourseId: string | number) {
		return axios.get<ILecture[]>(`${this.URL}?idCourse=${CourseId}`);
	}
}

export default new LectureService();
