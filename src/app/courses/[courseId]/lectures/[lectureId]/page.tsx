import { useQueryLectureById } from '@/hooks/useQueryLecture';

function Lecture({ params }: { params: { lectureId: string } }) {
	return (
		<div className=" container bg-white w- dark:bg-neutral-900 max-md:px-2 py-4 rounded-xl bg-opacity-75 md:border ">
			<div className="text-center text-lg font-semibold">
				Introduction to Software Engineering
			</div>
			<br />
			<hr />
			<br />
			<div className="leading-8">
				&emsp;Software is a program or set of programs containing
				instructions that provide desired functionality. Engineering is the
				process of designing and building something that serves a particular
				purpose and finds a cost-effective solution to problems.
				<br />
				<br />
				<b>What is Software Engineering?</b> <br />
				&emsp;Software Engineering is the process of designing, developing,
				testing, and maintaining software. It is a systematic and
				disciplined approach to software development that aims to create
				high-quality, reliable, and maintainable software.
				<ol className="list-decimal ml-4">
					<li>
						Software engineering includes a variety of techniques, tools,
						and methodologies, including requirements analysis, design,
						testing, and maintenance.
					</li>
					<li>
						It is a rapidly evolving field, and new tools and technologies
						are constantly being developed to improve the software
						development process.
					</li>
					<li>
						By following the principles of software engineering and using
						the appropriate tools and methodologies, software developers
						can create high-quality, reliable, and maintainable software
						that meets the needs of its users.
					</li>
					<li>
						Software Engineering is mainly used for large projects based
						on software systems rather than single programs or
						applications.
					</li>
					<li>
						The main goal of Software Engineering is to develop software
						applications for improving quality, budget, and time
						efficiency.
					</li>
					<li>
						Software Engineering ensures that the software that has to be
						built should be consistent, correct, also on budget, on time,
						and within the required requirements.
					</li>
				</ol>
				&emsp;In summary, software engineering offers a structured and
				efficient approach to software development, which can lead to
				higher-quality software that is easier to maintain and adapt to
				changing requirements. This can help to improve customer
				satisfaction and reduce costs, while also promoting better
				collaboration among development teams.
			</div>
		</div>
	);
}

export default Lecture;
