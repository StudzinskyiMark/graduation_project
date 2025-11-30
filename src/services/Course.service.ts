import { ICourse } from '@/types/Course.interface';
import axios from 'axios';

class CourseService {
	private URL = `${process.env.NEXT_PUBLIC_URL}/course`;

	async getById(CourseId: string | number) {
		return axios.get<ICourse>(`${this.URL}/${CourseId}`);
	}

	async getAll() {
		return axios.get<ICourse[]>(
			// 'https://jsonplaceholder.typicode.com/todos?_limit=20'
			this.URL
		);
	}
}

export default new CourseService();
