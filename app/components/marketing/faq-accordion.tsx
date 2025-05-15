import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

export function FaqAccordion() {
	return (
		<Accordion type="single" collapsible className="w-full max-w-2xl">
			<AccordionItem value="item-1">
				<AccordionTrigger className="text-lg font-semibold">
					What is GoGenie?
				</AccordionTrigger>
				<AccordionContent>
					GoGenie is designed to help you manage your tasks efficiently and
					effectively, allowing you to focus on what matters most.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger className="text-lg font-semibold">
					How does the service work?
				</AccordionTrigger>
				<AccordionContent>
					The service connects you with trusted professionals who can assist you
					with various tasks, ensuring quality and reliability.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger className="text-lg font-semibold">
					Is my data secure with this service?
				</AccordionTrigger>
				<AccordionContent>
					Yes, we prioritize your privacy and security. All data is encrypted
					and stored securely, and we adhere to strict data protection
					regulations.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger className="text-lg font-semibold">
					How can I get support if I have issues?
				</AccordionTrigger>
				<AccordionContent>
					You can reach out to our support team via email or through the help
					section on our website. We are here to assist you 24/7.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger className="text-lg font-semibold">
					How does the referral program work?
				</AccordionTrigger>
				<AccordionContent>
					Our referral program allows you to earn rewards by inviting friends to
					join GoGenie. For every successful referral, you and your friend will
					earn a discount on your next service.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-6">
				<AccordionTrigger className="text-lg font-semibold">
					Are there any hidden fees?
				</AccordionTrigger>
				<AccordionContent>
					No, we believe in transparency. All fees are clearly outlined during
					the signup process, and there are no hidden charges.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
