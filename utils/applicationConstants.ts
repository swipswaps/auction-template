import { FormItemProps } from "antd";
import { Gutter } from "antd/lib/grid/row";
import { TextAreaProps } from "antd/lib/input";
import { isDev } from "./misc";

export const gutter: [Gutter, Gutter] = [32, 32];
export const formItemLayout: FormItemProps = {
	labelCol: { span: 24 },
	wrapperCol: { span: 24 },
};
export const textAreaLayout: TextAreaProps = {
	rows: 5,
};
export const hideListStyle: React.CSSProperties = {
	margin: 0,
	padding: 0,
	listStyleType: "none",
};

type Subdomain = "" | "www.";
type Domain =
	| "auction-template.de"
	| "auction-template.com"
	| "auction-hero.de"
	| "auction-hero.com";
type AllowedDomain = `${Subdomain}${Domain}`;
const allowedDomains: Array<AllowedDomain> = [
	"www.auction-hero.com",
	"auction-hero.com",
	"www.auction-hero.de",
	"auction-hero.de",
	"www.auction-template.com",
	"auction-template.com",
	"www.auction-template.de",
	"auction-template.de",
];
const allowedDomainsAsString = allowedDomains.map((domain) => String(domain));

export const isAllowedDomain = (domain: string) =>
	isDev() || allowedDomainsAsString.includes(domain);
