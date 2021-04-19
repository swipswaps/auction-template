import React from "react";
import { Card, Avatar, Col } from "antd";
const { Meta } = Card;
import {
	GithubOutlined,
	LinkedinFilled,
	MailOutlined,
} from "@ant-design/icons";
import ExternalLink from "../misc/ExternalLink";

const DeveloperCard = ({
	name,
	github = "",
	linkedin = "",
	avatar = "",
	desc = "",
	mail = "",
}) => {
	desc = !!desc ? desc : "Software Developer";
	return (
		<Col xs={24} sm={24} md={12}>
			<Card
				actions={[
					<>
						{mail && (
							<ExternalLink href={mail} icon={false}>
								<MailOutlined />
							</ExternalLink>
						)}
					</>,
					<>
						{github && (
							<ExternalLink href={github} icon={false}>
								<GithubOutlined />
							</ExternalLink>
						)}
					</>,
					<>
						{linkedin && (
							<ExternalLink href={linkedin} icon={false}>
								<LinkedinFilled />
							</ExternalLink>
						)}
					</>,
				]}
			>
				<Meta
					avatar={
						<Avatar src={avatar} size="large" alt={name} shape="square" />
					}
					title={name}
					description={desc}
				/>
			</Card>
		</Col>
	);
};

export default DeveloperCard;
