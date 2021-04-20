import React, { ReactNode } from "react";
import { Tooltip as AntdTooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Tooltip = ({
	children,
	text,
}: {
	children: ReactNode;
	text: String;
}) => {
	return (
		<span>
			{children}{" "}
			<span>
				<AntdTooltip title={text}>
					<QuestionCircleOutlined />
				</AntdTooltip>
			</span>
		</span>
	);
};

export default Tooltip;
