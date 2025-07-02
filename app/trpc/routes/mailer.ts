import { env } from "cloudflare:workers";
import type { TRPCRouterRecord } from "@trpc/server";
import { Resend } from "resend";
import { contactFormSchema } from "~/lib/constants";
import { userConfirmBody } from "~/mailer/emails/user-confirm";
import { publicProcedure } from "../utils";

const resend = new Resend(env.RESEND_API_KEY);

export const mailerRouter = {
	contactForm: publicProcedure
		.input(contactFormSchema)
		.mutation(async ({ ctx, input }) => {
			try {
				await resend.emails.send({
					from: "GoGenie Mailing <mails@gogenie.co>",
					to: "support@gogenie.co",
					subject: `Response from user: ${input.email}`,
					text: JSON.stringify(input),
				});
				const { error } = await resend.emails.send({
					from: "GoGenie Support <support@gogenie.co>",
					to: `${input.email}`,
					subject: "Message received confirmation - GoGenie",
					html: await userConfirmBody(),
				});
				if (error) {
					return { error: error.message };
				}
				return { success: true, message: "Message received successfully" };
			} catch (error) {
				return {
					error:
						error instanceof Error ? error.message : "Internal server erro",
				};
			}
		}),
} satisfies TRPCRouterRecord;
