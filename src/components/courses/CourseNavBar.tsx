'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { useQueryCourseList } from '@/hooks/useQueryCourse';
import { ChevronsRight, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

import Link from 'next/link';
import ListInCourse from './ListInCourse';

function CourseNavBar({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const NavbarWidth = 80;
	const [isOpen, setOpen] = useState(true);

	const { data } = useQueryCourseList();

	return (
		<>
			<div
				className={`${
					isOpen ? `w-${NavbarWidth} border-r` : 'w-0'
				} bg-neutral-100 dark:bg-neutral-900 bg-opacity-40 dark:bg-opacity-60 backdrop-filter backdrop-blur-xl drop-shadow-md min-h-full fixed top-0 left-0 overflow-x-hidden transition-all duration-300 ease-in-out max-md:hidden z-10 pt-28 `}>
				<div className="flex flex-row items-center justify-between pl-6 ">
					<Link
						href="/courses"
						className="min-w-max font-semibold text-lg flex gap-2 hover:underline transition-all">
						<GraduationCap className="self-center" />
						Course navigation
					</Link>
					<Button
						size={'icon'}
						variant={'ghost'}
						className=" mr-2 rotate-180"
						onClick={(e) => setOpen(false)}>
						<ChevronsRight className="h-4" />
					</Button>
				</div>
				<div
					className={`${
						isOpen ? 'visible' : 'hidden'
					} p-4 pl-6 fixed w-full`}>
					<Accordion type="single" collapsible className="w-full">
						{data?.map((course: any) => {
							return (
								<AccordionItem
									key={`${course.id}`}
									value={`${course.id}`}
									className="border-b shadow-sm">
									<AccordionTrigger>{course.title}</AccordionTrigger>
									<AccordionContent className="pl-4">
										<Accordion
											type="single"
											collapsible
											className="w-full">
											<AccordionItem value="Lecture">
												<AccordionTrigger>Lecture</AccordionTrigger>
												<AccordionContent className="pl-1">
													<ListInCourse
														props={{
															ListType: 'lectures',
															CourseId: course.id,
														}}
													/>
												</AccordionContent>
											</AccordionItem>
											<AccordionItem value="Tasks">
												<AccordionTrigger>Tasks</AccordionTrigger>
												<AccordionContent className="pl-1">
													<ListInCourse
														props={{
															ListType: 'tasks',
															CourseId: course.id,
														}}
													/>
												</AccordionContent>
											</AccordionItem>
											<AccordionItem value="Tests">
												<AccordionTrigger>Tests</AccordionTrigger>
												<AccordionContent className="pl-1">
													<ListInCourse
														props={{
															ListType: 'tests',
															CourseId: course.id,
														}}
													/>
												</AccordionContent>
											</AccordionItem>
											<AccordionItem value="Exams">
												<AccordionTrigger>Exams</AccordionTrigger>
											</AccordionItem>
										</Accordion>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
			<Button
				size={'icon'}
				variant={'ghost'}
				className="absolute max-md:hidden"
				onClick={(e) => setOpen(true)}>
				<ChevronsRight className="h-4" />
			</Button>
			<main
				className={`${
					isOpen ? ` ml-80 mr-2` : 'm-0'
				} max-md:m-0 transition-all `}>
				{children}
			</main>
		</>
	);
}

export default CourseNavBar;
