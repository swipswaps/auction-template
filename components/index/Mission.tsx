import React from "react";
import Container from "../layout/Container";
import boost from "../../assets/images/undraw_progress_data.svg";
import checkout from "../../assets/images/undraw_add_to_cart.svg";
import product from "../../assets/images/undraw_product_photography.svg";
import MissionSection from "./MissionSection";

const Mission = () => {
	const sections = [
		{
			title: "Why should you use Auction Template?",
			content:
				"Our goal is to provide a free online tool that helps to beautify your eBay products. Unlike other providers, Auction Template participates in eBay's developers program and thus has access to official and secured datasources from eBay. Through these APIs we receive the information and images of your items that you would otherwise have had to enter in tedious and manual double maintenance.",
			src: checkout,
		},
		{
			title: "Showcase your products the way they deserve it",
			content:
				"Show off your eBay ads using Auction Template! Auction Template offers you a free and advanced editor to create amazing eBay product description templates which are exclusively developed with HTML and CSS. Our templates are fully compliant with the latest eBay guidelines for listings, including responsiveness, HTTPS/SSL and are using no active content like JavaScript.",
			src: product,
		},
		{
			title: "Stand out and increase your recognition value",
			content:
				"All of our eBay templates are professionally designed and developed. Auction Template provides a modern, consistent and reputable appearance for your eBay store with the ultimate goal to increase attractiveness and brand recognition altogether. Auction Templates can be customized in our editor to match your existing brand style. Choose one of many available styles, or request an individual one.",
			src: boost,
		},
	];

	const isRevert = (i) => i % 2 === 1;

	return (
		<>
			{sections.map((section, i) => (
				<Container spacing key={i} bg={isRevert(i)}>
					<MissionSection {...section} revert={isRevert(i)} />
				</Container>
			))}
		</>
	);
};

export default Mission;
