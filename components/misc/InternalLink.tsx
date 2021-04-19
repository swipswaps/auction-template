import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "antd";

const InternalLink = ({ href = "", children, ...rest }) => {
	const router = useRouter();

	const className = router.pathname === href ? "active" : "";

	return (
		<Link href={href} {...rest}>
			<Typography.Link href={href} className={className} {...rest}>
				{children}
			</Typography.Link>
		</Link>
	);
};

export default InternalLink;
