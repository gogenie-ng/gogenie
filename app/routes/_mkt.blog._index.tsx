import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";

import Posts from "~/components/blog/posts";
import { useQuery } from "~/sanity/loader";
import { getLoadQuery } from "~/sanity/loader.server";
import { POSTS_QUERY } from "~/sanity/queries";

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const loadQuery = getLoadQuery(context.cloudflare.env);
	const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);
	return { initial, query: POSTS_QUERY, params: {} };
};

export default function Index() {
	const { initial, query, params } = useLoaderData<typeof loader>();
	const { data, loading } = useQuery<typeof initial.data>(query, params, {
		initial,
	});

	// `data` should contain the initial data from the loader
	// `loading` will only be true when Visual Editing is enabled
	if (loading && !data) {
		return <div>Loading...</div>;
	}

	return data ? <Posts posts={data} /> : null;
}
