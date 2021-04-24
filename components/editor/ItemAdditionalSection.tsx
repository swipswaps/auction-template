import { DeleteOutlined } from "@ant-design/icons";
import { Input, Row, Form, Col, Button } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	deleteAdditionalSection,
	setAdditionalSectionContent,
	setAdditionalSectionHeading,
} from "../../actions/ebayItemActions";
import { gutter, textAreaLayout } from "../../utils/applicationConstants";
import { EbayItemAdditionalSection } from "../../utils/ebay";
const { TextArea } = Input;

const ItemAdditionalSection = ({
	section,
	i,
}: {
	section: EbayItemAdditionalSection;
	i: number;
}) => {
	const values: EbayItemAdditionalSection = {
		heading: section.heading,
		content: section.content,
	};
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const { md } = useBreakpoint();

	useEffect(() => {
		form.setFieldsValue(values);
	}, [form, values]);

	const handleHeadingChange = (newHeading: string) =>
		dispatch(setAdditionalSectionHeading(i, newHeading));
	const handleContentChange = (newContent: string) =>
		dispatch(setAdditionalSectionContent(i, newContent));
	const onDelete = () => {
		dispatch(deleteAdditionalSection(i));
	};

	return (
		<Form form={form} initialValues={values}>
			<Row gutter={md ? gutter : 0}>
				<Col xs={24} sm={11}>
					<Form.Item name="heading">
						<Input
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								handleHeadingChange(e.target.value)
							}
						/>
					</Form.Item>
				</Col>
				<Col xs={24} sm={11}>
					<Form.Item name="content">
						<TextArea
							{...textAreaLayout}
							onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
								handleContentChange(e.target.value)
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

export default ItemAdditionalSection;
