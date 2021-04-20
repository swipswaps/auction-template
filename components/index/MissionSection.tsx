import { Row, Col, Image, Typography } from "antd";
import React from "react";
import { gutter } from "../../utils/applicationConstants";

const MissionSection = ({
	src = "",
	title = "",
	content = "",
	revert = false,
}) => {
	const Img = () => (
		<Image
			src={src}
			alt={`Auction Template by QUIKK Software: ${title}`}
			height={200}
			preview={false}
		/>
	);

	return (
		<Row align="middle" justify="center" gutter={gutter}>
			<Col xs={24} sm={revert ? 0 : 10}>
				<Img />
			</Col>
			<Col xs={24} sm={14}>
				<Row>
					<Col xs={24}>
						<Typography.Title level={3}>{title}</Typography.Title>
					</Col>
					<Col xs={24}>
						<Typography.Paragraph type="secondary">
							{content}
						</Typography.Paragraph>
					</Col>
				</Row>
			</Col>
			<Col xs={0} sm={revert ? 10 : 0}>
				<Img />
			</Col>
		</Row>
	);
};

export default MissionSection;
