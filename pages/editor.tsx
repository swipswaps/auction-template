import { Typography, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../actions/ebayItemActions";
import { getSellerItems } from "../actions/ebaySellerActions";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import { IStore } from "../store";
import { AllowedEbaySiteId } from "../utils/ebay";
import { DEFAULT_SITE_ID } from "../utils/ebayApi";

const editor = () => {
	const dispatch = useDispatch();
	const { loading: itemLoading, item } = useSelector(
		(state: IStore) => state.ebayItem,
	);
	const { loading: sellerLoading, items } = useSelector(
		(state: IStore) => state.ebaySeller,
	);

	const handleItemRequest = async (
		itemId: string,
		siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
	) => {
		dispatch(getItem(itemId, siteId));
	};

	const handleSellerRequest = async (
		sellerId: string,
		siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
	) => {
		dispatch(getSellerItems(sellerId, siteId));
	};

	return (
		<Container spacing>
			<TitleAndDesc title="Editor" desc="Auction Template Editor." />
			<Typography.Paragraph>Editor coming soon</Typography.Paragraph>
			<Button
				loading={itemLoading}
				onClick={() => handleItemRequest("402800319650", "77")}
			>
				Success
			</Button>
			<Button
				loading={itemLoading}
				onClick={() => handleItemRequest("402800319650")}
			>
				Warning
			</Button>
			<Button
				loading={itemLoading}
				onClick={() => handleItemRequest("402850", "77")}
			>
				Failure
			</Button>
			<Typography.Paragraph>{item?.Title}</Typography.Paragraph>
			<Button
				loading={sellerLoading}
				onClick={() => handleSellerRequest("dem-it", "77")}
			>
				Success
			</Button>
			<Button
				loading={sellerLoading}
				onClick={() => handleSellerRequest("dem-it", "0")}
			>
				Warning
			</Button>
			<Button
				loading={sellerLoading}
				onClick={() => handleSellerRequest("görmanümlauteareaccepted", "77")}
			>
				Failure
			</Button>
			<Typography.Paragraph>{items?.length}</Typography.Paragraph>
		</Container>
	);
};

export default editor;
