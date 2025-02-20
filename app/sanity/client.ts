import { createClient } from "@sanity/client";
import { stegaEnabled, projectId, dataset, studioUrl } from "./project-details";

// Do not import this into client-side components unless lazy-loaded
export const client = createClient({
	projectId,
	dataset,
	useCdn: true,
	apiVersion: "2024-02-28",
	stega: {
		enabled: stegaEnabled,
		studioUrl,
	},
});
