import { initTRPC } from "@trpc/server";
import { sql } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/db";
import { user } from "~/db/schema";
import { auth } from "~/utils/auth.server";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
	hello: t.procedure.input(z.string().nullish()).query(({ input }) => {
		return `Hello ${input ?? "World"}!`;
	}),
	usersCount: t.procedure.query(async ({ ctx }) => {
		try {
			const authz = await auth(ctx.env).api.getSession({
				headers: new Headers(ctx.req.header()),
			});
			if (!authz?.user) {
				throw Error("Unauthorized");
			}
			const result = await db(ctx.env)
				.select({ count: sql<number>`count(*)`.mapWith(Number) })
				.from(user);
			return result[0].count;
		} catch (error) {
			throw Error(
				error instanceof Error ? error.message : "Internal server error",
			);
		}
	}),
});
// export type definition of API
export type AppRouter = typeof appRouter;
