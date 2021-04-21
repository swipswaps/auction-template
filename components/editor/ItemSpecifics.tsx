import { Form, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import { formItemLayout } from "../../utils/applicationConstants";
import produce from "immer";
import { EbayItem } from "../../utils/ebay";
import { setItem } from "../../actions/ebayItemActions";
import ItemSpecific from "./ItemSpecific";
import { PlusOutlined } from "@ant-design/icons";

const ItemSpecifics = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state: IStore) => state.ebayItem);

	const handleItemUpdate = (updatedItem: EbayItem) => {
		dispatch(setItem(updatedItem));
	};

	/**
	 * TODO: state change is not represented in ui, FIX!
	 */

	return (
		<Form.Item {...formItemLayout} label="Edit displayed specifics">
			{item.ItemSpecifics.NameValueList.map((pair, i) => (
				<ItemSpecific {...{ pair, i }} key={i} />
			))}
			<Form.Item>
				<Button
					type="primary"
					onClick={() =>
						handleItemUpdate(
							produce(item, (itemDraft) => {
								itemDraft.ItemSpecifics.NameValueList.push({
									Name: "",
									Value: "",
								});
								return itemDraft;
							}),
						)
					}
				>
					<PlusOutlined />
				</Button>
			</Form.Item>
		</Form.Item>
	);
};

export default ItemSpecifics;