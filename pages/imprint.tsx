import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const imprint = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="Imprint" desc="Auction Template Imprint." />
			<Typography.Paragraph>Imprint coming soon</Typography.Paragraph>
		</Container>
	);
};

export default imprint;
