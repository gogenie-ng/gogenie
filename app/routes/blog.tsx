import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";

import Posts from "~/components/blog/posts";
import { createSanityClient } from "~/sanity/client";
import { useQuery } from "~/sanity/loader";
import { POSTS_QUERY } from "~/sanity/queries";

export const loader = async ({ context }: LoaderFunctionArgs) => {
	const client = createSanityClient(context.cloudflare.env);
	const data = await client.fetch<SanityDocument[]>(POSTS_QUERY);

	return { data };
};

export default function Index() {
	const { data } = useLoaderData<typeof loader>();

	return <Posts posts={data} />;
}
