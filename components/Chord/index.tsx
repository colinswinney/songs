/**
 * External dependencies.
 */
import { Text } from "@chakra-ui/react";

/**
 * Internal dependencies.
 */
import { Chord as ChordType } from "../../sanity.types";
import {
	getOptionsChordNote,
	getOptionsChordFlatSharp,
	getOptionsChordQuality,
	getOptionsChordExtension,
} from "@/utils/get-options";

export default function Chord({ chord }: { chord: ChordType }) {

	const note = chord.note;
	const flatSharp = chord.flatSharp;
	const quality = chord.quality;
	const extension = chord.extension;

	const splitChord = chord.splitChord;
	const splitNote = chord.splitNote;
	const splitFlatSharp = chord.splitFlatSharp;
	const splitQuality = chord.splitQuality;
	const splitExtension = chord.splitExtension;

	const displayNote = getOptionsChordNote().find((n) => n.slug === note)?.display;
	const displayFlatSharp = getOptionsChordFlatSharp().find((fs) => fs.slug === flatSharp)?.display;
	const displayQuality = getOptionsChordQuality().find((q) => q.slug === quality)?.display;
	const displayExtension = getOptionsChordExtension().find((e) => e.slug === extension)?.display;

	const displaySplitNote = getOptionsChordNote().find((n) => n.slug === splitNote)?.display;
	const displaySplitFlatSharp = getOptionsChordFlatSharp().find((fs) => fs.slug === splitFlatSharp)?.display;
	const displaySplitQuality = getOptionsChordQuality().find((q) => q.slug === splitQuality)?.display;
	const displaySplitExtension = getOptionsChordExtension().find((e) => e.slug === splitExtension)?.display;

	return (
		<Text
			as="span"
			lineHeight="1"
			textStyle="2xl"
			whiteSpace="nowrap"
			textDecor={splitChord ? "underline" : "none"}
			transform={flatSharp ? "translateX(-1em)" : "none"}
		>
			{flatSharp && <Text as="span">{displayFlatSharp}</Text>}
			<Text as="span" textStyle="4xl" fontWeight="700">
				{displayNote}
			</Text>

			{quality && (
				<Text as="sup" verticalAlign="super" fontSize="0.8em">
					{displayQuality}
					{displayExtension}
				</Text>
			)}
			{splitChord && (
				<Text as="span" transform={extension ? "translateX(1em)" : "none"}>
					<Text as="span" textStyle="4xl" fontWeight="700">
						&nbsp;&nbsp;
						{splitFlatSharp && (
							<Text as="span">{displaySplitFlatSharp}</Text>
						)}
						{displaySplitNote}
					</Text>
					{splitQuality && (
						<Text as="sup" verticalAlign="super" fontSize="0.8em">
							{displaySplitQuality}
							{displaySplitExtension}
						</Text>
					)}
				</Text>
			)}
		</Text>
	);
}
