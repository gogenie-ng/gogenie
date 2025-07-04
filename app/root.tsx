import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { Toaster } from "./components/ui/sonner";
import "./app.css";
// import { themeSessionResolver } from "./sessions.server";

// export async function loader({ request }: Route.LoaderArgs) {
// 	const { getTheme } = await themeSessionResolver(request);
// 	return {
// 		theme: getTheme(),
// 	};
// }

export const links: Route.LinksFunction = () => {
	return [
		{
			rel: "icon",
			href: "/favicon.png",
			type: "image/png",
		},
	];
};

export default function App() {
	// const data = useLoaderData<typeof loader>();
	// const [theme] = useTheme();
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<Toaster richColors />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
