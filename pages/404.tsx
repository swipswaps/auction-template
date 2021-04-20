import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const _404 = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="404" desc="404" />
			<Typography.Title>404</Typography.Title>
			<Typography.Paragraph>Page not found.</Typography.Paragraph>
		</Container>
	);
};

export default _404;
