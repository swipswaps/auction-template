import { Form, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import { formItemLayout } from "../../utils/applicationConstants";
import { addNameValuePair } from "../../actions/ebayItemActions";
import ItemSpecific from "./ItemSpecific";
import { PlusOutlined } from "@ant-design/icons";

const ItemSpecifics = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state: IStore) => state.ebayItem);

	return (
		<Form.Item {...formItemLayout} label="Edit displayed highlights">
			{item.ItemSpecifics.NameValueList.map((pair, i) => (
				<ItemSpecific {...{ pair, i }} key={i} />
			))}
			<Form.Item>
				<Button type="primary" onClick={() => dispatch(addNameValuePair())}>
					<PlusOutlined />
				</Button>
			</Form.Item>
		</Form.Item>
	);
};

export default ItemSpecifics;
