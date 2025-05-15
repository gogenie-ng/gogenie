import { Link } from "react-router";
import { buttonVariants } from "~/components/ui/button";
import { Logo } from "../logo";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex items-center justify-between py-3 px-4">
				<Logo />
				<div className="flex items-center gap-2">
					<Link className={buttonVariants()} to={"/"}>
						Book a task
					</Link>
					<Link className={buttonVariants({ variant: "outline" })} to={"/"}>
						Join
					</Link>
				</div>
			</div>
		</header>
	);
}
