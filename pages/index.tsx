import React from "react";
import Features from "../components/index/Features";
import Hero from "../components/index/Hero";
import Stats from "../components/index/Stats";
import Usage from "../components/index/Usage";
import Mission from "../components/index/Mission";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const index = () => {
	return (
		<>
			<TitleAndDesc
				title="Create attractive eBay listings with Auction Template"
				desc="Free and easy to use tool for your eBay listings. The best editor to load your ads, and to create and download responsive descriptions with custom themes."
			/>
			<Hero />
			<Features />
			<Mission />
			<Stats />
			<Usage />
		</>
	);
};

export default index;

/**
 * TODO: make index isr to update statistics
 */
