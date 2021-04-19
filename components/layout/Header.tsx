import React, { useState } from "react";
import Container from "./Container";
import { Affix, Typography, Button, Divider, Drawer } from "antd";
import {
	InfoCircleOutlined,
	CommentOutlined,
	FormOutlined,
	HomeOutlined,
} from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import InternalLink from "../misc/InternalLink";

const Header = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const closeDrawer = () => {
		setVisible(false);
	};

	const Logo = ({ menu = false }) => (
		<Typography.Title level={4} style={{ margin: 0 }}>
			{menu ? "Menu" : "Auction Template"}
		</Typography.Title>
	);

	const headerLinks = [
		{ displayText: "Home", href: "/", icon: <HomeOutlined /> },
		{ displayText: "Editor", href: "/editor", icon: <FormOutlined /> },
		{ displayText: "FAQ", href: "/faq", icon: <CommentOutlined /> },
		{ displayText: "About", href: "/about", icon: <InfoCircleOutlined /> },
	];

	return (
		<Affix offsetTop={0}>
			<header style={{ backgroundColor: "#fff", zIndex: 99, padding: "1em 0" }}>
				<Container>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<InternalLink href="/">
							<Logo />
						</InternalLink>
						<Button onClick={showDrawer}>
							<MenuOutlined />
						</Button>
					</div>
				</Container>
			</header>
			<Divider style={{ margin: 0 }} />
			<Drawer
				title={<Logo menu />}
				placement="right"
				closable={false}
				onClose={closeDrawer}
				visible={visible}
				bodyStyle={{ paddingTop: 0 }}
			>
				{headerLinks.map((link, i) => (
					<>
						{i !== 0 && <Divider style={{ margin: 0 }} />}
						<InternalLink href={link.href}>
							<Typography.Title
								level={5}
								key={i}
								onClick={closeDrawer}
								style={{ display: "block", padding: "1em 0", margin: 0 }}
							>
								{link.icon} {link.displayText}
							</Typography.Title>
						</InternalLink>
					</>
				))}
			</Drawer>
		</Affix>
	);
};

export default Header;
