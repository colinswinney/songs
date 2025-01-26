
/**
 * External dependencies.
 */
import { Box, Grid } from '@chakra-ui/react'
import { PortableText } from "@portabletext/react";

/**
 * Internal dependencies.
 */
import Chord from "@/components/Chord";
import { H3 } from "@/components/Heading";
import { Chord as ChordType, Line as LineType } from "@/sanity.types";
import { getOptionsSectionTitle } from "@/utils/get-options";

export function Section({ children, ...rest }: { children: React.ReactNode }) {
	return (
		<Box as="section" css={{ marginBlockEnd: "32px" }} {...rest}>
			{children}
		</Box>
	);
}

export function SectionTitle({ id, title }: { id: string; title: string | undefined }) {

	if (!title) {
		return null;
	}

	const sectionTitle = getOptionsSectionTitle().find((t) => t.slug === title)?.display;

	return (
		<H3 id={id} css={{ color: "fg.muted", fontStyle: "italic" }}>
			{sectionTitle}
		</H3>
	);
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- Block content. */
export function SectionDescription({ description }: { description: any }) {

	if (!description) {
		return null;
	}

	return (
		<PortableText value={description} />
	);
}

export function ChordLine ({ chords }: { chords: LineType["chords"] }) {
	return (
		<Grid as="p" css={{ gap: "1em", gridTemplateColumns: "repeat(auto-fill, minmax(6ch, 1fr))" }}>
			{(chords ?? []).map((chord: ChordType & { _key: string }) => (
				<Chord chord={chord} key={chord._key} />
			))}
		</Grid>
	);
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- Block content. */
export function LyricLine({ lyrics }: { lyrics: any }) {
	return (
		<Grid css={{ fontSize: "2xl" }}>
			<PortableText value={lyrics} />
		</Grid>
	);
}
