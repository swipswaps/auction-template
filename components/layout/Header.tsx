import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Affix, Typography, Button, Divider, Drawer, Space } from "antd";
import {
	InfoCircleOutlined,
	CommentOutlined,
	FormOutlined,
	HomeOutlined,
} from "@ant-design/icons";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import InternalLink from "../misc/InternalLink";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useRouter } from "next/router";
import at_logo from "../../assets/at/auction-template-logo.svg";

const Header = () => {
	const isOpenProp = "#drawer-open";
	const router = useRouter();
	const { md } = useBreakpoint();
	const [visible, setVisible] = useState(false);

	const containsOpenProp = (path: string) => path.includes(isOpenProp);

	useEffect(() => {
		if (router) {
			setVisible(containsOpenProp(router.asPath));
		}
	}, [router]);

	const showDrawer = () => {
		setVisible(true);
		router.push(`${router.pathname}${isOpenProp}`);
	};

	const closeDrawer = () => {
		setVisible(false);
		if (containsOpenProp(router.asPath)) {
			router.back();
		}
	};

	const closeDrawerAndVisitHref = (href: string) => {
		if (router.pathname !== href) {
			setVisible(false);
			router.replace(href);
		} else {
			closeDrawer();
		}
	};

	const Logo = ({ menu = false }) => (
		<Typography.Title level={4} style={{ margin: 0 }}>
			{menu ? (
				"Menu"
			) : (
				<img
					src={at_logo}
					height="30px"
					alt={"Auction Template Logo"}
					title={"Auction Template"}
				/>
			)}
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
						{md && (
							<Space direction="horizontal" size="large">
								{headerLinks.map((link, i) => (
									<InternalLink href={link.href} key={i}>
										<Typography.Title level={5} style={{ margin: 0 }}>
											<InternalLink href={link.href}>
												{link.icon} {link.displayText}
											</InternalLink>
										</Typography.Title>
									</InternalLink>
								))}
							</Space>
						)}
						{!md && (
							<Button onClick={showDrawer}>
								<MenuOutlined />
							</Button>
						)}
					</div>
				</Container>
			</header>
			<Divider style={{ margin: 0 }} />
			<Drawer
				title={<Logo menu />}
				placement="right"
				closable
				onClose={closeDrawer}
				closeIcon={
					<Container style={{ margin: "calc(1em - 2px) 0" }}>
						<Button onClick={closeDrawer}>
							<CloseOutlined />
						</Button>
					</Container>
				}
				visible={!md && visible}
				bodyStyle={{ paddingTop: 0 }}
			>
				{headerLinks.map((link, i) => (
					<span key={i}>
						{i !== 0 && <Divider style={{ margin: 0 }} />}
						<Typography.Link>
							<Typography.Title
								level={5}
								onClick={() => closeDrawerAndVisitHref(link.href)}
								style={{
									display: "block",
									padding: "1em 0",
									margin: 0,
									color: "unset",
								}}
							>
								{link.icon} {link.displayText}
							</Typography.Title>
						</Typography.Link>
					</span>
				))}
			</Drawer>
		</Affix>
	);
};

export default Header;
