import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const faq = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="FAQ" desc="Auction Template FAQ." />
			<Typography.Paragraph>FAQ coming soon</Typography.Paragraph>
		</Container>
	);
};

export default faq;
