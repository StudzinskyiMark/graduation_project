'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export function TanStackProvider(props: { children: React.ReactNode }) {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 1000,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			{props.children}
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}

export default TanStackProvider;
