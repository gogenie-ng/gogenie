import achievement from "assets/images/achievement.svg";
import woman from "assets/images/girl-on-laptop.svg";
import bgImage from "assets/images/image.png";
import {
	Adobe,
	Airbnb,
	GoogleWordMark,
	Paystack,
	Piggyvest,
} from "assets/logos";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { EmailForm } from "~/components/marketing/email-form";
import { FaqAccordion } from "~/components/marketing/faq-accordion";
import { FeatureCard, ReviewComment } from "~/components/marketing/utilities";
import { Button } from "~/components/ui/button";
import { features, options } from "~/lib/constants";

export default function Index() {
	const navigate = useNavigate();
	return (
		<main className="flex flex-col items-center">
			<section className="pt-12 md:pt-20">
				<div className="container flex justify-center px-4 md:px-6">
					<div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
						<div className="max-w-[35rem]">
							<h1 className="text-4xl md:text-6xl font-semibold text-foreground">
								Book <span className="text-secondary">Trusted Helps</span> for{" "}
								<span className="text-secondary">Everyday Tasks</span>
							</h1>
							<p className="mt-6 text-xl md:text-3xl text-muted-foreground">
								Focus on what matters, we handle the rest.
							</p>
							<EmailForm />
						</div>
						<div className="bg-accent/25 dark:bg-accent-foreground -mt-15 hidden lg:block size-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]">
							<img src={woman} alt="hero-image" className="size-100" />
						</div>
					</div>
				</div>
			</section>
			<div className="container flex items-center justify-between gap-4 p-4 md:p-2">
				<GoogleWordMark />
				<Paystack />
				<Piggyvest />
				<Adobe />
				<Airbnb />
			</div>
			<section className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center gap-10 w-full">
					<div className="flex flex-col items-center justify-center gap-4 text-center">
						<h2 className="text-4xl">
							Our <span className="text-primary">Services</span>
						</h2>
						<p className="max-w-sm">
							Experience convenience redefined with services covering travel,
							logistics, groceries, and more.
						</p>
					</div>{" "}
					<div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-start">
						{options.map((v) => (
							<Button
								aria-hidden
								tabIndex={-1}
								size={"lg"}
								variant={"secondary"}
								className="border min-w-[120px] flex-1 md:flex-none text-center"
								key={v}
							>
								{v}
							</Button>
						))}
					</div>
				</div>
			</section>
			<ReviewComment
				text="GoGenie has been a lifesaver! I no longer have to stress about groceries or finding reliable help for everyday errands. Booking is seamless, and I can finally focus on work without distractions!"
				author="Ada O."
				job="Busy Professional"
			/>
			<section className="container flex  justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center gap-20">
					<div className="flex flex-col items-center justify-center gap-4 text-center">
						<h2 className="text-4xl">
							Simple, <span className="text-primary">Reliable</span> and Fast
						</h2>
						<p className="max-w-sm">
							From posting your task to getting it done, it's a breeze. Describe
							your need, choose from our verified professionals. Relax as we
							take care of the rest.
						</p>
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
			<ReviewComment
				text="I needed urgent logistics support for my business, and GoGenie delivered! The process was quick, and the service was top-notch. I highly recommend them for anyone looking for reliable help."
				author="Tunde A."
				job="Small Business Owner"
			/>
			<section className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
				<img
					src={bgImage}
					className="rounded aspect-video py-4 placeholder-primary/45"
					alt="background"
				/>
			</section>
			<ReviewComment
				text="As someone who travels often, GoGenie has been a game-changer. I can book logistics and errands from anywhere, and the service is always reliable. It's like having a personal assistant at my fingertips!"
				author="Jide K."
				job="Frequent Traveler"
			/>
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
			<ReviewComment
				text="Managing a home and kids can be overwhelming. But with GoGenie, I get trusted help whenever I need it. From household tasks to last-minute errands, they've got me covered!"
				author="Chinenye M."
				job="Full-time Mom"
			/>
			<section className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
				<div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
					<div className="max-w-[25rem] mt-10">
						<h1 className="text-2xl md:text-4xl font-medium text-foreground">
							Improve your <span className="text-secondary">Earnings</span>
						</h1>
						<p className="mt-6 text-lg md:text-xl text-muted-foreground">
							Focus on what matters, we handle the rest.
						</p>
						<Button
							className="p-2 mt-10"
							size={"lg"}
							onClick={() => navigate("https://app.gogenie.co")}
						>
							Earn some extra income <ArrowUpRight className="ml-2" />
						</Button>
					</div>
					<div className="bg-accent/25 dark:bg-accent-foreground hidden lg:block size-80 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]">
						<img src={achievement} alt="hero-image" className="size-80" />
					</div>
				</div>
			</section>
		</main>
	);
}
