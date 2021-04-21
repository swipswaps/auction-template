import React from "react";
import Head from "next/head";

export const APPLICATION_NAME = "Auction Template";
export const DEFAULT_LANGUAGE = "en";

const DefaultSEO = () => {
	const city = "Minden";
	const latitude = 52.30219;
	const longitude = 8.86036;
	const region = "DE-NW";
	const keywords = [
		"auction",
		"template",
		"auction template",
		"ebay",
		"free",
		"kostenlos",
		"product",
		"item",
		"listing",
		"ad",
		"inserat",
		"anzeige",
		"template",
		"description",
		"description template",
		"description editor",
		"beschreibung template",
		"beschreibung editor",
		"web",
		"editor",
		"online-editor",
		"web-editor",
		"builder",
		"online-builder",
		"web-builder",
		"ebayshop",
		"ebay-shop",
		"shop-design",
		"ebay design",
		"https",
		"ssl",
		"responsive",
		"ebay-template",
		"ebay template",
		"auktionsvorlage",
		"verkaufsvorlage",
	];

	return (
		<Head>
			<meta
				name="viewport"
				content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
			/>
			<meta charSet="utf-8" />
			<meta property="content-type" content="text/html; charset=UTF-8" />
			<meta name="keywords" content={keywords.join(",")} />
			<meta name="author" content={APPLICATION_NAME} />
			<meta name="copyright" content={APPLICATION_NAME} />
			<meta name="robots" content="index,follow" />
			<meta name="geo.region" content={region} />
			<meta name="geo.placename" content={city} />
			<meta name="geo.position" content={`${latitude};${longitude}`} />
			<meta name="ICBM" content={`${latitude}, ${longitude}`} />
			<meta property="og:site_name" content={APPLICATION_NAME} />
			<meta property="og:type" content="business.business" />
			<meta property="og:latitude" content={(latitude)} />
			<meta property="og:longitude" content={(longitude)} />
			<meta property="og:locality" content={city} />
			<meta property="og:region" content={region} />
			<meta property="HandheldFriendly" content="yes" />
			<meta property="audience" content="all" />
			<meta httpEquiv="language" content={DEFAULT_LANGUAGE} />
			<meta name="language" content={DEFAULT_LANGUAGE} />
			<link rel="shortcut icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/favicon.ico" />
		</Head>
	);
};

export default DefaultSEO;
