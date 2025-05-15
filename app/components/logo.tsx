import { Flame } from "lucide-react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";

export function Logo({ className }: { className?: string }) {
	return (
		<Link
			to="/"
			className={cn("flex items-center gap-2 font-medium", className)}
		>
			<div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
				<Flame className="size-4" />
			</div>
			GoGenie
		</Link>
	);
}
