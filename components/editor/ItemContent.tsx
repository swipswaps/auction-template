import { Typography, Empty, Form } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../store";
import { formItemAlignment } from "../../utils/applicationConstants";

const ItemContent = () => {
	const { item } = useSelector((state: IStore) => state.ebayItem);
	return (
		<Form.Item {...formItemAlignment}>
			{item ? (
				<Typography.Paragraph>{item.Title}</Typography.Paragraph>
			) : (
				<Empty description="No item loaded." />
			)}
		</Form.Item>
	);
};

export default ItemContent;