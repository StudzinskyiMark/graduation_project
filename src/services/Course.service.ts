import { ICourse } from '@/types/app.interface';
import axios from 'axios';

class CourseService {
	private URL = 'http://localhost:3001/courses';

	async getById(id: string) {
		return axios.get<ICourse>(`${this.URL}/${id}`);
	}

	async getAll() {
		return axios.get<ICourse[]>(this.URL);
	}
}

export default new CourseService();
