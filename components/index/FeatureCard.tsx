import { Card, Col } from "antd";
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
	return (
		<Col sm={24} md={12} lg={8}>
			<Card>
				<Card.Meta {...{ avatar: icon, title, description }} />
			</Card>
		</Col>
	);
};

export default FeatureCard;
