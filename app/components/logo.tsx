import { Flame } from "lucide-react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import logo from "assets/images/logo.png";

export function Logo({ className }: { className?: string }) {
	return (
		<Link
			to="/"
			className={cn("flex items-center gap-2 font-medium", className)}
		>
			<img src={logo} className="h-10 w-fit" alt="GoGenie" />
		</Link>
	);
}
