import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
	return (
		<footer className="w-full border-t border-secondary mt-10 px-6 md:px-8">
			<div className="grid grid-cols-3 gap-4">
				<div className="flex flex-col items-start">
					<h3 className="text-2xl font-medium my-8">Quick links</h3>
					<Link to={"/"}>Home</Link>
					<Link to={"/"}>How it works</Link>
					<Link to={"/"}>Services</Link>
					<Link to={"/"}>Become a Provider</Link>
					<Link to={"/"}>Blog</Link>
					<Link to={"/contact-us"}>Contact Us</Link>
				</div>
				<div className="flex flex-col items-start">
					<h3 className="text-2xl font-medium my-8">Company</h3>
					<Link to={"/"}>Terms and Conditions</Link>
					<Link to={"/"}>Privacy Policy</Link>
				</div>
				<div className="flex flex-col md:flex-row items-center py-12 gap-2">
					<Link
						to={"https://facebook.com/gogenie.ng"}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center rounded-full bg-primary text-primary-foreground size-10"
					>
						<Facebook size={20} />
					</Link>
					<Link
						to={"https://instagram.com/gogenie.ng"}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center rounded-full bg-primary text-primary-foreground size-10 "
					>
						<Instagram size={20} />
					</Link>
					<Link
						to={"https://www.linkedin.com/company/gogenie"}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center rounded-full bg-primary text-primary-foreground size-10"
					>
						<Linkedin size={20} />
					</Link>
					<Link
						to={"https://twitter.com/gogenie_ng"}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center rounded-full bg-primary text-primary-foreground size-10"
					>
						<Twitter size={20} />
					</Link>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<p className="text-center text-sm py-4 text-gray-500 font-medium">
					&copy; {new Date().getFullYear()} GoGenie. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
