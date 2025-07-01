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
					GoGenie is an outsourcing and support platform that grants your
					everyday wishes! helping individuals and businesses get things done
					fast and reliably. From running errands to hiring staffs to finding
					trusted vendors, GoGenie connects you to verified solutions instantly.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger className="text-lg font-semibold">
					How does the service work?
				</AccordionTrigger>
				<AccordionContent>
					<ol>
						<li className="flex flex-col p-2">
							<p>
								Tell us what you need: Submit a request on our website or
								message us on WhatsApp, it could be anything:
							</p>
							<p>“I need someone to pick up clothes from my tailor”</p>
							<p>“Help me find a plumber in Abuja”</p>
							<p>“I want to hire a part-time office assistant”</p>
						</li>
						<li>
							<p>
								We find the best match: We source a trusted vendor, errand
								runner, or job seeker from our verified network.
							</p>
						</li>
						<li>
							<p>
								You confirm and pay: Once you approve the offer, you make
								payment securely
							</p>
						</li>
						<li>
							<p>
								We get it done: Your task is handled professionally, and we keep
								you updated every step of the way
							</p>
						</li>
					</ol>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger className="text-lg font-semibold">
					How do I get hired through GoGenie Jobs
				</AccordionTrigger>
				<AccordionContent>
					<ol>
						<li>
							<p>
								Fill the job seeker form on the GoGenie Jobs page on our website
							</p>
						</li>
						<li>
							<p>Get verified by our team</p>
						</li>
						<li>
							<p>Your profile gets listed</p>
						</li>
						<li>
							<p>
								We connect you to verified employers looking for your skills
							</p>
						</li>
					</ol>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger className="text-lg font-semibold">
					Can I apply even if I don't have experience?
				</AccordionTrigger>
				<AccordionContent>
					Absolutely. We work with employers who hire entry-level, NYSC, and
					junior roles as well as experienced professionals.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger className="text-lg font-semibold">
					How can I hire through GoGenie?
				</AccordionTrigger>
				<AccordionContent>
					You can:
					<ul>
						<li>
							<p>Post a job directly via our form</p>
						</li>
						<li>
							<p>Hire from our verified job seeker pool</p>
						</li>
						<li>
							<p>
								{" "}
								Or request full hiring support (we shortlist and interview for
								you)
							</p>
						</li>
						<li>
							<p>You can contact us with your unique needs</p>
						</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-6">
				<AccordionTrigger className="text-lg font-semibold">
					How does the GoGenie referral program work?
				</AccordionTrigger>
				<AccordionContent>
					You earn money when you refer someone who becomes a client, job
					seeker, or employer:
					<ul>
						<li>
							<p>Share your referral link or ID</p>
						</li>
						<li>
							<p>
								They sign up using your referral link or enter your referral ID
								when signing up, filling our form or contacting us
							</p>
						</li>
						<li>
							<p>You get paid after they book a task</p>
						</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-7">
				<AccordionTrigger className="text-lg font-semibold">
					Who can become a GoGenie affiliate?
				</AccordionTrigger>
				<AccordionContent>
					Anyone! If you have a network, an audience, or just want to earn extra
					income, you can become a GoGenie affiliate and start earning today.
					Simply sign up and get in touch with our team — we&apos;ll guide you
					through the quick setup process.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-8">
				<AccordionTrigger className="text-lg font-semibold">
					How can I partner with GoGenie as a vendor or service provider?
				</AccordionTrigger>
				<AccordionContent>
					It&apos;s easy. Just fill out the service provider{" "}
					<a href="https://app.gogenie.co">form</a> and submit your details.
					Once you&apos;re vetted and verified by our team, you can start
					receiving tasks and orders through the platform.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-9">
				<AccordionTrigger className="text-lg font-semibold">
					Can I get anything done with GoGenie?
				</AccordionTrigger>
				<AccordionContent>
					Absolutely. GoGenie helps you outsource almost anything from errands
					and business support to hiring skilled professionals. There&apos;s
					little to nothing we can&apos;t handle. Reach out now and let&apos;s
					discuss your specific need.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
