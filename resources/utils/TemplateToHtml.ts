import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";

const componentToHtml = (component: ReactNode): string =>
	ReactDOMServer.renderToStaticMarkup(component);

export default componentToHtml;
