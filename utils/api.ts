import axios from "axios";
import { ILoadItem, LoadItemModel } from "../db/models/loadItemModel";
import { StatsResponse } from "../pages/api/stats";
import { EbayItem, AllowedEbaySiteId, EbayPreviewItem } from "./ebay";
import { EbayStatusCode } from "./ebayApi";
import { getApplicationBaseUrl, sanitizeUriComponent } from "./misc";
import { BootswatchTheme } from "./themes";

const validateStatus = (status) => true;
const sanitizeSiteId = (siteId: AllowedEbaySiteId): string =>
	!!siteId ? `?siteId=${sanitizeUriComponent(siteId)}` : "";
export interface IGetItemResponse {
	item?: EbayItem;
	status: EbayStatusCode;
	message: string;
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
	message: string;
}

export const getSellerItemsRequest = async (
	sellerName: string,
	siteId?: AllowedEbaySiteId,
): Promise<IGetSellerItemsResponse> => {
	const {
		data: { items, status, message },
	}: {
		data: IGetSellerItemsResponse;
	} = await axios.get(
		encodeURI(
			`api/sellers/${sanitizeUriComponent(sellerName)}${sanitizeSiteId(
				siteId,
			)}`,
		),
		{ validateStatus },
	);
	return { items, status, message };
};

export const saveLoadInDb = async (
	itemId: string,
	itemIdKnown: boolean,
	siteId: AllowedEbaySiteId,
	sellerName: string,
): Promise<void> => {
	const load = {
		itemId,
		itemIdKnown,
		siteId,
		sellerName,
	};
	await axios.post("/api/stats/load", { load }, { validateStatus });
};

export const saveCopyInDb = async (
	itemId: string,
	theme: BootswatchTheme,
	item: EbayItem,
	siteId: AllowedEbaySiteId,
	sellerName: string,
): Promise<void> => {
	const copy = {
		itemId,
		theme,
		item,
		siteId,
		sellerName,
	};
	await axios.post("/api/stats/copy", { copy }, { validateStatus });
};

export const getStats = async (): Promise<StatsResponse> => {
	const { data }: { data: StatsResponse } = await axios.get(
		`${getApplicationBaseUrl()}/api/stats`,
		{
			validateStatus,
		},
	);
	return data;
};
