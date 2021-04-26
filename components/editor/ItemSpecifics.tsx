import { Form, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import {
	formItemLayout,
	hideListStyle,
} from "../../utils/applicationConstants";
import {
	addNameValuePair,
	dragNameValuePair,
} from "../../actions/ebayItemActions";
import ItemSpecific from "./ItemSpecific";
import { PlusOutlined } from "@ant-design/icons";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { EbayItemNameValuePair } from "../../utils/ebay";

const ItemSpecifics = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state: IStore) => state.ebayItem);

	const SortableItem = SortableElement(
		({ i, pair }: { i: number; pair: EbayItemNameValuePair }) => (
			<li key={i} style={hideListStyle}>
				<ItemSpecific i={i} pair={pair} />
			</li>
		),
	);

	const SortableList = SortableContainer(
		({ items }: { items: Array<EbayItemNameValuePair> }) => {
			return (
				<ul style={hideListStyle}>
					{items.map((pair, i) => (
						<SortableItem key={i} index={i} pair={pair} i={i} />
					))}
				</ul>
			);
		},
	);

	const handleSortEnd = ({ oldIndex, newIndex }) => {
		dispatch(dragNameValuePair(oldIndex, newIndex));
	};

	return (
		<Form.Item {...formItemLayout} label="Edit displayed highlights">
			<SortableList
				items={item.ItemSpecifics.NameValueList}
				onSortEnd={handleSortEnd}
			/>
			<Form.Item>
				<Button type="primary" onClick={() => dispatch(addNameValuePair())}>
					<PlusOutlined />
				</Button>
			</Form.Item>
		</Form.Item>
	);
};

export default ItemSpecifics;
