import TestAttemptForm from '@/components/tests/TestAttemptForm';

export default function TaskPage({ params }: { params: { testId: string } }) {
	return (
		<>
			<div className="container bg-neutral-50 dark:bg-neutral-900 w-full h-full rounded-lg py-4">
				<TestAttemptForm testName="1" />
			</div>
		</>
	);
}
