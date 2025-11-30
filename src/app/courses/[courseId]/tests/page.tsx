'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import Link from 'next/link';

export default function Tests({ params }: { params: { courseId: string } }) {
	const [isChecked, setChecked] = useState(false);
	const [isConfirmed, setConfirmed] = useState(false);

	const onConfirmStart = (e: any) => {
		e.preventDefault();
		if (isChecked === true) {
			setConfirmed(true);
		} else {
			setConfirmed(false);
		}
	};

	return (
		<div className="flex gap-5 flex-row flex-wrap justify-center lg:px-32 px-2">
			<Dialog>
				<DialogTrigger>
					<Card className="text-left max-w-96 max-h-40 w-80 max-md:w-96 min-w-72 shadow-md">
						<CardHeader>
							<CardTitle>Test 1</CardTitle>
							<CardDescription className="text-ellipsis overflow-hidden whitespace-nowrap">
								Info about test 1
							</CardDescription>
						</CardHeader>
					</Card>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className="text-center">
							Do you want to start test?
						</DialogTitle>
						<DialogDescription className="text-center">
							<div className="flex flex-col items-center">
								<div className="mb-8">
									<span className="space-y-2">
										Before start test, please read the{' '}
										<Button
											className="m-0 p-0 text-md"
											variant="link"
											asChild>
											<Link href="/courses/rules">rules</Link>
										</Button>
									</span>
									<div className="flex items-center justify-center space-x-2">
										<Checkbox
											id="terms"
											onCheckedChange={() => setChecked(!isChecked)}
										/>
										<label
											htmlFor="terms"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
											Yes, I read rules.
										</label>
									</div>
								</div>
								{isChecked ? (
									<Button
										type="submit"
										className="max-md:w-3/5 md:w-1/4"
										asChild>
										<Link
											href={`/courses/${
												params.courseId
											}/tests/${1}`}>
											Start test
										</Link>
									</Button>
								) : (
									<Button disabled className="max-md:w-3/5 md:w-1/4">
										Start test
									</Button>
								)}
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}

{
	/* <Link href={`/courses/${params.courseId}/tests/${1}`}></Link> */
}
