import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { APPLICATION_NAME } from "./DefaultSEO";

const TitleAndDesc = ({ title = "", desc = "" }) => {
	const router = useRouter();
	const isHome = router.pathname === "/";
	title = isHome ? title : `${title} - ${APPLICATION_NAME}`;

	const language = "en";

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={desc} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={desc} />
			<meta name="twitter:title" content={APPLICATION_NAME} />
			<meta name="twitter:description" content="Best PWA App in the world" />
			<meta httpEquiv="language" content={language} />
			<meta name="language" content={language} />
		</Head>
	);
};

export default TitleAndDesc;
