import { sanityFetch } from "@/sanity/lib/live";
import { Artist, Song } from "@/sanity.types";
import { SONG_LINK_LIST_QUERY, ARTIST_LINK_LIST_QUERY } from "@/sanity/lib/queries";
import { List } from "@chakra-ui/react";
import SiteLayout from "@/components/SiteLayout";
import Link from "@/components/Link";
import { H1, H2 } from "@/components/Heading";

export default async function IndexPage() {
	const { data: songs } = (await sanityFetch({
		query: SONG_LINK_LIST_QUERY,
	})) as { data: Pick<Song, "_id" | "title" | "slug">[] };

	const { data: artists } = (await sanityFetch({
		query: ARTIST_LINK_LIST_QUERY,
	})) as { data: Pick<Artist, "_id" | "title" | "slug">[] };

	return (
		<SiteLayout>
			<H1>Songs App</H1>
			<H2>Songs</H2>
			<List.Root>
				{songs.map((song) => (
					<List.Item key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>{song?.title}</Link>
					</List.Item>
				))}
			</List.Root>
			<H2>Artists</H2>
			<List.Root>
				{artists.map((artist) => (
					<List.Item key={artist._id}>
						<Link href={`/artists/${artist?.slug?.current}`}>
							{artist?.title}
						</Link>
					</List.Item>
				))}
			</List.Root>
		</SiteLayout>
	);
}
