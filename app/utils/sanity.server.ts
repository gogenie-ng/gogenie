import { createClient } from "@sanity/client";

export const getSanityClient = (env: Env) => {
	return createClient({
		projectId: env.SANITY_STUDIO_PROJECT_ID,
		dataset: env.SANITY_STUDIO_DATASET,
		useCdn: true,
		apiVersion: "2024-02-28",
		stega: {
			enabled: env.SANITY_STUDIO_STEGA_ENABLED === "true",
			studioUrl: env.SANITY_STUDIO_URL ?? "http://localhost:3333",
		},
	});
};
