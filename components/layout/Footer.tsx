import React from "react";
import Container from "./Container";
import { Divider, Typography, Image } from "antd";
import ebay_dev_program_logo from "../../assets/ebay/ebay_developers_program_member.png";
import quikk_software_logo from "../../assets/quikk/quikk_software_logo.svg";
import ExternalLink from "../misc/ExternalLink";
import InternalLink from "../misc/InternalLink";

const Footer = () => {
	const imgWidth = 100;
	const quikkHref = "https://quikk.de";
	const ebayPoliciesHref =
		"https://www.ebay.com/help/policies/listing-policies/listing-policies?id=4213";
	const ebayDevHref = "https://developer.ebay.com";
	const footerLinks = [
		{ displayText: "Imprint", href: "/imprint" },
		{ displayText: "Privacy", href: "/privacy" },
		{ displayText: "Terms", href: "/terms" },
	];

	const smallFont = { fontSize: "12px", margin: 0 };

	return (
		<footer>
			<Divider style={{ margin: 0 }} />
			<Container spacing>
				<ExternalLink href={ebayDevHref} icon={false}>
					<Image
						width={imgWidth}
						src={ebay_dev_program_logo}
						preview={false}
						alt="eBay Developers Program Member Logo"
					/>
				</ExternalLink>
				<Typography.Paragraph type="secondary">
					Auction Template is not owned or operated by eBay Inc. eBay and the
					eBay logo are registered trademarks of eBay Inc.
				</Typography.Paragraph>
				<Typography.Paragraph>
					<ExternalLink href={ebayPoliciesHref}>
						eBay Listing Policies {new Date().getFullYear()}
					</ExternalLink>
				</Typography.Paragraph>
				<Divider />
				<span
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography.Paragraph>
						{footerLinks.map((link, i) => (
							<span key={i}>
								{i !== 0 && <>{" · "}</>}
								<InternalLink href={link.href}>{link.displayText}</InternalLink>
							</span>
						))}
					</Typography.Paragraph>
					<Typography.Paragraph style={smallFont}>
						© 2020 - {new Date().getFullYear()} L. Weidich, J. M. Rafflenbeul
					</Typography.Paragraph>
					<Image
						width={imgWidth / 1.5}
						src={quikk_software_logo}
						preview={false}
						alt="QUIKK Software Logo"
						style={{ margin: ".5em 0 .243em" }}
					/>
					<Typography.Paragraph style={smallFont}>
						Published by{" "}
						<ExternalLink href={quikkHref}>QUIKK Software</ExternalLink>
					</Typography.Paragraph>
				</span>
			</Container>
		</footer>
	);
};

export default Footer;
