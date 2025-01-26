"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/components/theme";
import type { ThemeProviderProps } from "next-themes";
import {
  ColorModeProvider,
} from "./color-mode"

export function Provider(props: ThemeProviderProps) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
