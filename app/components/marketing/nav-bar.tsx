import { Link } from "@remix-run/react";
import { type LucideIcon, Menu } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
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
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";
import { type MenuItem, menu, mobileExtraLinks } from "~/lib/constants";
import { cn } from "~/lib/utils";
import { Logo } from "../logo";

export const Navbar = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex items-center justify-between py-3 px-4">
				<nav className="hidden w-full flex-1 items-center justify-between lg:flex">
					<Logo className="transition-transform hover:scale-105" />
					<NavigationMenu>
						<NavigationMenuList className="gap-2">
							{menu.map((item) => renderMenuItem(item as MenuItem))}
						</NavigationMenuList>
					</NavigationMenu>
					<Link
						to="/app"
						className={cn(
							buttonVariants(),
							"group transition-all duration-200 hover:scale-105",
						)}
					>
						Get started
						<ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</Link>
				</nav>
				<div className="flex w-full flex-1 items-center justify-between lg:hidden">
					<Logo className="transition-transform hover:scale-105" />
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="shrink-0 hover:bg-primary/10"
							>
								<Menu className="size-5" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="flex w-[85vw] max-w-sm flex-col"
						>
							<SheetHeader className="border-b pb-4">
								<SheetTitle>
									<Logo />
								</SheetTitle>
							</SheetHeader>
							<ScrollArea className="flex flex-1 flex-col items-center justify-between px-8 py-6">
								<div className="space-y-6">
									<Accordion
										type="single"
										collapsible
										className="w-full transition-all"
									>
										{menu.map((item) => renderMobileMenuItem(item as MenuItem))}
									</Accordion>
									<div className="border-t pt-4">
										<nav className="grid grid-cols-2 gap-2">
											{mobileExtraLinks.map((link) => (
												<a
													key={link.name}
													className="inline-flex h-10 items-center justify-start rounded-md px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
													href={link.url}
												>
													{link.name}
												</a>
											))}
										</nav>
									</div>
								</div>
								<Link
									to="/signup"
									className={cn(
										buttonVariants({ size: "lg" }),
										"group transition-all duration-200 hover:scale-105",
									)}
								>
									Sign up
									<ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
								</Link>
							</ScrollArea>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

const renderMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<NavigationMenuItem key={item.title}>
				<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
						{item.items.map(({ title, url, description, icon: Icon }) => (
							<ListItem
								key={title}
								title={title}
								href={url}
								className="transition-all duration-200 hover:scale-[1.02]"
								Icon={Icon}
								description={description}
							/>
						))}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
		);
	}

	return (
		<NavigationMenuItem key={item.title}>
			<Link
				to={item.url}
				className={buttonVariants({
					variant: "ghost",
					className:
						"text-muted-foreground hover:bg-primary/10 hover:text-primary",
				})}
			>
				{item.title}
			</Link>
		</NavigationMenuItem>
	);
};

const renderMobileMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<AccordionItem key={item.title} value={item.title} className="border-b-0">
				<AccordionTrigger className="py-3 font-semibold hover:no-underline hover:text-primary">
					{item.title}
				</AccordionTrigger>
				<AccordionContent>
					<div className="space-y-3">
						{item.items.map(({ title, url, description, icon: Icon }) => (
							<Link
								key={title}
								to={url}
								className="flex select-none gap-4 rounded-md p-4 text-sm leading-none outline-none transition-all duration-200 hover:bg-primary/10 hover:text-primary"
							>
								{Icon && <Icon className="size-5 shrink-0" />}
								<div className="space-y-2">
									<h4 className="font-medium">{title}</h4>
									{description && (
										<p className="line-clamp-2 text-sm text-muted-foreground">
											{description}
										</p>
									)}
								</div>
							</Link>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>
		);
	}

	return (
		<Link
			key={item.title}
			to={item.url}
			className="block py-3 font-semibold transition-colors hover:text-primary"
		>
			{item.title}
		</Link>
	);
};

const ListItem = ({
	href,
	className,
	Icon,
	title,
	description,
}: {
	href: string;
	className?: string;
	Icon?: LucideIcon;
	title: string;
	description?: string;
}) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					className={cn(
						"block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					href={href}
				>
					<div className="flex items-center gap-2">
						{Icon && <Icon className="size-6 shrink-0" />}
						<h3 className="text-lg font-medium leading-none">{title}</h3>
					</div>
					<p className="line-clamp-2 text-sm text-muted-foreground">
						{description}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
};
