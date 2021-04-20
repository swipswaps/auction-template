import axios from "axios";
import { EbayItem, AllowedEbaySiteId, EbayPreviewItem } from "./ebay";
import { EbayStatusCode } from "./ebayApi";
import { sanitizeUriComponent } from "./misc";

const validateStatus = (status) => true;
const sanitizeSiteId = (siteId: AllowedEbaySiteId): String =>
	!!siteId ? `?siteId=${sanitizeUriComponent(siteId)}` : "";
export interface IGetItemResponse {
	item?: EbayItem;
	status: EbayStatusCode;
	message: String;
}

export const getItemRequest = async (
	itemId: String,
	siteId?: AllowedEbaySiteId,
): Promise<IGetItemResponse> => {
	const {
		data: { item, status, message },
	}: {
		data: IGetItemResponse;
	} = await axios.get(
		encodeURI(
			`api/items/${sanitizeUriComponent(itemId)}${sanitizeSiteId(siteId)}`,
		),
		{ validateStatus },
	);
	return { item, status, message };
};

export interface IGetSellerItemsResponse {
	items?: Array<EbayPreviewItem>;
	status: EbayStatusCode;
	message: String;
}

export const getSellerItemsRequest = async (
	sellerName: String,
	siteId?: AllowedEbaySiteId,
): Promise<IGetSellerItemsResponse> => {
	const {
		data: { items, status, message },
	}: {
		data: IGetSellerItemsResponse;
	} = await axios.get(
		encodeURI(
			`api/sellers/${sanitizeUriComponent(sellerName)}${sanitizeSiteId(siteId)}`,
		),
		{ validateStatus },
	);
	return { items, status, message };
};
