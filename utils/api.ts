import axios from "axios";
import { EbayItem, AllowedEbaySiteId } from "./ebay";
import { EbayStatusCode } from "./ebayApi";

export interface IGetItemResponse {
	item?: EbayItem;
	status: EbayStatusCode;
	message: String;
}

export const getItemRequest = async (
	itemId: string,
	siteId?: AllowedEbaySiteId,
): Promise<IGetItemResponse> => {
	const {
		data: { item, status, message },
	}: {
		data: IGetItemResponse;
	} = await axios.get(
		`api/items/${itemId}${!!siteId ? `?siteId=${siteId}` : ""}`,
		{ validateStatus: (status) => true },
	);
	return { item, status, message };
};
