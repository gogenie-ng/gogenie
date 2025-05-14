import { ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { Form, useNavigate } from "react-router";
import { toast } from "sonner";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
export function EmailForm({
	className,
	showText = true,
}: { className?: string; showText?: boolean }) {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const emailFormHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);
		try {
			navigate(`https://app.gogenie.co/signup?email=${email}`);
		} catch (error) {
			toast.error("Error signing up, please try again later");
		} finally {
			setLoading(false);
		}
	};
	return (
		<Form
			className={cn(
				"border flex items-center gap-2 p-2 mt-10 rounded-md",
				className,
			)}
			onSubmit={emailFormHandler}
		>
			<Input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="border-none w-full max-w-[350px] md:max-w-md bg-transparent focus-visible:outline-none focus-visible:ring-0"
				placeholder="Enter your email"
				autoFocus
				required
			/>
			<Button type="submit" disabled={loading}>
				{showText && (loading ? "Loading..." : "Sign up")}
				{loading ? (
					<Loader2
						className={cn("animate-spin size-4", showText ? "ml-2" : "")}
					/>
				) : (
					<ArrowUpRight className={cn("size-4", showText ? "ml-2" : "")} />
				)}
			</Button>
		</Form>
	);
}
