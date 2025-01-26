import { defineField, defineType } from 'sanity'
import { ControlsIcon } from '@sanity/icons'
import {
	PiNumberOneBold,
	PiNumberTwoBold,
	PiNumberThreeBold,
	PiNumberFourBold,
	PiNumberFiveBold,
	PiNumberSixBold,
	PiNumberSevenBold,
	PiNumberZeroBold,
} from 'react-icons/pi'

import {
	getOptionsOriginalKey,
	getOptionsChordNote,
	getOptionsChordFlatSharp,
	getOptionsChordQuality,
	getOptionsChordExtension,
	getOptionsSectionTitle
} from "../../helpers/get-options";

/**
 * Original Key.
 */
const originalKeyOptions = getOptionsOriginalKey().map(({ display, slug }) => ({
	title: display,
	value: slug,
}))
export const originalKeyType = defineType({
	name: 'originalKey',
	title: 'Original Key',
	type: 'string',
	initialValue: 'C',
	options: {
		list: originalKeyOptions,
	},
})

/**
 * Chord Note.
 */
const chordNoteOptions = getOptionsChordNote().map(({ display, slug }) => ({
	title: display,
	value: slug,
}))
export const chordNoteType = defineType({
	name: 'chordNote',
	title: 'Note',
	type: 'string',
	initialValue: 'one',
	options: {
		list: chordNoteOptions,
	},
})

/**
 * Chord Flat / Sharp.
 */
const chordFlatSharpOptions = getOptionsChordFlatSharp().map(({ display, slug }) => ({
	title: display,
	value: slug,
}))
export const chordFlatSharpType = defineType({
	name: 'chordFlatSharp',
	title: 'Flat / Sharp',
	type: 'string',
	initialValue: '',
	options: {
		list: chordFlatSharpOptions,
	},
})

/**
 * Chord Quality.
 */
const chordQualityOptions = getOptionsChordQuality().map(({ slug, title }) => ({
	title: title,
	value: slug,
}))
export const chordQualityType = defineType({
	name: 'chordQuality',
	title: 'Quality',
	type: 'string',
	initialValue: 'major',
	options: {
		list: chordQualityOptions,
	},
})

/**
 * Chord Extension.
 */
const chordExtensionOptions = getOptionsChordExtension().map(({ display, slug }) => ({
	title: display,
	value: slug,
}))
export const chordExtensionType = defineType({
	name: 'chordExtension',
	title: 'Extension',
	type: 'string',
	initialValue: '',
	options: {
		list: chordExtensionOptions,
	},
})

/**
 * Chord.
 */
export const chordType = defineType({
	type: 'object',
	name: 'chord',
	fields: [
		{
			name: 'note',
			type: 'chordNote',
			validation: (rule) => rule.required(),
		},
		{
			name: 'flatSharp',
			type: 'chordFlatSharp',
		},
		{
			name: 'quality',
			type: 'chordQuality',
			validation: (rule) => rule.required(),
		},
		{
			name: 'extension',
			type: 'chordExtension',
		},
		{
			name: 'hardStop',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'splitChord',
			title: 'Split Chord?',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'splitNote',
			title: 'Note',
			type: 'chordNote',
			hidden: ({parent}) => !parent.splitChord,
		},
		{
			name: 'splitFlatSharp',
			title: 'Flat / Sharp',
			type: 'chordFlatSharp',
			hidden: ({parent}) => !parent.splitChord,
		},
		{
			name: 'splitQuality',
			title: 'Quality',
			type: 'chordQuality',
			hidden: ({parent}) => !parent.splitChord,
		},
		{
			name: 'splitExtension',
			title: 'Extension',
			type: 'chordExtension',
			hidden: ({parent}) => !parent.splitChord,
		},
	],
	preview: {
		select: {
			note: 'note',
			flatSharp: 'flatSharp',
			quality: 'quality',
			extension: 'extension',
			splitChord: 'splitChord',
			splitNote: 'splitNote',
			splitFlatSharp: 'splitFlatSharp',
			splitQuality: 'splitQuality',
			splitExtension: 'splitExtension',
		},
		prepare({
			note,
			flatSharp,
			quality,
			extension,
			splitChord,
			splitNote,
			splitFlatSharp,
			splitQuality,
			splitExtension,
		}) {
			let icon
			switch (note) {
				case 'one':
					icon = PiNumberOneBold
					break
				case 'two':
					icon = PiNumberTwoBold
					break
				case 'three':
					icon = PiNumberThreeBold
					break
				case 'four':
					icon = PiNumberFourBold
					break
				case 'five':
					icon = PiNumberFiveBold
					break
				case 'six':
					icon = PiNumberSixBold
					break
				case 'seven':
					icon = PiNumberSevenBold
					break
				case '-':
					icon = PiNumberZeroBold
					break
			}

			const prepareTitle = () => {
				let previewTitle = '';

				if (flatSharp) {
					previewTitle += `${getOptionsChordFlatSharp().find((f) => f.slug === flatSharp)?.display || ''}`
				}

				if (quality) {
					previewTitle += `${getOptionsChordQuality().find((q) => q.slug === quality)?.display || ''}`
				}

				if (extension) {
					previewTitle += `${getOptionsChordExtension().find((e) => e.slug === extension)?.display || ''}`
				}


				if (splitChord === true) {
					previewTitle += ' / '

					if (splitFlatSharp) {
						previewTitle += `${getOptionsChordFlatSharp().find((f) => f.slug === splitFlatSharp)?.display || ''}`
					}

					if (splitNote) {
						previewTitle += `${getOptionsChordNote().find((n) => n.slug === splitNote)?.display || ''}`
					}

					if (splitQuality) {
						previewTitle += `${getOptionsChordQuality().find((q) => q.slug === splitQuality)?.display || ''}`
					}

					if (splitExtension) {
						previewTitle += `${getOptionsChordExtension().find((e) => e.slug === splitExtension)?.display || ''}`
					}
				}

				return previewTitle
			}

			return {
				title: prepareTitle() || ' ',
				media: icon,
			}
		},
	},
})


/**
 * Line.
 */
export const lineType = defineType({
	name: 'line',
	type: 'object',
	fields: [
		{
			name: 'chords',
			title: 'Chords',
			type: 'array',
			of: [
				{
					type: 'chord',
				},
			],
		},
		{
			name: 'lyrics',
			type: 'array',
			of: [{type: 'block'}],
		},
	],
	preview: {
		select: {
			chords: 'chords',
			lyrics: 'lyrics',
		},
		prepare({chords, lyrics}) {
			const prepareChordPreview = (note: string, flatSharp: string, quality: string, extension: string) => {
				let previewTitle = '';

				if (note) {
					previewTitle += `${getOptionsChordNote().find((n) => n.slug === note)?.display || ''}`
				}

				if (flatSharp) {
					previewTitle += `${getOptionsChordFlatSharp().find((f) => f.slug === flatSharp)?.display || ''}`
				}

				if (quality) {
					previewTitle += `${getOptionsChordQuality().find((q) => q.slug === quality)?.display || ''}`
				}

				if (extension) {
					previewTitle += `${getOptionsChordExtension().find((e) => e.slug === extension)?.display || ''}`
				}

				return previewTitle;
			}
			return {
				title: lyrics !== undefined && lyrics[0] ? lyrics[0].children[0].text : ' ',
				subtitle: chords
					.map(
						({
							note,
							flatSharp,
							quality,
							extension,
						}: {
							note: string
							flatSharp: string
							quality: string
							extension: string
						}) => prepareChordPreview(note, flatSharp, quality, extension),
					)
					.join(' '),
			}
		},
	},
});

/**
 * Lines.
 */
export const linesType = defineType({
	name: 'lines',
	type: 'array',
	of: [
		{
			type: 'line',
		},
	],
})

/**
 * Section Title.
 */
const sectionTitleOptions = getOptionsSectionTitle().map(({ display, slug }) => ({
	title: display,
	value: slug,
}))
export const sectionTitleType = defineType({
	name: 'sectionTitle',
	type: 'string',
	initialValue: 'verse',
	options: {
		list: sectionTitleOptions,
	},
})

/**
 * Section.
 */
export const sectionType = defineType({
	name: 'section',
	type: 'object',
	fields: [
		{
			name: 'title',
			type: 'sectionTitle',
		},
		{
			name: 'repeatsSection',
			type: 'object',
			fields: [
				{
					name: 'section',
					type: 'sectionTitle',
				},
				{
					name: 'chords',
					type: 'boolean',
					initialValue: false,
					hidden: ({parent}) => (!parent?.section || parent?.section === '' ? true : false),
				},
				{
					name: 'lyrics',
					type: 'boolean',
					initialValue: false,
					hidden: ({parent}) => (!parent?.section || parent?.section === '' ? true : false),
				},
			],
		},
		{
			name: 'lines',
			type: 'lines',
		},
		{
			name: 'description',
			type: 'array',
			of: [{type: 'block'}],
		},
	],
	preview: {
		select: {
			title: 'title',
			lines: 'lines',
		},
		prepare({title, lines}) {
			const previewTitle = getOptionsSectionTitle().find((s) => s.slug === title)?.display || ''
			let previewLines = ''
			if (lines !== undefined && lines[0].lyrics) {
				previewLines = lines[0].lyrics[0].children[0].text
				previewLines =
					previewLines.length > 20 ? previewLines.substring(0, 50) + '...' : previewLines
			}
			return {
				title: previewTitle,
				subtitle: previewLines,
			}
		},
	},
})

/**
 * Song
 */
export const songType = defineType({
	name: 'song',
	title: 'Song',
	type: 'document',
	icon: ControlsIcon,
	fields: [
		defineField({
			name: 'sections',
			title: 'Sections',
			type: 'array',
			of: [
				{
					name: 'section',
					type: 'section',
				},
			],
		}),
		defineField({
			name: 'originalKey',
			type: 'originalKey',
		}),
		defineField({
			name: 'title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {source: 'title'},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'artists',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'artist'}],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			artist0: 'artists.0.title',
			artist1: 'artists.1.title',
			artist2: 'artists.2.title',
			artist3: 'artists.3.title',
		},
		prepare({title, artist0, artist1, artist2, artist3}) {
			let subtitle = null

			if (artist0) subtitle = artist0
			if (artist1) subtitle = `${subtitle}, ${artist1}`
			if (artist2) subtitle = `${subtitle}, ${artist2}`
			if (artist3) subtitle = `${subtitle}...`

			return {
				title,
				subtitle,
			}
		},
	},
})
