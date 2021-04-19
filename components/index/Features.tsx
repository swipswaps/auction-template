import {
	BgColorsOutlined,
	CreditCardOutlined,
	LayoutOutlined,
	LockOutlined,
	SafetyOutlined,
	DownloadOutlined,
} from "@ant-design/icons";
import { Row, Typography } from "antd";
import React from "react";
import FeatureCard from "./FeatureCard";
import Container from "../layout/Container";
import { gutter } from "../../utils/applicationConstants";

const Features = () => {
	const features = [
		{
			icon: <DownloadOutlined />,
			title: "Automated",
			description:
				"Auction Template is connected to eBay and can retrieve your listings data - no need for manual entries.",
		},
		{
			icon: <CreditCardOutlined />,
			title: "Free to use",
			description:
				"Auction Template is an open source project and thus will always be available in a free version.",
		},
		{
			icon: <LockOutlined />,
			title: "Secure",
			description:
				"Auction Template is web-based and does not require a download or any eBay credentials.",
		},
		{
			icon: <BgColorsOutlined />,
			title: "Innovative editor",
			description:
				"Auction Template can be easily operated without any previous technical knowledge.",
		},
		{
			icon: <LayoutOutlined />,
			title: "Modern design",
			description:
				"Auction Template combines stylish auction templates with responsive optimization for mobile devices.",
		},
		{
			icon: <SafetyOutlined />,
			title: `${new Date().getFullYear()} eBay compliant`,
			description:
				"Auction Template is part of eBay's developers program and complies with the latest eBay policies.",
		},
	];
	return (
		<Container spacing>
			<Typography.Title level={2}>Features</Typography.Title>
			<Row gutter={gutter}>
				{features.map((feature, i) => (
					<FeatureCard key={i} {...feature} />
				))}
			</Row>
		</Container>
	);
};

export default Features;
