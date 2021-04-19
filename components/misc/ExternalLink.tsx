import React from "react";
import { Typography } from "antd";
import { ExportOutlined } from "@ant-design/icons";

const ExternalLink = ({ href = "", children, icon = true, ...rest }) => {
	return (
		<Typography.Link
			href={href}
			{...rest}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children} {icon && <ExportOutlined />}
		</Typography.Link>
	);
};

export default ExternalLink;
