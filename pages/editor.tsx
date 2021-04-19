import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const editor = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="Editor" desc="Auction Template Editor." />
			<Typography.Paragraph>Editor coming soon</Typography.Paragraph>
		</Container>
	);
};

export default editor;
