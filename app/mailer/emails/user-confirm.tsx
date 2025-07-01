import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
	render,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

export const UserConfirm = () => (
	<Html>
		<Head />
		<Preview>Thank you for contacting us!</Preview>
		<Body style={main}>
			<Container style={container}>
				<Section style={box}>
					<Img
						src={`${baseUrl}/static/logo.png`}
						width="49"
						height="21"
						alt="GoGenie"
					/>
					<Hr style={hr} />
					<Text style={paragraph}>
						Thank you for reaching out to us. We have received your contact
						information:
					</Text>
					<Text style={paragraph}>
						We appreciate you taking the time to share your message with us. Our
						team will carefully review your inquiry and get back to you within
						1-2 business days.
					</Text>
					<Text style={paragraph}>
						If you need immediate assistance or have any urgent questions,
						please don't hesitate to call our support team.
					</Text>
					<Text style={paragraph}>
						Best regards,
						<br />
						The GoGenie Team
					</Text>
				</Section>
			</Container>
		</Body>
	</Html>
);

export const userConfirmBody = async () => {
	return await render(<UserConfirm />);
};

export default UserConfirm;

const main = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
};

const box = {
	padding: "0 48px",
};

const hr = {
	borderColor: "#e6ebf1",
	margin: "20px 0",
};

const paragraph = {
	color: "#525f7f",
	fontSize: "16px",
	lineHeight: "24px",
	textAlign: "left" as const,
};
