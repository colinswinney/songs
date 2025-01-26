import React, { Fragment } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { Line, Slug, Section as SectionType } from "@/sanity.types";

import { SONG_FULL_DISPLAY_QUERY } from "@/sanity/lib/queries";
import { Grid, GridItem, List, Separator } from "@chakra-ui/react";
import SiteLayout from "@/components/SiteLayout";
import Link from "@/components/Link";
import { H1 } from "@/components/Heading";

import * as S from "@/components/Song";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: song } = await sanityFetch({
		query: SONG_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!song) {
		notFound();
	}

	const { title } = song;

	return {
		title: title + " | " + 'Songs',
	};
}

export default async function SongPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: song } = await sanityFetch({
		query: SONG_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!song) {
		notFound();
	}

	const {
		title,
		sections,
		artists
	} = song;

	return (
		<SiteLayout>
			<Grid templateColumns={{ base: "1fr", md: "1fr auto" }}>
				<GridItem>
					{title && <H1>{title}</H1>}
					{artists && (
						<List.Root>
							{artists.map(
								(artist: { slug: Slug | null; title: string | null }) => (
									<List.Item key={artist.slug?.current}>
										<Link href={`/artists/${artist.slug?.current}`}>
											{artist.title}
										</Link>
									</List.Item>
								)
							)}
						</List.Root>
					)}
				</GridItem>
				<GridItem alignSelf="end">
					<span>Original Key: {song.originalKey}</span>
					{/* @todo - Conditionally display based on checkbox above, useState can't be in async () though. */}
					{/* <label htmlFor="originalKey">Change Key</label>
					<select
						className={styles.originalKey}
						name="originalKey"
						id="originalKey"
					>
						{originalKeys.map((key) => (
							<option key={key} value={key}>
								{key}
							</option>
						))}
					</select> */}
				</GridItem>
			</Grid>

			<Separator marginBlock="32px" />

			{sections &&
				sections.map((section: SectionType & { _key: string }) => {

					const { _key, description, lines, title } = section;

					return (
						<S.Section key={_key} aria-labelledby={_key}>
							<S.SectionTitle id={_key} title={title} />

							<S.SectionDescription description={description} />

							{lines &&
								lines.map((line: Line, index: number) => (
									<Fragment key={index}>
										<S.ChordLine chords={line.chords} />
										<S.LyricLine lyrics={line.lyrics} />
									</Fragment>
								))}
						</S.Section>
					);
				})}
		</SiteLayout>
	);
}
