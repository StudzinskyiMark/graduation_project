import { ThemeProvider } from '@/actions/theme-provider';
import AuthProvider from '@/providers/AuthProvider';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import NavBarMobile from '@/components/header/navigation/NavBarMobile';
import { Toaster } from '@/components/ui/toaster';
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
	authModal: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={
					inter.className &&
					'relative max-md:min-h-[calc(100vh+5rem)] min-h-[100vh]'
				}>
				<AuthProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<Header />

						<main className="pb-80 pt-12 px-4">
							<TanStackProvider>{children}</TanStackProvider>
						</main>
						<Toaster />
						<Footer />
						<NavBarMobile />
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
