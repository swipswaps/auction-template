import { Form } from "antd";
import React from "react";
import { formItemLayout } from "../../utils/applicationConstants";
import ItemSpecifics from "./ItemSpecifics";
import ItemMetaInfo from "./ItemMetaInfo";
import ItemAdditionalSections from "./ItemAdditionalSections";

const ItemContent = () => {
	return (
		<Form.Item {...formItemLayout}>
			<ItemMetaInfo />
			<ItemSpecifics />
			<ItemAdditionalSections />
		</Form.Item>
	);
};

export default ItemContent;
