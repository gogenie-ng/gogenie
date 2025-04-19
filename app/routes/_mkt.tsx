import { Outlet } from "react-router";
import { SanityVisualEditing } from "~/components/blog/live-visual-editing";
import { Footer } from "~/components/marketing/footer";
import { Navbar } from "~/components/marketing/nav-bar";
import { previewContext } from "~/sanity/preview";
import type { Route } from "./+types/_mkt";

export async function loader({ request, context }: Route.LoaderArgs) {
	const { env } = context.cloudflare;
	const { preview } = await previewContext(request.headers);
	const ENV = {
		PUBLIC_SANITY_PROJECT_ID: env.PUBLIC_SANITY_PROJECT_ID,
		PUBLIC_SANITY_DATASET: env.PUBLIC_SANITY_DATASET,
		PUBLIC_SANITY_STUDIO_URL: env.PUBLIC_SANITY_STUDIO_URL,
	};

	return { preview, ENV };
}

export default function MarketingLayout({ loaderData }: Route.ComponentProps) {
	const { ENV, preview } = loaderData;
	return (
		<>
			<Navbar />
			<Outlet />
			{preview && <SanityVisualEditing />}
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: `window.ENV = ${JSON.stringify(ENV)}`,
				}}
			/>
			<Footer />
		</>
	);
}
