import logo from "assets/images/logo.png";
import { Link } from "react-router";
import { cn } from "~/lib/utils";

export function Logo({ className }: { className?: string }) {
	return (
		<Link
			to="/"
			className={cn("flex items-center gap-2 font-medium", className)}
		>
			<img src={logo} className="h-6 sm:h-8 md:h-10 w-auto" alt="GoGenie" />
		</Link>
	);
}
