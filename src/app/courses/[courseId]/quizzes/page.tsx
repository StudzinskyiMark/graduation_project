function Quizzes({ params }: { params: { courseId: string } }) {
	return (
		<div>
			Course id: {params.courseId}
			<div>Quizzes list</div>{' '}
		</div>
	);
}

export default Quizzes;
