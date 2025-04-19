import type { Feature } from "~/lib/constants";
import { Button } from "../ui/button";
import {
	PopoverBody,
	PopoverButton,
	PopoverContent,
	PopoverHeader,
	PopoverLabel,
	PopoverRoot,
	PopoverTrigger,
} from "../ui/popover";

export function ReviewComment({
	text,
	author,
	job,
}: { text: string; author: string; job: string }) {
	return (
		<section className="container flex justify-center px-4 md:px-6 pt-4 md:pt-6">
			<div className="flex flex-col max-w-md text-left gap-2">
				<span className="text-6xl md:text-9xl italic text-primary">"</span>
				<p className="items-stretch -mt-10 md:-mt-18">{text}</p>
				<div className="text-sm">
					{author} - {job}
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
