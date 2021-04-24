import { FormItemProps } from "antd";
import { Gutter } from "antd/lib/grid/row";
import { TextAreaProps } from "antd/lib/input";

export const gutter: [Gutter, Gutter] = [32, 32];
export const formItemLayout: FormItemProps = {
	labelCol: { span: 24 },
	wrapperCol: { span: 24 },
};
export const textAreaLayout: TextAreaProps = {
	rows: 5,
};
