import type { SanityDocument } from "@sanity/client";
import Posts from "~/components/blog/posts";
import { getClient } from "~/sanity/client";
import { previewContext } from "~/sanity/preview";
import { POSTS_QUERY } from "~/sanity/queries";
import type { Route } from "./+types/_mkt.blog._index";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const { options } = await previewContext(request.headers);
	const initial = await getClient().fetch<SanityDocument[]>(
		POSTS_QUERY,
		{},
		options,
	);
	return { initial, query: POSTS_QUERY, params: {} };
};

export default function Index({ loaderData }: Route.ComponentProps) {
	const { initial } = loaderData;

	return initial ? <Posts posts={initial} /> : null;
}
