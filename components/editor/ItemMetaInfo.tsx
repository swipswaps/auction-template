import { Input, Form, Carousel, Image, Row, Col } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import { formItemLayout, gutter } from "../../utils/applicationConstants";
import produce from "immer";
import { EbayItem } from "../../utils/ebay";
import { setItem } from "../../actions/ebayItemActions";

const ItemMetaInfo = () => {
	const dispatch = useDispatch();
	const { item } = useSelector((state: IStore) => state.ebayItem);
	const { md } = useBreakpoint();

	const handleItemUpdate = (updatedItem: EbayItem) =>
		dispatch(setItem(updatedItem));

	return (
		<>
			<Form.Item {...formItemLayout} label="View item images provided by eBay">
				<Carousel>
					{item.PictureURL.map((src, i) => (
						<Image
							src={src}
							alt={`Product image #${i + 1} of ${item.Title} provided by eBay.`}
							width="100%"
							key={i}
						/>
					))}
				</Carousel>
			</Form.Item>
			<Form.Item {...formItemLayout} label="Edit displayed seller name">
				<Input
					placeholder="Displayed seller name"
					defaultValue={item.Seller.UserID}
					onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
						handleItemUpdate(
							produce(item, (itemDraft) => {
								itemDraft.Seller.UserID = e.target.value;
								return itemDraft;
							}),
						)
					}
				/>
			</Form.Item>
			<Form.Item {...formItemLayout} label="Edit displayed item title">
				<Input
					placeholder="Displayed item title"
					defaultValue={item.Title}
					onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
						handleItemUpdate(
							produce(item, (itemDraft) => {
								itemDraft.Title = e.target.value;
								return itemDraft;
							}),
						)
					}
				/>
			</Form.Item>
			<Form.Item {...formItemLayout} label="Edit displayed item description">
				<Input.TextArea
					placeholder="Displayed item description"
					rows={5}
					defaultValue={item.Description}
					onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
						handleItemUpdate(
							produce(item, (itemDraft) => {
								itemDraft.Description = e.target.value;
								return itemDraft;
							}),
						)
					}
				/>
			</Form.Item>
			<Row gutter={md ? gutter : 0}>
				<Col xs={24} md={8}>
					<Form.Item {...formItemLayout} label="Edit displayed item price">
						<Input
							placeholder="Displayed item price"
							defaultValue={item.ConvertedCurrentPrice.Value}
							type="number"
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								handleItemUpdate(
									produce(item, (itemDraft) => {
										itemDraft.ConvertedCurrentPrice.Value = Number(
											e.target.value,
										);
										return itemDraft;
									}),
								)
							}
						/>
					</Form.Item>
				</Col>
				<Col xs={24} md={8}>
					<Form.Item {...formItemLayout} label="Edit displayed shipping costs">
						<Input
							placeholder="Displayed shipping costs"
							defaultValue={item.ShippingCostSummary.ShippingServiceCost.Value}
							type="number"
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								handleItemUpdate(
									produce(item, (itemDraft) => {
										itemDraft.ShippingCostSummary.ShippingServiceCost.Value = Number(
											e.target.value,
										);
										return itemDraft;
									}),
								)
							}
						/>
					</Form.Item>
				</Col>
				<Col xs={24} md={8}>
					<Form.Item {...formItemLayout} label="Edit displayed currency">
						<Input
							placeholder="Displayed currency"
							defaultValue={item.ConvertedCurrentPrice.CurrencyID}
							onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
								handleItemUpdate(
									produce(item, (itemDraft) => {
										itemDraft.ConvertedCurrentPrice.CurrencyID = e.target.value;
										return itemDraft;
									}),
								)
							}
						/>
					</Form.Item>
				</Col>
			</Row>
		</>
	);
};

export default ItemMetaInfo;
