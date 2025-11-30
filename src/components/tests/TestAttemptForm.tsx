'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

type Props = {
	testName: string;
};

export default function TestAttemptForm(props: Props) {
	return (
		<>
			<header className="text-lg flex justify-between py-2">
				<div>Test: Understanding Agile Software Development</div>
				<div>Attempt time: 58:15</div>
			</header>
			<Separator />
			<main className="flex flex-row justify-between my-2">
				<div>Total score:</div>
				<div>0 / 100</div>
			</main>
			{/* <main className=" my-6 md:px-6 px-1">
				<ol className="list-decimal space-y-4">
					<li>
						<Label>
							What is the primary goal of Agile software development?
						</Label>
						<RadioGroup className="ml-2 my-2 space-y-4">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option-one" id="option-one" />
								<Label htmlFor="option-one">
									To produce comprehensive documentation
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option-two" id="option-two" />
								<Label htmlFor="option-two">
									To deliver software incrementally and iteratively
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-three"
									id="option-three"
								/>
								<Label htmlFor="option-three">
									To follow a rigid project management plan
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option-four" id="option-four" />
								<Label htmlFor="option-four">
									To maximize utilization of resources
								</Label>
							</div>
						</RadioGroup>
					</li>
					<Separator />
					<li>
						<Label>
							Which of the following is NOT a principle of the Agile
							Manifesto?
						</Label>
						<RadioGroup className="ml-2 my-1 space-y-4">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="one" id="one" />
								<Label htmlFor="one">
									Customer collaboration over contract negotiation
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="two" id="two" />
								<Label htmlFor="two">
									Comprehensive documentation over working software
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="three" id="three" />
								<Label htmlFor="three">
									Responding to change over following a plan
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="four" id="four" />
								<Label htmlFor="four">
									Individuals and interactions over processes and tools
								</Label>
							</div>
						</RadioGroup>
					</li>
					<Separator />
				</ol>
			</main>
			<footer className="w-full flex max-md:justify-center">
				<Dialog>
					<DialogTrigger>
						<Button className="max-md:w-1/2">Finish Test</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="text-center">
								Are you sure?
							</DialogTitle>
							<DialogDescription className="text-center">
								After submit finishing your attempt you can't try again.
							</DialogDescription>
						</DialogHeader>
						<Button className="max-md:w-3/5 md:w-1/4 mx-auto">
							Yes, finish test!
						</Button>
					</DialogContent>
				</Dialog>
			</footer> */}
		</>
	);
}
