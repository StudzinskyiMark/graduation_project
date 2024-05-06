'use client';

import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Home, FileText, SquareLibrary, GraduationCap } from 'lucide-react';

function NavBar() {
	return (
		<>
			{/* Hover Card, alt if need active buttons*/}
			<NavigationMenu className="flex self-center max-md:hidden">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle()}>
								<Home className="h-6 " />
								<div className="ml-1 max-lg:hidden">Home</div>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/materials" legacyBehavior passHref>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle()}>
								<SquareLibrary className="h-6 " />
								<div className="ml-1 max-lg:hidden">Materials</div>
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink>
								<NavigationMenuTrigger>
									<FileText className="h-5" />
									<div className="ml-1 max-lg:hidden">
										{' '}
										Documentation{' '}
									</div>
								</NavigationMenuTrigger>
							</NavigationMenuLink>
						</Link>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<Link
											href="/shadcn"
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
											<div className="mb-2 mt-4 text-lg font-medium">
												shadcn/ui
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components that you can
												copy and paste into your apps. Accessible.
												Customizable. Open Source.
											</p>
										</Link>
									</NavigationMenuLink>
								</li>
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<Link
											href="/shadcn"
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
											<div className="mb-2 mt-4 text-lg font-medium">
												shadcn/ui
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components that you can
												copy and paste into your apps. Accessible.
												Customizable. Open Source.
											</p>
										</Link>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/courses" legacyBehavior passHref>
							<NavigationMenuLink>
								<NavigationMenuTrigger>
									<GraduationCap className="h-6" />
									<div className="ml-1 max-lg:hidden">Сourses</div>
								</NavigationMenuTrigger>
							</NavigationMenuLink>
						</Link>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<Link
											href="/shadcn"
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
											<div className="mb-2 mt-4 text-lg font-medium">
												shadcn/ui
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components that you can
												copy and paste into your apps. Accessible.
												Customizable. Open Source.
											</p>
										</Link>
									</NavigationMenuLink>
								</li>
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<Link
											href="/shadcn"
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
											<div className="mb-2 mt-4 text-lg font-medium">
												shadcn/ui
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components that you can
												copy and paste into your apps. Accessible.
												Customizable. Open Source.
											</p>
										</Link>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}
export default NavBar;
