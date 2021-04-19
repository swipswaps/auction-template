import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const terms = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="Terms" desc="Auction Template Terms." />
			<Typography.Paragraph>Terms coming soon</Typography.Paragraph>
		</Container>
	);
};

export default terms;
