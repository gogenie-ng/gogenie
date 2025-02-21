declare global {
	interface Window {
		ENV: {
			SANITY_STUDIO_PROJECT_ID: string;
			SANITY_STUDIO_DATASET: string;
			SANITY_STUDIO_URL: string;
			SANITY_STUDIO_STEGA_ENABLED: string;
		};
	}
}

export const getSanityConfig = (env: Env) => {
	const {
		SANITY_STUDIO_PROJECT_ID,
		SANITY_STUDIO_DATASET,
		SANITY_STUDIO_URL = "http://localhost:3333",
		SANITY_STUDIO_STEGA_ENABLED = "false",
	} = env;

	return {
		projectId: SANITY_STUDIO_PROJECT_ID,
		dataset: SANITY_STUDIO_DATASET,
		studioUrl: SANITY_STUDIO_URL,
		stegaEnabled: SANITY_STUDIO_STEGA_ENABLED === "true",
	};
};
