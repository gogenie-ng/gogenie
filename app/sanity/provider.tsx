import { createClient } from "@sanity/client";
import { createContext, useEffect, useState } from "react";

// Create a context for the Sanity client
export const SanityContext = createContext(undefined);

// Provider component that always renders and maintains consistent hook calls
export function SanityProvider({ children }: { children: React.ReactNode }) {
	// Always initialize state
	const [client, setClient] = useState(() => {
		// Return a non-functional client during server render
		return createClient({
			projectId: "placeholder",
			dataset: "placeholder",
			useCdn: false,
			apiVersion: "2024-02-28",
			stega: { enabled: false },
		});
	});

	// Always call useEffect
	useEffect(() => {
		// Only update client on the client-side when window.ENV is available
		const newClient = createClient({
			projectId: window.ENV.SANITY_STUDIO_PROJECT_ID,
			dataset: window.ENV.SANITY_STUDIO_DATASET,
			useCdn: true,
			apiVersion: "2024-02-28",
			stega: {
				enabled: window.ENV.SANITY_STUDIO_STEGA_ENABLED === "true",
				studioUrl: window.ENV.SANITY_STUDIO_URL,
			},
		});
		setClient(newClient);
	}, []);

	return (
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		<SanityContext.Provider value={client as any}>
			{children}
		</SanityContext.Provider>
	);
}
