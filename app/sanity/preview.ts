import { env } from "cloudflare:workers";
import type { FilteredResponseQueryOptions } from "@sanity/client";
import { createCookieSessionStorage } from "react-router";

let sessionStorage: ReturnType<typeof createCookieSessionStorage> | null = null;

function getSessionStorage() {
	if (sessionStorage) return sessionStorage;

	sessionStorage = createCookieSessionStorage({
		cookie: {
			httpOnly: true,
			name: "__sanity_preview",
			path: "/",
			sameSite: !import.meta.env.DEV ? "none" : "lax",
			secrets: [crypto.getRandomValues(new Uint8Array(32)).toString()],
			secure: !import.meta.env.DEV,
		},
	});

	return sessionStorage;
}

export const { getSession, commitSession, destroySession } = {
	getSession: (cookie: string | null) => getSessionStorage().getSession(cookie),
	commitSession: (session: any) => getSessionStorage().commitSession(session),
	destroySession: (session: any) => getSessionStorage().destroySession(session),
};

async function previewContext(
	headers: Headers,
): Promise<{ preview: boolean; options: FilteredResponseQueryOptions }> {
	const previewSession = await getSession(headers.get("Cookie"));

	const preview =
		previewSession.get("projectId") === env.PUBLIC_SANITY_PROJECT_ID;

	return {
		preview,
		options: preview
			? {
					perspective: "previewDrafts",
					stega: true,
					token: env.SANITY_VIEWER_TOKEN,
				}
			: {
					perspective: "published",
					stega: false,
				},
	};
}

export { previewContext };
