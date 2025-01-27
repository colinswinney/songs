import { Box, Separator, Text } from "@chakra-ui/react";
import SiteContainer from "../Container";
import Link from "@/components/Link"

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<Box as="footer" py="4" textAlign="center">
			<SiteContainer>
				<Separator marginBlockEnd="16px"/>
				<Text>
					<Link
						href="https://www.sweetwater.com/insync/the-nashville-number-system-demystified/"
						isExternal
					>
						The Nashville Number System Demystified
					</Link>
					<br />
					<Text as="span">&copy; {currentYear}</Text>
				</Text>
			</SiteContainer>
		</Box>
	);
}
