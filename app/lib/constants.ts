import { Handshake, type LucideIcon, PiggyBank, Sprout } from "lucide-react";

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

export const services = [
	{
		image: "https://images.unsplash.com/photo-1599658880436-c61792e70672",
		title: "E-commerce",
	},
	{
		image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1",
		title: "Freelancing",
	},
	{
		image: "https://images.unsplash.com/photo-1691057185806-ea8b5b9a4506",
		title: "Home Cleaning",
	},
	{
		image: "https://images.unsplash.com/photo-1694715669993-ea0022b470f7",
		title: "Pickup and Delivery",
	},
	{
		image: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb",
		title: "Grocery Shopping",
	},
	{
		image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a",
		title: "Handyman Services",
	},
	{
		image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
		title: "Writing",
	},
	{
		image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
		title: "Business",
	},
	{
		image: "https://images.unsplash.com/photo-1582902281043-69c645f40cd5",
		title: "Delivery",
	},
	{
		image: "https://images.unsplash.com/photo-1581578017306-7334b15283df",
		title: "Gardening",
	},
	{
		image: "https://images.unsplash.com/photo-1650551182991-b07558247564",
		title: "Plumbing",
	},
	{
		image: "https://images.unsplash.com/photo-1580709839515-54b8991e2813",
		title: "Moving",
	},
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

export const imageUrl = ({
	source,
	projectId,
	dataset,
}: { source: unknown; projectId: string; dataset: string }) =>
	`https://cdn.sanity.io/images/${projectId}/${dataset}/${source}?rect=640,0,2592,2592&w=300&h=300&q=80`;
