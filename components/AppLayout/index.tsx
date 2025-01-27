import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/AppLayout/Footer";
import Header from "@/components/AppLayout/Header";
import Main from "@/components/AppLayout/Main";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { AppSettingsProvider } from "@/context";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
	title: "Songs",
	description: "A collection of songs.",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ChakraProvider>
			<AppSettingsProvider>
				{/** Note, can't set two minH so using style for progressive enhancement. */}
				<Flex direction="column" minH="100dvh" fontFamily="body" css={{ flexDirection: "column", minHeight: "100vh", fontFamily: "body" }} style={{ minHeight: "100dvh" }}>
					<Header />
					<Main flex="1">{children}</Main>
					<Footer />
					<SanityLive />
				</Flex>
			</AppSettingsProvider>
		</ChakraProvider>
	);
}
