import React, { useEffect } from "react";
import { Form, Col, Row, Input, Button } from "antd";
import { EbayItem, EbayItemNameValuePair } from "../../utils/ebay";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { gutter } from "../../utils/applicationConstants";
import { DeleteOutlined, DragOutlined } from "@ant-design/icons";
import produce from "immer";
import { deleteNameValuePair, setItem } from "../../actions/ebayItemActions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";

const ItemSpecific = ({
	pair,
	i,
}: {
	pair: EbayItemNameValuePair;
	i: number;
}) => {
	const values = {
		name: pair.Name,
		value: Array.isArray(pair.Value) ? pair.Value.join(", ") : pair.Value,
	};
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const { item } = useSelector((state: IStore) => state.ebayItem);
	const { md } = useBreakpoint();

	useEffect(() => {
		form.setFieldsValue(values);
	}, [form, values]);

	const handleItemUpdate = (updatedItem: EbayItem) =>
		dispatch(setItem(updatedItem));

	const onDelete = () => dispatch(deleteNameValuePair(i));

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
		<Form form={form} initialValues={values}>
			<Row gutter={md ? gutter : 0}>
				<Col xs={24} sm={2}>
					<Form.Item>
						<Button type="primary" ghost tabIndex={-1}>
							<DragOutlined />
						</Button>
					</Form.Item>
				</Col>
				<Col xs={24} sm={10}>
					<Form.Item name="name">
						<Input
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								handleNameChange(e.target.value)
							}
						/>
					</Form.Item>
				</Col>
				<Col xs={24} sm={10}>
					<Form.Item name="value">
						<Input
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								handleValueChange(e.target.value)
							}
						/>
					</Form.Item>
				</Col>
				<Col xs={24} sm={2}>
					<Form.Item>
						<Button danger onClick={onDelete} tabIndex={-1}>
							<DeleteOutlined />
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default ItemSpecific;
