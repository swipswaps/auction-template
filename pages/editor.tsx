import { Typography, Button } from "antd";
import React, { useState } from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import { getItem } from "../utils/api";
import { AllowedEbaySiteId, EbayItem } from "../utils/ebay";
import { DEFAULT_SITE_ID } from "../utils/ebayApi";
import { getFeedbackMessageForSingleItemRequest } from "../utils/ebayFrontend";

const editor = () => {
	const [item, setItem] = useState<null | EbayItem>(null);
	const handleItemRequest = async (
		itemId: string,
		siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
	): Promise<void> => {
		const { item, status, message } = await getItem(itemId, siteId);
		setItem(item);
		getFeedbackMessageForSingleItemRequest(status, message);
	};

	return (
		<Container spacing>
			<TitleAndDesc title="Editor" desc="Auction Template Editor." />
			<Typography.Paragraph>Editor coming soon</Typography.Paragraph>
			<Button onClick={() => handleItemRequest("402800319650", "77")}>
				Success
			</Button>
			<Button onClick={() => handleItemRequest("402800319650")}>Warning</Button>
			<Button onClick={() => handleItemRequest("402850", "77")}>Failure</Button>
			<Typography.Paragraph>{item?.Title}</Typography.Paragraph>
		</Container>
	);
};

export default editor;
