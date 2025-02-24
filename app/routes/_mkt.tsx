import { useLoaderData, Outlet } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { SanityProvider } from "~/sanity/provider";
import { Suspense } from "react";
import LiveVisualEditing from "~/components/live-visual-editing";
import { Navbar } from "~/components/marketing/nav-bar";

export async function loader({ context }: LoaderFunctionArgs) {
	const { env } = context.cloudflare;
	return {
		ENV: {
			SANITY_STUDIO_PROJECT_ID: env.SANITY_STUDIO_PROJECT_ID,
			SANITY_STUDIO_DATASET: env.SANITY_STUDIO_DATASET,
			SANITY_STUDIO_URL: env.SANITY_STUDIO_URL,
			SANITY_STUDIO_STEGA_ENABLED: env.SANITY_STUDIO_STEGA_ENABLED,
		},
	};
}

export default function MarketingLayout() {
	const { ENV } = useLoaderData<typeof loader>();
	return (
		<SanityProvider>
			<Navbar />
			<Outlet />
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: `window.ENV = ${JSON.stringify(ENV)}`,
				}}
			/>
			<Suspense>
				<LiveVisualEditing />
			</Suspense>
		</SanityProvider>
	);
}
