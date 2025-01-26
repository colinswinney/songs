import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Songs",
	description: "A collection of songs.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/images/music-note-light.png",
				href: "/images/music-note-light.png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/images/music-note-dark.png",
				href: "/images/music-note-dark.png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}
