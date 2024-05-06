import { ThemeProvider } from '@/actions/theme-provider';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import NavBarMobile from '@/components/header/navigation/NavBarMobile';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TanStackProvider from '@/providers/TanStackProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={
					inter.className &&
					'relative max-md:min-h-[calc(100vh+5rem)] min-h-[100vh]'
				}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<Header />

					<main className="px-4 pt-4 pb-28 max-md:pb-48">
						<TanStackProvider>{children}</TanStackProvider>
					</main>
					<Footer />
					<NavBarMobile />
				</ThemeProvider>
			</body>
		</html>
	);
}
