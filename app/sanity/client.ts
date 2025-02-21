import { createClient } from "@sanity/client";
import { getSanityConfig } from "./project-details";

export const createSanityClient = (env: Env) => {
	const { projectId, dataset, stegaEnabled, studioUrl } = getSanityConfig(env);

	return createClient({
		projectId,
		dataset,
		useCdn: true,
		apiVersion: "2024-02-28",
		stega: {
			enabled: stegaEnabled,
			studioUrl,
		},
	});
};
