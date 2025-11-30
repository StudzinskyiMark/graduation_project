'use client';

import * as React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '../ui/separator';

export function NotificationToggle() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Bell className="h-5 w-5" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mt-3 h-20 w-60" align="end">
				<DropdownMenuLabel>Notifications</DropdownMenuLabel>
				<Separator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
