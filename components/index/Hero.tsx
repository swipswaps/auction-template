import { Button, Typography, Row, Col, Image } from "antd";
import React from "react";
import InternalLink from "../misc/InternalLink";
import Container from "../layout/Container";
import web_shopping from "../../assets/images/undraw_web_shopping.svg";
import { gutter } from "../../utils/applicationConstants";
const Hero = () => {
	return (
		<Container spacing hero>
			<Row align="middle" gutter={gutter}>
				<Col md={24} lg={14}>
					<Typography.Title>
						Create attractive eBay listings with Auction Template
					</Typography.Title>
					<Typography.Title level={2} style={{ marginTop: 0 }}>
						No cost. No Registration. Lightning fast.
					</Typography.Title>
					<Typography.Paragraph type="secondary">
						Use Auction Template to automatically generate your own eBay product
						descriptions within seconds and increase your recognition value.
						Secure, free to use and without registration - forever.
					</Typography.Paragraph>
					<InternalLink href="/editor">
						<Button type="primary">Create an Auction Template</Button>
					</InternalLink>
				</Col>
				<Col md={24} lg={10}>
					<Image
						src={web_shopping}
						preview={false}
						alt="Create attractive eBay listings with Auction Template"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Hero;
