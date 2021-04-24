import { Input, Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import ItemAdditionalSection from "./ItemAdditionalSection";
import { formItemLayout } from "../../utils/applicationConstants";
import { addAdditionalSection } from "../../actions/ebayItemActions";

const ItemAdditionalSections = () => {
	const { item } = useSelector((state: IStore) => state.ebayItem);
	const dispatch = useDispatch();
	return (
		<>
			<Form.Item {...formItemLayout} label="Edit additional sections">
				{item._additionalSections.map((section, i) => (
					<ItemAdditionalSection {...{ section, i }} key={i} />
				))}
				<Form.Item>
					<Button
						type="primary"
						onClick={() => dispatch(addAdditionalSection())}
					>
						<PlusOutlined />
					</Button>
				</Form.Item>
			</Form.Item>
		</>
	);
};

export default ItemAdditionalSections;
