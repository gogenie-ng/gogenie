import type { SanityDocument } from "@sanity/client";
import Post from "~/components/blog/post";
import { getClient } from "~/sanity/client";
import { POST_QUERY } from "~/sanity/queries";
import type { Route } from "./+types/_mkt.blog.$slug";

export const loader = async ({ params }: Route.LoaderArgs) => {
	const initial = await getClient().fetch<SanityDocument>(POST_QUERY, {
		slug: params.slug,
	});

	return { initial, query: POST_QUERY, params };
};

export default function Page({ loaderData }: Route.ComponentProps) {
	const { initial } = loaderData;

	return initial ? <Post post={initial} /> : null;
}
