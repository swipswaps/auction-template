import React, { ReactNode } from "react";
import { Tooltip as AntdTooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Tooltip = ({
	children,
	tooltipText,
}: {
	children: ReactNode;
	tooltipText: String;
}) => {
	return (
		<span>
			{children}{" "}
			<span>
				<AntdTooltip title={tooltipText}>
					<QuestionCircleOutlined />
				</AntdTooltip>
			</span>
		</span>
	);
};

export default Tooltip;
