/**
 * Chord Note Options.
 *
 * @returns {Array} The chord note options.
 */
export function getOptionsChordNote() {
	return [
		{ display: "1", slug: "one", title: "One" },
		{ display: "2", slug: "two", title: "Two" },
		{ display: "3", slug: "three", title: "Three" },
		{ display: "4", slug: "four", title: "Four" },
		{ display: "5", slug: "five", title: "Five" },
		{ display: "6", slug: "six", title: "Six" },
		{ display: "7", slug: "seven", title: "Seven" },
		{ display: "-", slug: "rest", title: "Rest" },
	];
}

/**
 * Chord Flat Sharp Options.
 *
 * @returns {Array} The chord flat sharp options.
 */
export function getOptionsChordFlatSharp() {
	return [
		{ display: "♭", slug: "flat", title: "Flat" },
		{ display: "♯", slug: "sharp", title: "Sharp" },
		{ display: "♭♭", slug: "double-flat", title: "Double Flat" },
		{ display: "♯♯", slug: "double-sharp", title: "Double Sharp" },
	];
}

/**
 * Chord Quality Options.
 *
 * @returns {Array} The chord quality options.
 */
export function getOptionsChordQuality() {
	return [
		{ display: "", slug: "major", title: "Major" },
		{ display: "-", slug: "minor", title: "Minor" },
		{ display: "°", slug: "diminished", title: "Diminished" },
		{ display: "ø", slug: "half-diminished", title: "Half Diminished" },
		{ display: "+", slug: "augmented", title: "Augmented" },
	];
}

/**
 * Chord Extension Options.
 *
 * @returns {Array} The chord extension options.
 */
export function getOptionsChordExtension() {
	return [
		{ display: "6", slug: "six", title: "Six" },
		{ display: "6/9", slug: "six-nine", title: "Six Nine" },
		{ display: "Δ", slug: "major-seven", title: "Major Seven" },
		{ display: "11", slug: "eleven", title: "Eleven" },
		{ display: "13", slug: "thirteen", title: "Thirteen" },
		{ display: "sus2", slug: "suspended-two", title: "Suspended Two" },
		{ display: "sus4", slug: "suspended-four", title: "Suspended Four" },
		{ display: "7", slug: "dominant-seven", title: "Dominant Seven" },
		{ display: "9", slug: "dominant-nine", title: "Dominant Nine" },
		{
			display: "7#11",
			slug: "dominant-seven-sharp-eleven",
			title: "Dominant Seven Sharp Eleven",
		},
	];
}

/**
 * Section Title Options.
 *
 * @returns {Array} The section title options.
 */
export function getOptionsSectionTitle() {
	return [
		{ display: "Intro", slug: "intro", title: "Intro" },
		{ display: "Bridge", slug: "bridge", title: "Bridge" },
		{ display: "Chorus", slug: "chorus", title: "Chorus" },
		{ display: "Chorus 2", slug: "chorus-two", title: "Chorus Two" },
		{ display: "Chorus 3", slug: "chorus-three", title: "Chorus Three" },
		{ display: "Chorus 4", slug: "chorus-four", title: "Chorus Four" },
		{ display: "Outro", slug: "outro", title: "Outro" },
		{ display: "Pre Chorus", slug: "pre-chorus", title: "Pre Chorus" },
		{
			display: "Pre Chorus 2",
			slug: "pre-chorus-two",
			title: "Pre Chorus Two",
		},
		{
			display: "Pre Chorus 3",
			slug: "pre-chorus-three",
			title: "Pre Chorus Three",
		},
		{
			display: "Pre Chorus 4",
			slug: "pre-chorus-four",
			title: "Pre Chorus Four",
		},
		{ display: "Solo", slug: "solo", title: "Solo" },
		{ display: "Solo 2", slug: "solo-two", title: "Solo Two" },
		{ display: "Solo 3", slug: "solo-three", title: "Solo Three" },
		{ display: "Solo 4", slug: "solo-four", title: "Solo Four" },
		{ display: "Verse", slug: "verse", title: "Verse" },
		{ display: "Verse 2", slug: "verse-two", title: "Verse Two" },
		{ display: "Verse 3", slug: "verse-three", title: "Verse Three" },
		{ display: "Verse 4", slug: "verse-four", title: "Verse Four" },
		{ display: "Verse 5", slug: "verse-five", title: "Verse Five" },
		{ display: "Verse 6", slug: "verse-six", title: "Verse Six" },
		{ display: "Verse 7", slug: "verse-seven", title: "Verse Seven" },
		{ display: "Verse 8", slug: "verse-eight", title: "Verse Eight" },
		{ display: "Verse 9", slug: "verse-nine", title: "Verse Nine" },
		{ display: "Verse 10", slug: "verse-ten", title: "Verse Ten" },
	];
}

/**
 * Original Key Options.
 *
 * @returns {Array} The original key options.
 */
export function getOptionsOriginalKey() {
	return [
		{ display: "C", slug: "c", title: "C" },
		{ display: "C♯", slug: "c-sharp", title: "C Sharp" },
		{ display: "D♭", slug: "d-flat", title: "D Flat" },
		{ display: "D", slug: "d", title: "D" },
		{ display: "D♯", slug: "d-sharp", title: "D Sharp" },
		{ display: "E♭", slug: "e-flat", title: "E Flat" },
		{ display: "E", slug: "e", title: "E" },
		{ display: "F", slug: "f", title: "F" },
		{ display: "F♯", slug: "f-sharp", title: "F Sharp" },
		{ display: "G♭", slug: "g-flat", title: "G Flat" },
		{ display: "G", slug: "g", title: "G" },
		{ display: "G♯", slug: "g-sharp", title: "G Sharp" },
		{ display: "A♭", slug: "a-flat", title: "A Flat" },
		{ display: "A", slug: "a", title: "A" },
		{ display: "A♯", slug: "a-sharp", title: "A Sharp" },
		{ display: "B♭", slug: "b-flat", title: "B Flat" },
		{ display: "B", slug: "b", title: "B" },
	];
}
