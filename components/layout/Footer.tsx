import React from "react";
import Container from "./Container";
import { Divider, Typography, Image } from "antd";
import ebay_dev_program_logo from "../../assets/ebay/ebay_developers_program_member.png";
import quikk_software_logo from "../../assets/quikk/quikk_software_logo.svg";
import ExternalLink from "../misc/ExternalLink";
import InternalLink from "../misc/InternalLink";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Footer = () => {
	const breakpoints = useBreakpoint();
	const { md } = breakpoints;
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

	return (
		<footer>
			<Divider style={{ margin: 0 }} />
			<Container spacing>
				<Typography.Paragraph>
					{footerLinks.map((link, i) => (
						<span key={i}>
							{i !== 0 && <>{" · "}</>}
							<InternalLink href={link.href}>{link.displayText}</InternalLink>
						</span>
					))}
				</Typography.Paragraph>
				<Divider />
				{md && (
					<Typography.Paragraph type="secondary" style={{ fontSize: "12px" }}>
						Auction Template offers you a free and advanced editor to create
						eBay product description templates which are exclusively developed
						with HTML and CSS. We have taken into account all the important eBay
						guidelines {new Date().getFullYear()} (Responsive, HTTPS/SSL, no
						active content with JavaScript, etc.) so that you get a holistic and
						satisfying solution with the Auction Template open source project.
						Our eBay ad templates are professionally developed and focus on a
						consistent and reputable appearance for your eBay store with the
						goal to provide modern auction templates tailored especially for
						your eBay listings. Hopefully, Auction Template can increase the
						attractiveness of your listings and help with creating a unique
						recognition value through a consistent and professional appearance.
						Unlike other providers, Auction Template participates in eBays
						developers program and thus has access to official and secured data
						sources from eBay. Through these APIs we receive the information and
						images of your items that you would otherwise have had to enter in
						tedious double maintenance. The automatically generated auction
						template from Auction Template can be easily edited with our
						innovative editor and the generated HTML code can be directly
						inserted into the product descriptions of your eBay listings.
					</Typography.Paragraph>
				)}
				<ExternalLink href={ebayDevHref} icon={false}>
					<Image
						width={imgWidth}
						src={ebay_dev_program_logo}
						preview={false}
						alt="eBay Developers Program Member Logo"
					/>
				</ExternalLink>
				<Typography.Paragraph>
					<ExternalLink href={ebayPoliciesHref}>
						eBay Listing Policies {new Date().getFullYear()}
					</ExternalLink>
				</Typography.Paragraph>
				<Typography.Paragraph type="secondary" style={{ fontSize: "12px" }}>
					Auction Template is not owned or operated by eBay Inc. eBay and the
					eBay logo are registered trademarks of eBay Inc.
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
						© 2020 - {new Date().getFullYear()} Lukas Weidich, Joyce Marvin
						Rafflenbeul
					</Typography.Paragraph>
					<ExternalLink href={quikkHref} icon={false}>
						<Image
							width={imgWidth / 1.5}
							src={quikk_software_logo}
							preview={false}
							alt="QUIKK Software Logo"
						/>
					</ExternalLink>
					<Typography.Paragraph style={{ margin: 0 }}>
						Published by{" "}
						<ExternalLink href={quikkHref}>QUIKK Software</ExternalLink>
					</Typography.Paragraph>
				</span>
			</Container>
		</footer>
	);
};

export default Footer;