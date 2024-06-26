import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertProvider } from "next-alert";

export const metadata: Metadata = {
	title: "Jesse Pena",
	description: "Personal Web Portfolio by Jesse Pena",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="font-body bg-background flex flex-col items-center text-text-primary dark:bg-background-dark dark:text-text-primary-dark transition-all duration-700">
				<AlertProvider>
					<Header />
					{children}
					<Footer />
				</AlertProvider>
			</body>
		</html>
	);
}
