import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { Slug } from "@/sanity.types";
import { ARTIST_FULL_DISPLAY_QUERY } from "@/sanity/lib/queries";
import AppLayout from "@/components/AppLayout";
import Link from "@/components/Link";
import { H1 } from "@/components/Heading";
import { List } from "@chakra-ui/react";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: artist } = await sanityFetch({
		query: ARTIST_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!artist) {
		notFound();
	}

	const { title } = artist;

	return {
		title: title + " | " + "Songs",
	};
}

export default async function ArtistPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: artist } = await sanityFetch({
		query: ARTIST_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!artist) {
		notFound();
	}

	const { title, songs } = artist;

	return (
		<AppLayout>
			{title && <H1>{title}</H1>}
			{songs && (
				<List.Root>
					{songs.map((song: { slug: Slug | null; title: string | null}) => (
						<List.Item key={song.slug?.current}>
							<Link href={`/songs/${song.slug?.current}`}>{song.title}</Link>
						</List.Item>
					))}
				</List.Root>
			)}
		</AppLayout>
	);
}
