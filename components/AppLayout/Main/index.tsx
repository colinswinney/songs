import { Box } from "@chakra-ui/react";
import SiteContainer from "../Container";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Main({ children, ...restProps }: { children: React.ReactNode, [key: string]: any }) {
	return (
		<Box as="main" py="4" {...restProps}>
			<SiteContainer>{children}</SiteContainer>
		</Box>
	);
}
