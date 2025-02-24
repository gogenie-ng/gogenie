import { type LucideIcon, Sunset, Trees, Zap, Book } from "lucide-react";

export interface MenuItem {
	title: string;
	url: string;
	description?: string;
	icon?: LucideIcon;
	items?: MenuItem[];
}

export const menu = [
	{ title: "Home", url: "/" },
	{
		title: "Products",
		url: "#",
		items: [
			{
				title: "Blog",
				description: "The latest industry news, updates, and info",
				icon: Book,
				url: "/blog",
			},
			{
				title: "Company",
				description: "Our mission is to innovate and empower the world",
				icon: Trees,
				url: "#",
			},
			{
				title: "Careers",
				description: "Browse job listing and discover our workspace",
				icon: Sunset,
				url: "#",
			},
			{
				title: "Support",
				description:
					"Get in touch with our support team or visit our community forums",
				icon: Zap,
				url: "#",
			},
		],
	},
	{
		title: "Resources",
		url: "#",
		items: [
			{
				title: "Help Center",
				description: "Get all the answers you need right here",
				icon: Zap,
				url: "#",
			},
			{
				title: "Contact Us",
				description: "We are here to help you with any questions you have",
				icon: Sunset,
				url: "#",
			},
			{
				title: "Status",
				description: "Check the current status of our services and APIs",
				icon: Trees,
			},
			{
				title: "Terms of Service",
				description: "Our terms and conditions for using our services",
				icon: Book,
				url: "#",
			},
		],
	},
	{
		title: "Pricing",
		url: "#",
	},
	{
		title: "Blog",
		url: "/blog",
	},
];
export const mobileExtraLinks = [
	{ name: "Press", url: "#" },
	{ name: "Contact", url: "#" },
	{ name: "Imprint", url: "#" },
	{ name: "Sitemap", url: "#" },
];
