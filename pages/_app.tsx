import "../styles/globals.css";
import React from "react";
import "antd/dist/antd.css";
import { BackTop, Alert } from "antd";
import DefaultSEO from "../components/meta/DefaultSEO";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

const _app = ({ Component, pageProps }) => {
	return (
		<>
			<DefaultSEO />
			<Alert
				message="Under development"
				description="Auction Template is currently under development and will be fully operational from may 1, 2021. As of now, some of the content might be incomplete or only partially translated."
				type="info"
				showIcon
				closable={true}
			/>
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
			<BackTop />
		</>
	);
};

export default _app;
