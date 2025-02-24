import { Menu } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import { Button, buttonVariants } from "~/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	ListItem,
} from "~/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";
import { Logo } from "../logo";
import { type MenuItem, menu, mobileExtraLinks } from "~/lib/constants";
import { Link } from "@remix-run/react";

export const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center h-16 px-4">
			<nav className="hidden flex-1 justify-between lg:flex">
				<div className="flex items-center gap-8">
					<Logo />
					<NavigationMenu>
						<NavigationMenuList className="gap-2">
							{menu.map((item) => renderMenuItem(item as MenuItem))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-3">
					<Link
						to={"/login"}
						className={buttonVariants({ variant: "ghost", size: "sm" })}
					>
						Log in
					</Link>

					<Link to={"/signup"} className={buttonVariants({ size: "sm" })}>
						Sign up
					</Link>
				</div>
			</nav>
			<div className="flex flex-1 items-center justify-between lg:hidden">
				<Logo />
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="shrink-0">
							<Menu className="size-5" />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-80">
						<SheetHeader className="border-b pb-4">
							<SheetTitle>
								<Logo />
							</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col items-center justify-center px-4">
							<Accordion
								type="single"
								collapsible
								className="w-full flex flex-col"
							>
								{menu.map((item) => renderMobileMenuItem(item as MenuItem))}
							</Accordion>
							<div className="border-t pt-4">
								<nav className="grid grid-cols-2 gap-2">
									{mobileExtraLinks.map((link) => (
										<a
											key={link.name}
											className="inline-flex h-9 items-center justify-start rounded-md px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
											href={link.url}
										>
											{link.name}
										</a>
									))}
								</nav>
							</div>
							<div className="flex flex-col gap-2">
								<Link
									to={"/login"}
									className={buttonVariants({ variant: "ghost", size: "sm" })}
								>
									Log in
								</Link>

								<Link to={"/signup"} className={buttonVariants({ size: "sm" })}>
									Sign up
								</Link>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

const renderMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<NavigationMenuItem key={item.title} className="text-muted-foreground">
				<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul className="w-80 p-3">
						{item.items.map((subItem) => (
							<ListItem
								key={subItem.title}
								href={subItem.url}
								title={subItem.title}
							>
								{subItem.description}
							</ListItem>
						))}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
		);
	}

	return (
		<a
			key={item.title}
			className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
			href={item.url}
		>
			{item.title}
		</a>
	);
};

const renderMobileMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<AccordionItem key={item.title} value={item.title} className="border-b-0">
				<AccordionTrigger className="py-1 font-semibold hover:no-underline">
					{item.title}
				</AccordionTrigger>
				<AccordionContent className="mt-2">
					{item.items.map(({ title, url, description, icon: Icon }) => (
						<a
							key={title}
							className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
							href={url}
						>
							{Icon && <Icon className="size-5 shrink-0" />}
							<div>
								<div className="text-sm font-semibold">{title}</div>
								{description && (
									<p className="text-sm leading-snug text-muted-foreground">
										{description}
									</p>
								)}
							</div>
						</a>
					))}
				</AccordionContent>
			</AccordionItem>
		);
	}

	return (
		<a key={item.title} href={item.url} className="font-semibold py-1">
			{item.title}
		</a>
	);
};
