import React, { useEffect } from "react";
import { Form, Col, Row, Input, Button } from "antd";
import { EbayItemNameValuePair } from "../../utils/ebay";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { gutter } from "../../utils/applicationConstants";
import { DeleteOutlined, DragOutlined } from "@ant-design/icons";
import {
	deleteNameValuePair,
	setNameValuePairName,
	setNameValuePairValue,
} from "../../actions/ebayItemActions";
import { useDispatch } from "react-redux";
import { sanitizeSpecificValue } from "../../utils/misc";

const ItemSpecific = ({
	pair,
	i,
}: {
	pair: EbayItemNameValuePair;
	i: number;
}) => {
	const values = {
		name: pair.Name,
		value: sanitizeSpecificValue(pair.Value),
	};
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const { md } = useBreakpoint();

	useEffect(() => {
		form.setFieldsValue(values);
	}, [form, values]);

	const onDelete = () => dispatch(deleteNameValuePair(i));

	const handleNameChange = (newName) =>
		dispatch(setNameValuePairName(i, newName));

	const handleValueChange = (newValue) =>
		dispatch(setNameValuePairValue(i, newValue));

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
