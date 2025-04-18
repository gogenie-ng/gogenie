import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./router";

export const client = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url:
				process.env.NODE_ENV === "production"
					? "https://gogenie.co/trpc"
					: "http://localhost:8787/trpc",
		}),
	],
});

console.log(await client.hello.query("Hono"));
