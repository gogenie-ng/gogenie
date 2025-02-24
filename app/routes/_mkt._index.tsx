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
import { AudioLines, Play, Signal } from "lucide-react";
import building from "assets/images/building.jpg";
import house from "assets/images/build.jpg";
import { SquiggleOne } from "assets/icons/squiggle-one";
import { SquiggleTwo } from "assets/icons/squiggle-two";

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
	);
}
