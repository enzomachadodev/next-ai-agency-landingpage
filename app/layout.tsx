import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Zenith Labs",
	description: "A Revolução da Inteligência Artificial ao Seu Alcance",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			suppressHydrationWarning
		>
			<body className={font.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

