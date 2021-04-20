import React from "react";
import Container from "../layout/Container";
import { Row, Col, Statistic, Typography, Card } from "antd";
const { Countdown } = Statistic;
import {
	TeamOutlined,
	HourglassOutlined,
	RocketOutlined,
} from "@ant-design/icons";
import { gutter } from "../../utils/applicationConstants";

const Stats = () => {
	return (
		<Container spacing bg>
			<Typography.Title level={2}>Facts and Figures</Typography.Title>
			<Row gutter={gutter} align="middle" justify="center">
				<Col xs={24} sm={12} md={8}>
					<Card>
						<Statistic
							title="Items loaded"
							value={0}
							prefix={<RocketOutlined />}
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} md={8}>
					<Card>
						<Countdown
							title="Days until release"
							//@ts-ignore
							value={new Date("05/01/2021")}
							format="DD"
							prefix={<HourglassOutlined />}
						/>
					</Card>
				</Col>
				<Col xs={24} sm={12} md={8}>
					<Card>
						<Statistic
							title="Unique users"
							value={0}
							prefix={<TeamOutlined />}
						/>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Stats;
