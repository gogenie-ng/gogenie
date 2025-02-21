import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";

import Post from "~/components/blog/post";
import { createSanityClient } from "~/sanity/client";
import { useQuery } from "~/sanity/loader";
import { POST_QUERY } from "~/sanity/queries";

export const loader = async ({ params, context }: LoaderFunctionArgs) => {
	const client = createSanityClient(context.cloudflare.env);
	const data = await client.fetch<SanityDocument>(POST_QUERY, {
		slug: params.slug,
	});
	if (!data) {
		throw new Response("Not Found", { status: 404 });
	}
	return { data };
};

export default function Page() {
	const { data } = useLoaderData<typeof loader>();
	return <Post post={data} />;
}
