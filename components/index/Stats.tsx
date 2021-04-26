import React from "react";
import Container from "../layout/Container";
import { Row, Col, Statistic, Typography, Card } from "antd";
import {
	TeamOutlined,
	CopyOutlined,
	PicLeftOutlined,
	GlobalOutlined,
	FormatPainterOutlined,
} from "@ant-design/icons";
import { gutter } from "../../utils/applicationConstants";
import { StatsResponse } from "../../pages/api/stats";
import { capitalizeString } from "../../utils/misc";

const Stats = ({ stats }: { stats: StatsResponse }) => {
	const statsToDisplay = [
		{
			title: "Unique items loaded",
			value: stats.load.uniqueItems,
			prefix: <PicLeftOutlined />,
		},
		{
			title: "Most used theme",
			value: capitalizeString(stats.copy.mostUsedTheme),
			prefix: <FormatPainterOutlined />,
		},

		{
			title: "Unique templates copied",
			value: stats.copy.uniqueDescriptionsCopied,
			prefix: <CopyOutlined />,
		},
		{
			title: "Unique users",
			value: stats.load.uniqueUsers,
			prefix: <TeamOutlined />,
		},
		{
			title: "Unique countries",
			value: stats.load.uniqueSiteIds,
			prefix: <GlobalOutlined />,
		},
	];

	return (
		<Container spacing bg>
			<Typography.Title level={2}>Facts and Figures</Typography.Title>
			<Row gutter={gutter} align="middle" justify="center">
				{statsToDisplay.map(({ title, value, prefix }, i) => (
					<Col xs={24} sm={12} md={8} key={i}>
						<Card>
							<Statistic {...{ title, value, prefix }} />
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Stats;
