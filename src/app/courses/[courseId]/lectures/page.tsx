function Lectures({ params }: { params: { courseId: string } }) {
	return (
		<div>
			Course id: {params.courseId}
			<div>Lectures list</div>{' '}
		</div>
	);
}

export default Lectures;
