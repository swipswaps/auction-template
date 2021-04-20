import { Typography, Row } from "antd";
import React from "react";
import DeveloperCard from "../components/about/DeveloperCard";
import Container from "../components/layout/Container";
import ExternalLink from "../components/misc/ExternalLink";
import { gutter } from "../utils/applicationConstants";
import lukas from "../assets/images/lukas.jpg";
import joyce from "../assets/images/joyce.jpg";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const about = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="About" desc="About" />
			<Typography.Title>About</Typography.Title>
			<Typography.Paragraph>
				Auction Template is a free online tool that allows users to
				automatically generate attractive product descriptions for eBay
				listings. It has an automated editor that provides many choices, design-
				and contentwise. Unlike other solutions on the Internet, our editor is
				fully automated, completely free to use and requires no registration. We
				work with official eBay interfaces which make tedious and manual
				maintenance of product information obsolete and hope to beautify your
				eBay listings.
			</Typography.Paragraph>
			<Typography.Title level={2}>Our Motivation</Typography.Title>
			<Typography.Paragraph>
				Among many of our friends, the demand for a tool to create attractive
				eBay descriptions without manual effort increased at the beginning of
				2020. So both of us, Lukas and Joyce, decided to take the project into
				our own hands and put it into action while studying for our bachelor's
				degree in computer science. In the meantime, Auction Template has
				developed into the third iteration, as we were trying out new
				technologies and framework across the npm ecosystem, and became a
				project close to our hearts. The goal is and remains the free and
				automated provision of modern auction templates tailored especially for
				your eBay listings. We hope to increase the attractiveness of your
				listings and help with creating a unique recognition value through a
				consistent and professional appearance.
			</Typography.Paragraph>
			<Typography.Title level={2}>Contact</Typography.Title>
			<Typography.Paragraph>
				We are at your disposal for any questions, feature requests or
				cooperations. To track any problems, bugs or feature requests, we work
				with GitHub Issues. The link to the source code repository can be found
				below.
			</Typography.Paragraph>
			<Typography.Title level={2}>Roadmap</Typography.Title>
			<Typography.Paragraph>
				For future versions of Auction Template, we are planning to add multiple
				translations as well as an improved eBay integration, so that the
				product description will no longer have to be inserted manually. Going
				further, this will also provide the ability to create and include a
				description for multiple (or all) listings of a seller with one click,
				and the possibility to connect multiple listings. With an optional user
				account, we plan to save content like texts, descriptions and images to
				reuse them across all listings of one seller. Joyce and I are pursuing
				these ambitious goals in addition to our regular jobs and our master's
				degree in computer science. That's why we appreciate any support in the
				form of feedback, participation or a donation.
			</Typography.Paragraph>
			<Typography.Title level={2}>Support us</Typography.Title>
			<Typography.Paragraph>
				<ExternalLink href="https://www.paypal.com/donate/?hosted_button_id=SBAY73ETN3HSS">
					Support further development and the team behind Auction Template with
					a small donation on PayPal
				</ExternalLink>
			</Typography.Paragraph>
			<Row gutter={gutter}>
				<DeveloperCard
					name="Lukas Weidich"
					github="https://github.com/lukasweidich"
					linkedin="https://linkedin.com/in/lukasweidich/"
					avatar={lukas}
					mail="mailto:lukas@quikk.de"
				/>
				<DeveloperCard
					name="Joyce Marvin Rafflenbeul"
					github="https://github.com/jrafflenbeul"
					linkedin="https://linkedin.com/in/jrafflenbeul"
					avatar={joyce}
					mail="mailto:joyce@quikk.de"
				/>
			</Row>
			<Typography.Paragraph style={{ margin: "1em 0" }}>
				<ExternalLink href="https://github.com/lukasweidich/auction-template-ts">
					View source code on GitHub
				</ExternalLink>
			</Typography.Paragraph>
			<Typography.Paragraph>
				Thank you for using and supporting Auction Template!
			</Typography.Paragraph>
			<Typography.Paragraph>- All the best, Lukas & Joyce</Typography.Paragraph>
		</Container>
	);
};

export default about;
