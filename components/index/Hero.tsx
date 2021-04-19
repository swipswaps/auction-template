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
					<Typography.Title level={1}>
						Create attractive eBay listings with Auction Template
					</Typography.Title>
					<Typography.Title level={4}>
						Free to use. No Registration. Lightning fast.
					</Typography.Title>
					<Typography.Paragraph type="secondary">
						Use Auction Template to automatically generate your own eBay product
						descriptions within seconds and increase your recognition value.
						Secure, free to use and without registration - forever.
					</Typography.Paragraph>
					<Button type="primary">
						<InternalLink href="/editor" minimal>
							<a>Create an Auction Template</a>
						</InternalLink>
					</Button>
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
