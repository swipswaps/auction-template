import React from "react";
import { Checkbox, Form, Input, Select, Button } from "antd";
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
import { formItemAlignment } from "../../utils/applicationConstants";

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

	const handleItemIdChange = (itemId) => dispatch(setItemId(String(itemId)));

	const handleSellerNameChange = (sellerName) =>
		dispatch(setSellerName(String(sellerName)));

	const handleSellerItemsSearch = () =>
		dispatch(getSellerItems(String(sellerName), Number(siteId)));

	const handleAgreedToTermsToggle = () =>
		dispatch(setAgreedToTerms(!agreedToTerms));

	const handleLoadItemClick = () =>
		dispatch(getItem(String(itemId), Number(siteId)));

	return (
		<>
			{itemIdKnown ? (
				<Form.Item {...formItemAlignment} label="Enter the eBay item id">
					<Input
						placeholder="eBay item id"
						prefix={<TagOutlined />}
						value={String(itemId)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleItemIdChange(e.target.value)
						}
					/>
				</Form.Item>
			) : (
				<>
					<Form.Item {...formItemAlignment} label="Enter your eBay seller name">
						<Input.Search
							enterButton
							placeholder="eBay seller name"
							prefix={<UserOutlined />}
							value={String(sellerName)}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleSellerNameChange(e.target.value)
							}
							onSearch={handleSellerItemsSearch}
							loading={sellerLoading}
						/>
					</Form.Item>
					<Form.Item {...formItemAlignment} label="Select an eBay item">
						<Select
							showSearch
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
							onChange={handleItemIdChange}
							value={String(itemId)}
							disabled={status !== EbayStatusCode.Success}
						>
							{items?.map((item, i) => {
								return (
									<Select.Option value={String(item?.itemId)} key={i}>
										{item.title}
									</Select.Option>
								);
							})}
						</Select>
					</Form.Item>
				</>
			)}
			<Form.Item {...formItemAlignment}>
				<Checkbox onChange={handleAgreedToTermsToggle} checked={agreedToTerms}>
					I agree to Auction Template's{" "}
					<InternalLink href="/privacy">Privacy Policy</InternalLink> and{" "}
					<InternalLink href="/terms">Terms of Use</InternalLink>.
				</Checkbox>
			</Form.Item>
			<Form.Item {...formItemAlignment}>
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
