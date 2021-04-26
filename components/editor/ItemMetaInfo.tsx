import { Input, Form, Row, Col } from "antd";
const { TextArea } = Input;
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import {
	formItemLayout,
	gutter,
	textAreaLayout,
} from "../../utils/applicationConstants";
import {
	setCurrency,
	setDescription,
	setPrice,
	setSellerDisplayName,
	setShippingCost,
	setTitle,
} from "../../actions/ebayItemActions";
import Tooltip from "../misc/Tooltip";

// TODO: add images again

const ItemMetaInfo = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const { item } = useSelector((state: IStore) => state.ebayItem);
	const { md } = useBreakpoint();

	const values = {
		seller: item?._displaySellerName ?? "",
		title: item?.Title ?? "",
		description: item?.Description ?? "",
		price: item?.ConvertedCurrentPrice?.Value ?? 0,
		shipping: item?.ShippingCostSummary?.ShippingServiceCost?.Value ?? 0,
		currency: item?.ConvertedCurrentPrice?.CurrencyID ?? "",
	};

	useEffect(() => {
		form.setFieldsValue(values);
	}, [form, values]);

	return (
		<Form form={form} initialValues={values}>
			{/* <Form.Item {...formItemLayout} label="View item images provided by eBay">
				<Carousel>
					{item?.PictureURL.map((src, i) => (
						<Image
							src={src}
							alt={`Product image #${i + 1} of ${
								item?.Title
							} provided by eBay.`}
							width="100%"
							key={i}
						/>
					))}
				</Carousel>
			</Form.Item> */}
			<Form.Item
				{...formItemLayout}
				label={
					<Tooltip text="Seller name can either be a text or an url. Use an url that links to an image in order to display a custom logo in the template header">
						Edit displayed seller name
					</Tooltip>
				}
				name="seller"
			>
				<Input
					placeholder="Displayed seller name"
					onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
						dispatch(setSellerDisplayName(e.target.value))
					}
				/>
			</Form.Item>
			<Form.Item
				{...formItemLayout}
				label="Edit displayed item title"
				name="title"
			>
				<Input
					placeholder="Displayed item title"
					onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
						dispatch(setTitle(e.target.value))
					}
				/>
			</Form.Item>
			<Form.Item
				{...formItemLayout}
				label="Edit displayed item description"
				name="description"
			>
				<TextArea
					placeholder="Displayed item description"
					{...textAreaLayout}
					onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
						dispatch(setDescription(e.target.value))
					}
				/>
			</Form.Item>
			<Row gutter={md ? gutter : 0}>
				<Col xs={24} md={8}>
					<Form.Item
						{...formItemLayout}
						label="Edit displayed item price"
						name="price"
					>
						<Input
							placeholder="Displayed item price"
							type="number"
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								dispatch(setPrice(Number(e.target.value)))
							}
						/>
					</Form.Item>
				</Col>
				<Col xs={24} md={8}>
					<Form.Item
						{...formItemLayout}
						label="Edit displayed shipping costs"
						name="shipping"
					>
						<Input
							placeholder="Displayed shipping costs"
							type="number"
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								dispatch(setShippingCost(Number(e.target.value)))
							}
						/>
					</Form.Item>
				</Col>
				<Col xs={24} md={8}>
					<Form.Item
						{...formItemLayout}
						label="Edit displayed currency"
						name="currency"
					>
						<Input
							placeholder="Displayed currency"
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								dispatch(setCurrency(e.target.value))
							}
						/>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default ItemMetaInfo;
