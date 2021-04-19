import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const notfound = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="404" desc="Auction Template 404." />
			<Typography.Paragraph>404 coming soon</Typography.Paragraph>
		</Container>
	);
};

export default notfound;
