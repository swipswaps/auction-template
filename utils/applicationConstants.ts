import { FormItemProps } from "antd";
import { Gutter } from "antd/lib/grid/row";
import { TextAreaProps } from "antd/lib/input";
import { HTMLProps } from "react";

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
