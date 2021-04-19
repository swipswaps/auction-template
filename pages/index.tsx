import React from "react";
import Features from "../components/index/Features";
import Hero from "../components/index/Hero";
import Usage from "../components/index/Usage";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const index = () => {
	return (
		<>
			<TitleAndDesc
				title="Auction Template - Generate free eBay descriptions on the fly"
				desc="Free and easy to use tool for your eBay listings. The best editor to load your ads, and to create and download responsive descriptions with custom themes."
			/>
			<Hero />
			<Features />
			<Usage />
		</>
	);
};

export default index;
