import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { redirect } from "react-router";
import { getClient } from "~/sanity/client";
import { commitSession, getSession } from "~/sanity/preview";
import type { Route } from "./+types/enable";

export const loader = async ({ request, context }: Route.LoaderArgs) => {
	const { env } = context.cloudflare;
	if (!env.SANITY_VIEWER_TOKEN) {
		throw new Response("Preview mode missing token", { status: 401 });
	}

	const clientWithToken = getClient().withConfig({
		token: env.SANITY_VIEWER_TOKEN,
	});

	const { isValid, redirectTo = "/" } = await validatePreviewUrl(
		clientWithToken,
		request.url,
	);

	if (!isValid) {
		throw new Response("Invalid secret", { status: 401 });
	}

	const session = await getSession(request.headers.get("Cookie"));
	await session.set("projectId", env.PUBLIC_SANITY_PROJECT_ID);

	return redirect(redirectTo, {
		headers: {
			"Set-Cookie": await commitSession(session),
		},
	});
};
