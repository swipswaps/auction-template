import React from "react";
import { Steps, Row, Col, Typography } from "antd";
import {
	CopyOutlined,
	HighlightOutlined,
	TrophyOutlined,
	TagOutlined,
	OrderedListOutlined,
} from "@ant-design/icons";
const { Step } = Steps;
import Container from "../layout/Container";

const Usage = () => {
	const steps = [
		{
			icon: <TagOutlined />,
			title: "Load eBay item",
			description:
				"Find your item by the unique eBay item Number or select it directly from your store. Auction Template takes care of the rest and retrieves all relevant information.",
		},
		{
			icon: <OrderedListOutlined />,
			title: "Optional: Edit content",
			description:
				"Do you want to add, delete or edit any information regarding your article? Our editor provides a unique customization experience to extend eBay's existing record.",
		},
		{
			icon: <HighlightOutlined />,
			title: "Customize auction template",
			description:
				"There are no limits to your creativity. Customize the expressive auction template according to your preferences and increase the recognition value of your eBay store.",
		},
		{
			icon: <CopyOutlined />,
			title: "Copy product description",
			description:
				"Almost there! Now you need to copy the HTML code and insert it into the product description of your eBay listing. In case of any questions, please visit our FAQ.",
		},
		{
			icon: <TrophyOutlined />,
			title: "Relax!",
			description:
				"Because in the buying process of online shopping, meaningful product descriptions and appealing product images are elementary for a purchase decision.",
		},
	];
	return (
		<Container spacing>
			<Typography.Title level={2}>5 Steps</Typography.Title>
			<Row>
				<Col md={24} lg={12}>
					<Steps direction="vertical" current={99}>
						{steps.map((step, i) => (
							<Step key={i} {...step} />
						))}
					</Steps>
				</Col>
			</Row>
		</Container>
	);
};

export default Usage;
