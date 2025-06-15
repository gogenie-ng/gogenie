import people from "assets/images/image.png";
import { Star } from "lucide-react";
import { type Feature, reviews } from "~/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { PopoverContent, PopoverRoot, PopoverTrigger } from "../ui/popover";

export function ReviewComment() {
	return (
		<section className="container flex justify-center px-4 md:px-6 py-12 md:py-24">
			<div className="flex flex-col items-center gap-24">
				<div className="flex flex-col items-center justify-center gap-6 text-center">
					<h2 className="text-4xl font-bold tracking-tight">
						Loved by{" "}
						<span className="text-primary font-extrabold">Customers</span>{" "}
						Everywhere
					</h2>
					<p className="max-w-sm text-lg text-muted-foreground">
						Here is what people are saying about their GoGenie experience
					</p>
				</div>
				<div className="flex flex-col items-center gap-16 md:gap-24 lg:flex-row lg:items-start lg:gap-32">
					<div className="w-full max-w-[28rem] rounded-xl px-6">
						<Carousel className="w-full">
							<CarouselContent>
								{reviews.map((review) => (
									<CarouselItem key={review.author}>
										<div className="flex flex-col max-w-md text-left gap-4">
											<div className="flex items-center gap-1">
												{new Array(review.stars).map((a) => (
													<Star
														key={a}
														className="text-yellow-500 size-5 fill-yellow-500"
													/>
												))}
											</div>
											<p className="text-xl tracking-tight font-medium text-card-foreground italic">
												"{review.text}"
											</p>
											<div className="flex items-center gap-4 mt-2">
												<Avatar className="size-14 border-2 border-primary">
													<AvatarImage
														src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${review.author.split(" ")[0]}`}
														className="size-14"
													/>
												</Avatar>
												<div className="grid gap-1">
													<p className="font-semibold text-lg">
														{review.author}
													</p>
													<p className="text-muted-foreground">{review.job}</p>
												</div>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<div className="flex justify-center gap-2 mt-6">
								<CarouselPrevious className="static" />
								<CarouselNext className="static" />
							</div>
						</Carousel>
					</div>
					<img
						src={people}
						className="h-96 rounded-2xl aspect-auto object-cover hidden lg:block"
						alt="Satisfied customers using GoGenie"
					/>
				</div>
			</div>
		</section>
	);
}

export function FeatureCard({ Icon, title, text }: Feature) {
	return (
		<PopoverRoot>
			<PopoverTrigger className="w-fit h-fit border-none hover:bg-background">
				<div className="border border-primary rounded-lg p-4 w-full max-w-xs h-auto flex flex-col items-start gap-4 bg-primary-foreground/5 dark:bg-primary/10 cursor-pointer select-none">
					<Button size="icon" aria-hidden tabIndex={-1}>
						<Icon />
					</Button>
					<h3 className="text-secondary text-lg md:text-xl font-semibold line-clamp-2 w-full">
						{title}
					</h3>
					<p className="text-sm md:text-base text-foreground line-clamp-4 w-full break-words">
						{text}
					</p>
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<div className="border border-primary rounded-lg p-6 w-full max-w-xs h-auto flex flex-col items-start gap-6 bg-primary-foreground/10 dark:bg-primary/20">
					<Button size="icon" aria-hidden tabIndex={-1}>
						<Icon />
					</Button>
					<h3 className="text-secondary text-lg md:text-xl font-semibold w-full">
						{title}
					</h3>
					<p className="text-sm md:text-base text-foreground whitespace-pre-wrap break-words max-h-[60vh] overflow-y-auto">
						{text}
					</p>
				</div>
			</PopoverContent>
		</PopoverRoot>
	);
}
