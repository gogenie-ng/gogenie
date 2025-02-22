import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";
import { Suspense } from "react";
import {
	PreventFlashOnWrongTheme,
	ThemeProvider,
	useTheme,
} from "remix-themes";
import { Toaster } from "./components/ui/sonner";
import { themeSessionResolver } from "./sessions.server";

import "./tailwind.css";
import LiveVisualEditing from "./components/live-visual-editing";
import { SanityProvider } from "./sanity/provider";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap",
	},
];

export async function loader({ request, context }: LoaderFunctionArgs) {
	const { getTheme } = await themeSessionResolver(request);
	const { env } = context.cloudflare;
	return {
		theme: getTheme(),
		ENV: {
			SANITY_STUDIO_PROJECT_ID: env.SANITY_STUDIO_PROJECT_ID,
			SANITY_STUDIO_DATASET: env.SANITY_STUDIO_DATASET,
			SANITY_STUDIO_URL: env.SANITY_STUDIO_URL,
			SANITY_STUDIO_STEGA_ENABLED: env.SANITY_STUDIO_STEGA_ENABLED,
		},
	};
}

function Document({ children }: { children: React.ReactNode }) {
	const data = useLoaderData<typeof loader>();
	const [theme] = useTheme();
	return (
		<html lang="en" className={clsx(theme)}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	const { theme, ENV } = useLoaderData<typeof loader>();
	return (
		<ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
			<Document>
				<SanityProvider>
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
					<Toaster />
				</SanityProvider>
			</Document>
		</ThemeProvider>
	);
}
