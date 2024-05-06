function Tests({ params }: { params: { courseId: string } }) {
	return (
		<div>
			Course id: {params.courseId}
			<div>Tests list</div>{' '}
		</div>
	);
}

export default Tests;
