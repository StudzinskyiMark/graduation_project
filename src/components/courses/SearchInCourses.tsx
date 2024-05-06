'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

function SearchInCourses() {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setTimeout(() => {
			setIsFocused(false);
		}, 80);
	};

	return (
		<>
			<div className="flex w-full min-w-sm max-w-2xl mb-6 justify-center mx-auto space-x-2 max-md:px-8 max-sm:px-6">
				<div
					className="flex-col w-full relative"
					onFocus={handleFocus}
					onBlur={handleBlur}>
					<input
						className={`${
							isFocused ? 'rounded-b-none' : ''
						} shadow-md w-full p-2 px-5 border rounded-md focus:border outline-none `}
						type="input"
						onChange={(e) => {
							handleSearch(e.target.value);
						}}
						placeholder="Search course materials"
					/>
					<div
						className={`${
							isFocused
								? 'visible rounded-t-none border-t-0 animate-fade-down'
								: 'animate-fade-up hidden'
						} absolute w-full max-h-[200px] z-10 overflow-y-auto overflow-x-hidden  py-1 px-1 rounded-md border drop-shadow-lg text-opacity-50 bg-white text-sm dark:bg-neutral-900`}>
						<Button
							variant="ghost"
							className="w-full text-left justify-start px-4 py-1 text-neutral-500 "
							asChild>
							<Link
								href="/courses/78946546/lectures"
								className="flex justify-between"
								prefetch>
								Lecture <span>Course 1</span>
							</Link>
						</Button>
						<Button
							variant="ghost"
							className="w-full text-left justify-start px-4 py-1 text-neutral-500"
							asChild>
							<Link href="/">Home</Link>
						</Button>
						<Button
							variant="ghost"
							className="w-full text-left justify-start px-4 py-1 text-neutral-500"
							asChild>
							<Link href="/">Home</Link>
						</Button>
					</div>
				</div>
				<Button type="submit" className="max-md:hidden">
					<Search className="h-5" />
					<span className="max-md:hidden">Search</span>
				</Button>
			</div>
		</>
	);
}

export default SearchInCourses;
