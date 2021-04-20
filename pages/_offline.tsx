import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const _offline = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="Offline" desc="Offline" />
			<Typography.Title>Offline</Typography.Title>
			<Typography.Paragraph>
				You are offline, please check your internet connection.
			</Typography.Paragraph>
		</Container>
	);
};

export default _offline;
