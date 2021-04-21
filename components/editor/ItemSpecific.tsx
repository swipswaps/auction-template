import React from "react";
import { Form, Col, Row, Input, Button } from "antd";
import { EbayItem, EbayItemNameValuePair } from "../../utils/ebay";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { gutter } from "../../utils/applicationConstants";
import { DeleteOutlined, DragOutlined } from "@ant-design/icons";
import produce from "immer";
import { setItem } from "../../actions/ebayItemActions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";

const ItemSpecific = ({
	pair,
	i,
}: {
	pair: EbayItemNameValuePair;
	i: number;
}) => {
	const dispatch = useDispatch();
	const { item } = useSelector((state: IStore) => state.ebayItem);
	const { md } = useBreakpoint();

	const handleItemUpdate = (updatedItem: EbayItem) =>
		dispatch(setItem(updatedItem));

	const onDelete = () =>
		handleItemUpdate(
			produce(item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList.splice(i, 1);
				return itemDraft;
			}),
		);

	const handleNameChange = (newName) =>
		handleItemUpdate(
			produce(item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList[i].Name = newName;
				return itemDraft;
			}),
		);

	const handleValueChange = (newValue) =>
		handleItemUpdate(
			produce(item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList[i].Value = newValue;
				return itemDraft;
			}),
		);

	return (
		<Form.Item>
			<Row gutter={md ? gutter : 0}>
				<Col xs={24} sm={2}>
					<Button type="primary" ghost tabIndex={-1}>
						<DragOutlined />
					</Button>
				</Col>
				<Col xs={24} sm={10}>
					<Input
						defaultValue={pair.Name}
						onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
							handleNameChange(e.target.value)
						}
					/>
				</Col>
				<Col xs={24} sm={10}>
					<Input
						defaultValue={
							Array.isArray(pair.Value) ? pair.Value.join(", ") : pair.Value
						}
						onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
							handleValueChange(e.target.value)
						}
					/>
				</Col>
				<Col xs={24} sm={2}>
					<Button danger onClick={onDelete} tabIndex={-1}>
						<DeleteOutlined />
					</Button>
				</Col>
			</Row>
		</Form.Item>
	);
};

export default ItemSpecific;
