import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const privacy = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="Privacy" desc="Auction Template Privacy." />
			<Typography.Paragraph>Privacy coming soon</Typography.Paragraph>
		</Container>
	);
};

export default privacy;
