export default function TaskPage({ params }: { params: { taskId: string } }) {
	return <div>Task page: {params.taskId}</div>;
}
