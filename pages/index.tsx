import React from "react";
import Features from "../components/index/Features";
import Hero from "../components/index/Hero";
import Stats from "../components/index/Stats";
import Usage from "../components/index/Usage";
import Mission from "../components/index/Mission";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import { getStats } from "../utils/api";
import { StatsResponse } from "./api/stats";

const index = () =>
	// { stats }: { stats: StatsResponse }
	{
		return (
			<>
				<TitleAndDesc
					title="Create attractive eBay listings with Auction Template"
					desc="Free and easy to use tool for your eBay listings. The best editor to load your ads, and to create and download responsive descriptions with custom themes."
				/>
				<Hero />
				<Features />
				<Mission />
				{/* <Stats stats={stats} /> */}
				<Usage />
			</>
		);
	};

export default index;

export async function getStaticProps() {
	// const stats: StatsResponse = await getStats();

	return {
		props: {
			// stats,
		},
		revalidate: 1,
	};
}
