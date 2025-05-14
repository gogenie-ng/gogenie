import {
	Book,
	Handshake,
	type LucideIcon,
	PiggyBank,
	Sprout,
	Sunset,
	Trees,
	Zap,
} from "lucide-react";

export interface MenuItem {
	title: string;
	url: string;
	description?: string;
	icon?: LucideIcon;
	items?: MenuItem[];
}

export interface Feature {
	Icon: LucideIcon;
	title: string;
	text: string;
}

interface FooterLink {
	title: string;
	links: {
		url: string;
		link: string;
	}[];
}
export const menu = [
	{ title: "For Task Posters", url: "/faq/posters" },
	{ title: "For Taskers", url: "/faq/taskers" },
	{
		title: "Help & Support",
		url: "#",
		items: [
			{
				title: "Help Center",
				description: "Get all the answers you need right here",
				icon: Book,
				url: "/help",
			},
			{
				title: "Contact Support",
				description: "Get in touch with our support team",
				icon: Zap,
				url: "/contact",
			},
			{
				title: "Community Forums",
				description: "Connect with other users and share experiences",
				icon: Trees,
				url: "/community",
			},
		],
	},
	{
		title: "Company",
		url: "#",
		items: [
			{
				title: "About Us",
				description: "Learn more about our mission and values",
				icon: Sunset,
				url: "/about",
			},
			{
				title: "Careers",
				description: "Join our team and make an impact",
				icon: Zap,
				url: "/careers",
			},
			{
				title: "Press",
				description: "Latest news and media coverage",
				icon: Book,
				url: "/press",
			},
		],
	},
	{
		title: "Programs",
		url: "#",
		items: [
			{
				title: "Referral Program",
				description: "Earn rewards by referring others",
				icon: Zap,
				url: "/referral",
			},
			{
				title: "Partner Program",
				description: "Become a partner and grow with us",
				icon: Trees,
				url: "/partners",
			},
			{
				title: "Enterprise Solutions",
				description: "Custom solutions for large organizations",
				icon: Book,
				url: "/enterprise",
			},
		],
	},
	{
		title: "Legal",
		url: "#",
		items: [
			{
				title: "Terms of Service",
				description: "Our terms and conditions",
				icon: Book,
				url: "/terms",
			},
			{
				title: "Privacy Policy",
				description: "How we handle your data",
				icon: Sunset,
				url: "/privacy",
			},
			{
				title: "Cookie Policy",
				description: "Our use of cookies",
				icon: Book,
				url: "/cookies",
			},
		],
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

export const options = [
	"Business",
	"Content writing",
	"Logistics",
	"Personal",
	"E-commerce",
	"Freelancing",
	"Groceries",
	"Business",
	"Travel",
	"Finance",
	"Real Estate",
];

export const features: Feature[] = [
	{
		Icon: Sprout,
		title: "Outsource with GoGenie",
		text: "At GoGenie, we are passionate about connecting job seekers with meaningful opportunities. Whether you are experienced or just starting out, we help you stand out.",
	},
	{
		Icon: Handshake,
		title: "Partner with GoGenie",
		text: "Are you a freelancer, vendor or service provider looking to expand your customer base? Partner with GoGenie to connect with thousands of customers who need your services.",
	},
	{
		Icon: PiggyBank,
		title: "Earn with GoGenie",
		text: "Become a GoGenie Affiliate and start earning today. By referring others to the GoGenie platform for their tasks, you earn commissions.",
	},
];

export const footerLinks: FooterLink[] = [
	{
		title: "Product",
		links: [
			{
				url: "",
				link: "About",
			},
			{
				url: "",
				link: "Features",
			},
			{
				url: "",
				link: "Integrations",
			},
			{
				url: "",
				link: "FAQs",
			},
		],
	},
	{
		title: "Company",
		links: [
			{
				url: "",
				link: "Our Story",
			},
			{
				url: "",
				link: "Team",
			},
			{
				url: "",
				link: "Press",
			},
			{
				url: "",
				link: "Contact Us",
			},
		],
	},
	{
		title: "Resources",
		links: [
			{
				url: "/blog",
				link: "Blog",
			},
			{
				url: "",
				link: "Webinars",
			},
			{
				url: "",
				link: "Case Studies",
			},
			{
				url: "",
				link: "Help Center",
			},
		],
	},
	{
		title: "Legal",
		links: [
			{
				url: "",
				link: "Terms of Service",
			},
			{
				url: "",
				link: "Privacy Policy",
			},
			{
				url: "",
				link: "Cookie Policy",
			},
			{
				url: "",
				link: "Refund Policy",
			},
		],
	},
];
