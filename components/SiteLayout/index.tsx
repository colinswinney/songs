import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SiteMain from "@/components/SiteMain";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { AppSettingsProvider } from "@/context";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
	title: "Songs",
	description: "A collection of songs.",
};

export default function SiteLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ChakraProvider>
			<AppSettingsProvider>
				<Flex direction="column" minH="100vh" fontFamily="body">
					<SiteHeader />
					<SiteMain flex="1">{children}</SiteMain>
					<SiteFooter />
					<SanityLive />
				</Flex>
			</AppSettingsProvider>
		</ChakraProvider>
	);
}
