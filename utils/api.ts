import axios from "axios";
import { EbayItem, AllowedEbaySiteId } from "./ebay";
import { EbayStatusCodes } from "./ebayApi";

export interface ISingleItemResponse {
	item?: EbayItem;
	status: EbayStatusCodes;
	message: String;
}

export const getItem = async (
	itemId: string,
	siteId?: AllowedEbaySiteId,
): Promise<ISingleItemResponse> => {
	const {
		data: { item, status, message },
	}: {
		data: ISingleItemResponse;
	} = await axios.get(
		`api/items/${itemId}${!!siteId ? `?siteId=${siteId}` : ""}`,
		{ validateStatus: (status) => true },
	);
	return { item, status, message };
};
