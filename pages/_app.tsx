import "../styles/globals.css";
import React from "react";
import "antd/dist/antd.css";
import { BackTop } from "antd";
import DefaultSEO from "../components/meta/DefaultSEO";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const _app = ({ Component, pageProps }) => {
	return (
		<>
			<DefaultSEO />
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
