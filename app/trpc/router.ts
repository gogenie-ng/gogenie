import { mailerRouter } from "./routes/mailer";
import { createTRPCRouter } from "./utils";

export const appRouter = createTRPCRouter({
	mailer: mailerRouter,
});

export type AppRouter = typeof appRouter;
