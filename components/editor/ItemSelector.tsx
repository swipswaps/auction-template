import React from "react";
import { Checkbox, Form, Input, Select, Button, Image } from "antd";
import { TagOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import {
	setAgreedToTerms,
	setItemId,
	setSellerName,
} from "../../actions/editorActions";
import { getSellerItems } from "../../actions/ebaySellerActions";
import { EbayStatusCode } from "../../utils/ebayApi";
import InternalLink from "../misc/InternalLink";
import { getItem } from "../../actions/ebayItemActions";
import { formItemLayout } from "../../utils/applicationConstants";

const ItemSelector = () => {
	const dispatch = useDispatch();
	const {
		siteId,
		itemIdKnown,
		itemId,
		sellerName,
		agreedToTerms,
	} = useSelector((state: IStore) => state.editor);

	const { items, loading: sellerLoading, status } = useSelector(
		(state: IStore) => state.ebaySeller,
	);

	const { loading: itemLoading } = useSelector(
		(state: IStore) => state.ebayItem,
	);

	const handleItemIdChange = (itemId) => dispatch(setItemId(itemId));

	const handleSellerNameChange = (sellerName) =>
		dispatch(setSellerName(sellerName));

	const handleSellerItemsSearch = () =>
		dispatch(getSellerItems(sellerName, Number(siteId)));

	const handleAgreedToTermsToggle = () =>
		dispatch(setAgreedToTerms(!agreedToTerms));

	const handleLoadItemClick = () =>
		dispatch(getItem(itemId, itemIdKnown, Number(siteId)));

	return (
		<>
			{itemIdKnown ? (
				<Form.Item {...formItemLayout} label="Enter the eBay item id">
					<Input
						placeholder="eBay item id"
						prefix={<TagOutlined />}
						value={itemId}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleItemIdChange(e.target.value)
						}
					/>
				</Form.Item>
			) : (
				<>
					<Form.Item {...formItemLayout} label="Enter your eBay seller name">
						<Input.Search
							enterButton
							placeholder="eBay seller name"
							prefix={<UserOutlined />}
							value={sellerName}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleSellerNameChange(e.target.value)
							}
							onSearch={handleSellerItemsSearch}
							loading={sellerLoading}
						/>
					</Form.Item>
					<Form.Item {...formItemLayout} label="Select an eBay item">
						<Select
							showSearch
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
							onSelect={handleItemIdChange}
							value={itemId}
							disabled={status !== EbayStatusCode.Success}
						>
							{items?.map((item, i) => {
								return (
									<Select.Option value={item?.itemId} key={i}>
										{item.title}
									</Select.Option>
								);
							})}
						</Select>
					</Form.Item>
				</>
			)}
			<Form.Item {...formItemLayout}>
				<Checkbox onChange={handleAgreedToTermsToggle} checked={agreedToTerms}>
					I agree to Auction Template's{" "}
					<InternalLink href="/privacy">Privacy Policy</InternalLink> and{" "}
					<InternalLink href="/terms">Terms of Use</InternalLink>.
				</Checkbox>
			</Form.Item>
			<Form.Item {...formItemLayout}>
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: "100%" }}
					disabled={!(agreedToTerms && itemId.length > 0)}
					onClick={handleLoadItemClick}
					loading={itemLoading}
				>
					Load item
				</Button>
			</Form.Item>
		</>
	);
};

export default ItemSelector;
