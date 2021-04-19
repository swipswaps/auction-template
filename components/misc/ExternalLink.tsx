import React from "react";
import { Typography } from "antd";

const ExternalLink = ({ href = "", children, ...rest }) => {
	return (
		<Typography.Link
			href={href}
			{...rest}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</Typography.Link>
	);
};

export default ExternalLink;
