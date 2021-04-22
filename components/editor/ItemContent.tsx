import { Empty, Form } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../store";
import { formItemLayout } from "../../utils/applicationConstants";
import ItemSpecifics from "./ItemSpecifics";
import ItemMetaInfo from "./ItemMetaInfo";

// TODO: add specifics again

const ItemContent = () => {
	const { item } = useSelector((state: IStore) => state.ebayItem);

	return (
		<Form.Item {...formItemLayout}>
			{item ? (
				<>
					<ItemMetaInfo />
					{/* <ItemSpecifics /> */}
				</>
			) : (
				<Empty description="No item loaded." />
			)}
		</Form.Item>
	);
};

export default ItemContent;
