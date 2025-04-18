import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "../logo";
import { EmailForm } from "./email-form";
import { footerLinks } from "~/lib/constants";
import { Link } from "@remix-run/react";

export function Footer() {
	return (
		<footer className="w-full border-t border-secondary mt-10">
			{/* top section */}
			<div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
				<div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
					<Logo />
					<EmailForm showText={false} className="w-full lg:w-auto" />
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
					{footerLinks.map((item) => (
						<ul key={item.title}>
							<li className="mb-3 text-lg font-semibold text-accent">
								{item.title}
							</li>
							{item.links.map((i) => (
								<li key={i.link}>
									<Link
										to={i.url}
										className="text-secondary hover:text-primary transition"
									>
										{i.link}
									</Link>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto px-6 py-4 border-t border-secondary flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
				<span className="text-secondary">
					&copy; {new Date().getFullYear()} Gogenie. All Rights Reserved
				</span>
				<div className="flex items-center gap-4">
					<a
						href="https://www.facebook.com/gogenie.ng"
						target="_blank"
						rel="noreferrer"
						className="text-secondary hover:text-primary transition"
					>
						<Facebook size={20} />
					</a>
					<a
						href="https://twitter.com/gogenie_ng"
						target="_blank"
						rel="noreferrer"
						className="text-secondary hover:text-primary transition"
					>
						<Twitter size={20} />
					</a>
					<a
						href="https://www.instagram.com/gogenie.ng/"
						target="_blank"
						rel="noreferrer"
						className="text-secondary hover:text-primary transition"
					>
						<Instagram size={20} />
					</a>
					<a
						href="https://www.linkedin.com/company/gogenie"
						target="_blank"
						rel="noreferrer"
						className="text-secondary hover:text-primary transition"
					>
						<Linkedin size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
