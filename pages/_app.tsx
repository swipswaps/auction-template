import "../styles/globals.css";
import React from "react";
import "antd/dist/antd.css";
import { BackTop } from "antd";
import DefaultSEO from "../components/meta/DefaultSEO";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Provider } from "react-redux";
import store from "../store";

const _app = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<DefaultSEO />
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
			<BackTop />
		</Provider>
	);
};

export default _app;
