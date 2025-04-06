import { Link } from "@remix-run/react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { AvatarCircles } from "components/magicui/avatar-circles";
import {
	Dialog,
	DialogHeader,
	DialogTitle,
	DialogContent,
	DialogTrigger,
} from "~/components/ui/dialog";
import { AudioLines, Play, Signal, ArrowDown, ArrowRight } from "lucide-react";
import building from "assets/images/building.jpg";
import house from "assets/images/build.jpg";
import skyscraper from "assets/images/skyscraper.jpg";
import houseAngle from "assets/images/house-angle.jpg";
import { SquiggleOne } from "assets/icons/squiggle-one";
import { Logo } from "~/components/logo";

const avatars = [
	{
		imageUrl: "https://avatars.githubusercontent.com/u/16860528",
		profileUrl: "https://github.com/dillionverma",
	},
	{
		imageUrl: "https://avatars.githubusercontent.com/u/20110627",
		profileUrl: "https://github.com/tomonarifeehan",
	},
	{
		imageUrl: "https://avatars.githubusercontent.com/u/106103625",
		profileUrl: "https://github.com/BankkRoll",
	},
	{
		imageUrl: "https://avatars.githubusercontent.com/u/59228569",
		profileUrl: "https://github.com/safethecode",
	},
];

export default function Index() {
	return (
		<main className="flex flex-col items-center">
			<section className="py-12 md:py-20">
				<div className="container flex justify-center px-4 md:px-6">
					<div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
						<div className="max-w-[30rem]">
							<h1 className="text-6xl font-medium text-foreground lg:7xl">
								We make it effortless for you.
							</h1>
							<p className="mt-6 text-lg text-muted-foreground">
								Say goodbye to manual bookings and free up your time to focus on
								your business or simply enjoy the extra freedom.
							</p>
							<div className="mt-10 flex gap-5">
								<Link
									to={"/dashboard"}
									className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
								>
									Get started
								</Link>
								<Link
									to={"#"}
									className={cn(
										buttonVariants({ variant: "secondary", size: "lg" }),
										"rounded-full",
									)}
								>
									Contact us
								</Link>
							</div>
							<div className="mt-12 flex gap-14 border-t border-muted">
								<div className="mt-8">
									<AvatarCircles numPeople={99} avatarUrls={avatars} />
									<div className="mt-4 flex flex-wrap items-center gap-4">
										<h3 className="text-5xl font-medium text-muted-foreground">
											97K
										</h3>
										<div className="max-w-28 text-base font-light leading-tight text-muted2-foreground">
											Users across the globe
										</div>
									</div>
								</div>
								<div className="mt-8 border-l border-muted pl-12">
									<Dialog>
										<DialogTrigger
											className={cn(
												buttonVariants({ size: "lg", variant: "outline" }),
												"rounded-full",
											)}
										>
											<Play />
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>What our users say</DialogTitle>
											</DialogHeader>
											<iframe
												width="560"
												height="315"
												className="w-full"
												src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=PHQ-OO6rnPU5fvxq"
												title="YouTube video player"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
												referrerPolicy="strict-origin-when-cross-origin"
												allowFullScreen
											/>
										</DialogContent>
									</Dialog>
									<p className="mt-4 max-w-28 text-base font-light leading-tight text-muted2-foreground">
										Watch promo video
									</p>
								</div>
							</div>
						</div>
						<div className="mx-auto max-w-[90vw] lg:mx-0">
							<div className="grid grid-cols-[4.8rem_5.625rem_10.75rem] grid-rows-[9.3rem_8.68rem_1.125rem_3.875rem] gap-[0.625rem] sm:grid-cols-[5.3rem_6.25rem_12rem] sm:grid-rows-[10.3rem_9.625rem_1.25rem_4.3rem] sm:gap-[0.8rem] xl:grid-cols-[_8.5rem_10rem_19.3rem] xl:grid-rows-[16.625rem_15.5rem_1.375rem_6.9rem] xl:gap-[1.25rem]">
								<div className="col-[2_/_-1] overflow-hidden rounded-3xl bg-blue-200">
									<img
										src={building}
										alt="should be word-mark"
										className="size-full object-cover object-center"
									/>
								</div>
								<div className="col-[1_/_2] row-[1_/_2] self-end">
									<SquiggleOne className="w-[4.375rem] fill-muted-foreground xl:w-[8rem]" />
								</div>
								<div className="col-[1_/_3] overflow-hidden rounded-3xl bg-muted">
									<div className="p-5 xl:p-7">
										<div className="flex gap-8">
											<h3 className="text-4xl leading-none text-foreground xl:text-7xl">
												99%
											</h3>
											<Signal className="size-9 stroke-foreground xl:size-14" />
										</div>
										<p className="mt-3 text-xs text-foreground md:text-sm xl:mt-7 xl:text-xl">
											Crystal clear{" "}
											<span className="font-bold text-muted2-foreground">
												voice and video
											</span>{" "}
											calls with no background noise
										</p>
									</div>
								</div>
								<div className="col-[2_/_3] row-[-3_/-1] flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-muted">
									<AudioLines className="stroke-foreground xl:size-27 mx-auto size-16" />
								</div>
								<div className="relative col-[3_/_4] row-[2_/_4] rounded-3xl bg-muted">
									<div className="h-full w-full overflow-hidden rounded-3xl">
										<img
											src={house}
											alt="should be the logo"
											className="size-full object-cover object-center"
										/>
									</div>
								</div>
								<div className="col-[-2_/_-1] row-[-1_/_-2]">
									<div className="flex w-full items-center gap-3">
										<div className="h-12 w-12 flex-shrink-0 rounded-full bg-muted" />
										<div className="flex w-full flex-col gap-1">
											<div className="h-6 w-[70%] rounded-lg bg-muted" />
											<div className="h-3 w-[40%] rounded-lg bg-muted" />
										</div>
									</div>
									<div className="mt-3 flex w-full items-center gap-3">
										<div className="h-12 w-12 flex-shrink-0 rounded-full bg-muted" />
										<div className="flex w-full flex-col gap-1">
											<div className="h-6 w-[70%] rounded-lg bg-muted" />
											<div className="h-3 w-[40%] rounded-lg bg-muted" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12">
				<div className="container flex flex-col items-center gap-16 lg:px-16">
					<div className="text-center">
						<p className="mb-6 text-xs font-medium tracking-wider uppercase">
							Tag Line
						</p>
						<h3 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
							Feature group
						</h3>
						<p className="mb-8 text-muted-foreground lg:max-w-2xl lg:text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
							doloremque mollitia fugiat omnis! Porro facilis quo animi
							consequatur. Explicabo.
						</p>
						<div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
							<Link to={"#features"} className={buttonVariants()}>
								<ArrowDown className="mr-2 size-4" />
								Explore features
							</Link>
							<Link
								to={"/dashboard"}
								className={buttonVariants({ variant: "outline" })}
							>
								Get started
							</Link>
						</div>
					</div>
					<div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
						<Link
							to={"#"}
							className="group relative col-span-2 overflow-clip rounded-lg sm:max-lg:col-span-1"
						>
							<img
								src={skyscraper}
								alt="placeholder"
								className="absolute h-full w-full object-cover object-center"
							/>
							<div className="relative flex h-full w-full flex-col items-start justify-between bg-primary/60 p-4 text-primary-foreground transition-colors hover:bg-primary/70 sm:aspect-[3/2] md:p-6 lg:p-10">
								<Logo className="mb-12 h-10 md:h-12" />
								<div className="flex items-center text-xs font-medium md:text-base lg:text-lg">
									Read more
									<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
								</div>
							</div>
						</Link>
						<div className="flex flex-col justify-between rounded-lg bg-accent p-4 sm:justify-end md:p-6 lg:p-10">
							<div className="mb-8 text-3xl sm:mb-2 lg:text-5xl">100+</div>
							<div className="text-xs md:text-base lg:text-lg">Metric 1</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
