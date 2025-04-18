import { Form, Link, useNavigate } from "@remix-run/react";
import { Loader } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { GoogleSignIn } from "~/components/auth/google";
import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { signIn } from "~/utils/auth.client";

export default function LogIn() {
	const [pending, startTransition] = useTransition();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const submit = () => {
		startTransition(() => {
			async () => {
				try {
					await signIn.email(
						{ email, password },
						{
							onError: (ctx) => {
								toast.error(ctx.error.message);
							},
							onSuccess: () => {
								toast.success("Signed in successfully");
								navigate("/dashboard");
							},
						},
					);
				} catch (error) {
					toast.error("Something went wrong", {
						description:
							error instanceof Error ? error.message : "Internal server error",
					});
				}
			};
		});
	};
	return (
		<main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<div className="flex flex-col gap-6">
					<Logo />
					<Card>
						<CardHeader>
							<CardTitle>Login to your account</CardTitle>
							<CardDescription>
								Enter your email below to login to your account
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Form onSubmit={submit} className="flex flex-col gap-6">
								<div className="grid gap-3">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										value={email}
										autoComplete="email"
										onChange={(e) => setEmail(e.target.value)}
										placeholder="m@example.com"
										required
									/>
								</div>
								<div className="grid gap-3">
									<div className="flex items-center">
										<Label htmlFor="password">Password</Label>
										<Link
											to="/reset"
											className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
										>
											Forgot your password?
										</Link>
									</div>
									<Input
										id="password"
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>
								<Button type="submit" className="w-full" disabled={pending}>
									{pending ? <Loader className="animate-spin" /> : "Sign in"}
								</Button>
							</Form>
							<GoogleSignIn />
							<div className="mt-4 text-center text-sm">
								Don&apos;t have an account?{" "}
								<Link to="/signup" className="underline underline-offset-4">
									Sign up
								</Link>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
}
