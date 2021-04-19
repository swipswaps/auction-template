import Document, { Html, Head, Main, NextScript } from "next/document";
import {
	APPLICATION_NAME,
	DEFAULT_LANGUAGE,
} from "../components/meta/DefaultSEO";

class _document extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang={DEFAULT_LANGUAGE}>
				<Head>
					<meta name="application-name" content={APPLICATION_NAME} />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content={APPLICATION_NAME} />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default _document;
