function Exams({ params }: { params: { courseId: string } }) {
	return (
		<div>
			Course id: {params.courseId}
			<div>Exams list</div>{' '}
		</div>
	);
}

export default Exams;
