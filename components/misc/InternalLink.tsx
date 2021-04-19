import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "antd";

const InternalLink = ({ href = "", minimal = false, children, ...rest }) => {
	const router = useRouter();

	const className = router.pathname === href ? "active" : "";

	const wrapper = minimal ? (
		<></>
	) : (
		<Typography.Link
			href={href}
			className={className}
			{...rest}
		></Typography.Link>
	);

	return (
		<Link href={href} {...rest}>
			{React.cloneElement(wrapper, { children })}
		</Link>
	);
};

export default InternalLink;
