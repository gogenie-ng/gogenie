import { env } from "cloudflare:workers";
import { createClient } from "@sanity/client";

declare global {
	interface Window {
		ENV: {
			PUBLIC_SANITY_PROJECT_ID: string;
			PUBLIC_SANITY_DATASET: string;
			PUBLIC_SANITY_STUDIO_URL: string;
		};
	}
}

let _client: ReturnType<typeof createClient> | null = null;

export function getClient() {
	if (_client) return _client;

	const sanityEnv = typeof document === "undefined" ? env : window.ENV;

	_client = createClient({
		projectId: sanityEnv.PUBLIC_SANITY_PROJECT_ID,
		dataset: sanityEnv.PUBLIC_SANITY_DATASET,
		apiVersion: "2024-12-01",
		useCdn: true,
		stega: {
			studioUrl: sanityEnv.PUBLIC_SANITY_STUDIO_URL,
		},
	});

	return _client;
}
