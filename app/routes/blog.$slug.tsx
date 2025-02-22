import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";

import Post from "~/components/blog/post";
import { useQuery } from "~/sanity/loader";
import { POST_QUERY } from "~/sanity/queries";
import { getLoadQuery } from "~/sanity/loader.server";

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
	const loadQuery = getLoadQuery(context.cloudflare.env);
	const initial = await loadQuery<SanityDocument>(POST_QUERY, {
		slug: params.slug,
	});

	return { initial, query: POST_QUERY, params };
};

export default function Page() {
	const { initial, query, params } = useLoaderData<typeof loader>();
	const { data, loading } = useQuery<typeof initial.data>(query, params, {
		initial,
	});

	if (loading && !data) {
		return <div>Loading...</div>;
	}

	return data ? <Post post={data} /> : null;
}
