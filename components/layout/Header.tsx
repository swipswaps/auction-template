import React from "react";
import Container from "./Container";
import { Affix, Typography } from "antd";

const Header = () => {
	return (
		<Affix offsetTop={0}>
			<header style={{ backgroundColor: "#fff", zIndex: 99 }}>
				<Container>
					<Typography.Title level={4}>Auction Template</Typography.Title>
				</Container>
			</header>
		</Affix>
	);
};

export default Header;
