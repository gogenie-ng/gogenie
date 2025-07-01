import { Link } from "react-router";
import { Mail, Phone, MessageSquare, Loader2 } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";
import { contactFormSchema } from "~/lib/constants";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "~/trpc/client";

export default function Page() {
	const trpc = useTRPC();
	const { mutateAsync, isPending } = useMutation(
		trpc.mailer.contactForm.mutationOptions(),
	);
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	const submit = async (values: z.infer<typeof contactFormSchema>) => {
		try {
			const { error, message } = await mutateAsync(values);
			if (error) {
				toast.error("Something went wrong", {
					description: error,
				});
				return;
			}
			toast.success(message);
			form.reset();
		} catch (error) {
			toast.error("Failed to send message");
		}
	};
	return (
		<main className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
			<div className="grid md:grid-cols-2 gap-4">
				<div className="flex flex-col items-start w-full gap-4 max-w-sm">
					<h2 className="text-4xl font-semibold">Contact Us</h2>
					<p>
						Have a question, feedback, or need help? We are here for you. You
						can call, email or fill this form here.
					</p>
					<Link
						to="mailto:support@gogenie.co"
						className="flex items-center gap-2 text-secondary"
					>
						<Mail className="mr-2 size-4" /> support@gogenie.co
					</Link>
					<Link
						to="tel:+23490123456788"
						className="flex items-center gap-2 text-secondary"
					>
						<Phone className="mr-2 size-4" /> +23490123456788
					</Link>
					<Link
						to="mailto:support@gogenie.co"
						className="flex items-center gap-2 text-secondary"
					>
						<MessageSquare className="mr-2 size-4" /> Chat with support
					</Link>
				</div>
				<Card>
					<CardHeader>
						<CardTitle>Get in Touch</CardTitle>
						<CardDescription>You can reach us any time</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(submit)}
								className="grid gap-4 w-full max-w-md"
							>
								<div className="flex items-center justify-between gap-2">
									<FormField
										name="first_name"
										control={form.control}
										label="First name"
										render={({ field }) => (
											<Input
												{...field}
												placeholder="First name"
												autoComplete="given-name"
												required
											/>
										)}
									/>
									<FormField
										name="last_name"
										control={form.control}
										label="Last name"
										render={({ field }) => (
											<Input
												{...field}
												placeholder="Last name"
												autoComplete="family-name"
												required
											/>
										)}
									/>
								</div>
								<FormField
									name="email"
									control={form.control}
									label="Email"
									render={({ field }) => (
										<Input
											{...field}
											placeholder="Email"
											type="email"
											autoComplete="email"
											required
										/>
									)}
								/>
								<FormField
									name="phone"
									control={form.control}
									label="Phone number"
									render={({ field }) => (
										<Input
											{...field}
											placeholder="Phone number"
											type="tel"
											autoComplete="tel"
											required
										/>
									)}
								/>
								<FormField
									name="message"
									control={form.control}
									label="Message"
									render={({ field }) => <Textarea {...field} required />}
								/>
								<Button disabled={isPending} type="submit">
									{isPending ? (
										<Loader2 className="size-4 animate-spin" />
									) : (
										"Send message"
									)}
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
