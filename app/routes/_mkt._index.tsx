import type { SanityDocument } from "@sanity/client";
import genie from "assets/images/genie.png";
import people from "assets/images/people.jpg";
import { UserCheck, Users2 } from "lucide-react";
import { Link } from "react-router";
import { BlogSection } from "~/components/marketing/blog-section";
import { FaqAccordion } from "~/components/marketing/faq-accordion";
import { FeatureCard, ReviewComment } from "~/components/marketing/utilities";
import { buttonVariants } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { features, services } from "~/lib/constants";
import { getClient } from "~/sanity/client";
import { previewContext } from "~/sanity/preview";
import { POSTS_QUERY } from "~/sanity/queries";
import type { Route } from "./+types/_mkt._index";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const { options } = await previewContext(request.headers);
	const initial = await getClient().fetch<SanityDocument[]>(
		POSTS_QUERY,
		{},
		options,
	);
	return { initial };
};

export default function Index({ loaderData }: Route.ComponentProps) {
	const { initial } = loaderData;
	return (
		<main className="flex flex-col items-center">
			<section className="pt-12 md:pt-20 bg-primary/40 w-full">
				<div className="container flex justify-center px-4 md:px-6">
					<div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
						<img
							src={genie}
							alt="hero-image"
							className="hidden lg:block size-100"
						/>
						<div className="max-w-[35rem]">
							<h1 className="text-4xl md:text-6xl font-semibold text-foreground">
								Book <span className="text-secondary">Trusted Helps</span> for{" "}
								<span className="text-secondary">Everyday Tasks</span>
							</h1>
							<p className="mt-6 text-xl md:text-3xl text-muted-foreground">
								Focus on what matters, we handle the rest.
							</p>
							<div className="flex items-center gap-4 mt-4">
								<Link
									className={buttonVariants({ size: "lg" })}
									to={"https://app.gogenie.co"}
								>
									Book a task
								</Link>
								<Link
									className={buttonVariants({ variant: "outline", size: "lg" })}
									to={"https://app.gogenie.co"}
								>
									Become a service provider
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center w-full">
					<h2 className="text-4xl">
						How <span className="text-primary">GoGenie</span> Works
					</h2>
					<div className="grid md:grid-cols-2 gap-2 p-4 w-full">
						{[
							"Contact GoGenie",
							"Describe what you want done",
							"Get an offer, accept and checkout",
							"Task delivered",
						].map((step, index) => (
							<div key={step} className="flex items-center gap-2 md:p-4">
								<span className="rounded-full bg-primary text-primary-foreground size-6 flex items-center justify-center">
									{index + 1}
								</span>{" "}
								<p className="text-xl font-medium">{step}</p>
							</div>
						))}
					</div>
					<div className="flex items-center gap-4 md:place-self-start mt-4">
						<Link
							to={"https://app.gogenie.co"}
							className={buttonVariants({ size: "lg" })}
						>
							Chat with GoGenie
						</Link>
						<Link
							to={"https://app.gogenie.co"}
							className={buttonVariants({ size: "lg", variant: "outline" })}
						>
							Book a demo call
						</Link>
					</div>
				</div>
			</div>
			<section className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center gap-10 w-full">
					<h2 className="text-4xl">
						Our <span className="text-primary">Services</span>
					</h2>
					<div className="hidden md:grid grid-cols-4 gap-4 w-full">
						{services.map((s) => (
							<Card
								key={s.title}
								className="relative flex flex-col aspect-square"
							>
								<div className="relative flex-1">
									<img
										className="absolute inset-0 w-full h-full object-cover"
										src={s.image}
										alt={s.title}
										loading="lazy"
									/>
								</div>
								<p className="place-self-center-safe">{s.title}</p>
							</Card>
						))}
					</div>
					<div className="grid md:hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
						{services.slice(0, 8).map((s) => (
							<Card
								key={s.title}
								className="relative flex flex-col aspect-square"
							>
								<div className="relative flex-1">
									<img
										className="absolute inset-0 w-full h-full object-cover"
										src={s.image}
										alt={s.title}
										loading="lazy"
									/>
								</div>
								<p className="place-self-center-safe">{s.title}</p>
							</Card>
						))}
					</div>
				</div>
			</section>
			<ReviewComment />
			<section className="container flex  justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center gap-20">
					<div className="flex flex-col items-center justify-center gap-4 text-center">
						<h2 className="text-4xl">
							Smart Solutions,{" "}
							<span className="text-primary">Fast Results!</span>
						</h2>
						<p className="max-w-sm">Partner with GoGenie, get more customers</p>
					</div>
					<div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-start gap-4 w-full max-w-full overflow-x-hidden">
						{features.map((f) => (
							<FeatureCard
								Icon={f.Icon}
								title={f.title}
								text={f.text}
								key={f.title}
							/>
						))}
					</div>
				</div>
			</section>
			<BlogSection posts={initial} />
			<section className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center gap-10 w-full">
					<div className="flex flex-col items-center justify-center gap-4 text-center">
						<h2 className="text-4xl">
							Frequently Asked <span className="text-primary">Questions</span>
						</h2>
						<p className="max-w-sm">
							Experience convenience redefined with services covering travel,
							logistics, groceries, and more.
						</p>
					</div>
					<FaqAccordion />
				</div>
			</section>
			<section className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
					<div className="max-w-[25rem] mt-10">
						<h1 className="text-2xl md:text-4xl font-semibold text-foreground">
							Ready to make life easier?
						</h1>
						<p className="mt-6 text-lg md:text-xl text-muted-foreground">
							Join thousands of people already using GoGenie to get tasks done,
							grow their services and connect smarter.
						</p>
						<div className="flex items-center gap-4 mt-10 p-2">
							<Link to={"https://app.gogenie.co"} className={buttonVariants()}>
								<Users2 /> Join GoGenie
							</Link>
							<Link
								to={"https://app.gogenie.co"}
								className={buttonVariants({ variant: "outline" })}
							>
								<UserCheck /> Become a service provider
							</Link>
						</div>
					</div>
					<img
						src={people}
						alt="hero-image"
						className="h-80 rounded-xl aspect-video"
						loading="lazy"
					/>
				</div>
			</section>
		</main>
	);
}
