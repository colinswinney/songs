/**
 * External dependencies.
 */
import { Text } from "@chakra-ui/react";

/**
 * Internal dependencies.
 */
import { Chord as ChordType } from "../../sanity.types";
// import {
// 	getOptionsChordNote,
// 	getOptionsChordFlatSharp,
// 	getOptionsChordQuality,
// 	getOptionsChordExtension,
// } from "type-options"

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

	// const displayNote = getOptionsChordNote().find((n) => n.slug === note)?.display;

	const handleFlatSharp = (flatSharp: string | undefined) => {

		if (!flatSharp) {
			return "";
		}

		switch (flatSharp) {
			case "flat":
				return "♭";
			case "sharp":
				return "♯";
			case "doubleFlat":
				return "♭♭";
			case "doubleSharp":
				return "♯♯";
			default:
		}
	};


	const handleModifier = (modifier: string | undefined) => {

		if (!modifier) {
			return "";
		}

		switch (modifier) {
			case "major":
				return "M";
			case "major-six":
				return "6";
			case "major-six-nine":
				return "6/9";
			case "major-seven":
				return "Δ";
			case "major-nine":
				return "Maj9";
			case "major-eleven":
				return "Maj11";
			case "major-thirteen":
				return "Maj13";
			case "suspended-two":
				return "sus2";
			case "suspended-four":
				return "sus4";
			case "minor":
				return "m";
			case "minor-six":
				return "m6";
			case "minor-seven":
				return "m7";
			case "minor-nine":
				return "m9";
			case "minor-eleven":
				return "m11";
			case "minor-thirteen":
				return "m13";
			case "minor-major-seven":
				return "mΔ";
			case "dominant-seven":
				return "7";
			case "dominant-nine":
				return "9";
			case "dominant-thirteen":
				return "13";
			case "augmented":
				return "+";
			case "diminished":
				return "°";
			case "half-diminished":
				return "ø";
			default:
		}
	}

	return (
		<Text
			as="span"
			lineHeight="1"
			textStyle="2xl"
			whiteSpace="nowrap"
			textDecor={splitChord ? "underline" : "none"}
			transform={flatSharp ? "translateX(-1em)" : "none"}
		>
			{flatSharp && <Text as="span">{handleFlatSharp(flatSharp)}</Text>}
			<Text as="span" textStyle="4xl" fontWeight="700">
				{note}
			</Text>

			{quality && (
				<Text as="sup" verticalAlign="super" fontSize="0.8em">
					{quality}
					{extension && handleModifier(extension)}
				</Text>
			)}
			{splitChord && (
				<Text as="span" transform={extension ? "translateX(1em)" : "none"}>
					<Text as="span" textStyle="4xl" fontWeight="700">
						&nbsp;&nbsp;
						{splitFlatSharp && (
							<Text as="span">{handleFlatSharp(splitFlatSharp)}</Text>
						)}
						{splitNote}
					</Text>
					{splitQuality && (
						<Text as="sup" verticalAlign="super" fontSize="0.8em">
							{splitQuality}
							{handleModifier(splitExtension)}
						</Text>
					)}
				</Text>
			)}
		</Text>
	);
}
