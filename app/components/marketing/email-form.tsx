import { Form } from "@remix-run/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "@remix-run/react";

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
			navigate(`/signup?email=${email}`);
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
