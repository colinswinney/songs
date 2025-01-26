import { type SchemaTypeDefinition } from 'sanity'

import { artistType } from "./artist";
import {
	originalKeyType,
	chordNoteType,
	chordFlatSharpType,
	chordExtensionType,
	chordQualityType,
	chordType,
	lineType,
	linesType,
	sectionTitleType,
	sectionType,
	songType,
} from "./song";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		artistType,
		originalKeyType,
		chordNoteType,
		chordFlatSharpType,
		chordExtensionType,
		chordQualityType,
		chordType,
		lineType,
		linesType,
		sectionTitleType,
		sectionType,
		songType,
	],
};
