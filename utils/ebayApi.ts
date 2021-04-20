import axios from "axios";
import {
	AllowedEbaySiteId,
	EbayErrorObject,
	EbayErrors,
	EbayItem,
	EbayPreviewItem,
	getMappingFromSiteId,
} from "./ebay";
import { parseStringPromise } from "xml2js";

export enum EbayStatusCode {
	Success = "Success",
	Warning = "Warning",
	Failure = "Failure",
}

export const DEFAULT_PAGE_Number: Number = 1;
export const DEFAULT_ENTRIES_PER_PAGE: Number = 100;
export const DEFAULT_SITE_ID: AllowedEbaySiteId = 0;

export const GET_SINGLE_ITEM_ENDPOINT =
	"https://open.api.ebay.com/shopping?callname=GetSingleItem";

export const GET_SINGLE_ITEM_SELECTOR =
	"IncludeSelector=Details,Description,TextDescription,ShippingCosts,ItemSpecifics,Variations,Compatibility";

export const GET_SINGLE_ITEM_VERSION = "version=1157";

export const GET_SINGLE_ITEM_RESPONSE_ENCODING = "responseencoding=JSON";

export const GET_SELLER_ITEMS_ENDPOINT =
	"https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced";

export const GET_SELLER_ITEMS_SELLER_FILTER =
	"itemFilter(0).name=Seller&itemFilter(0).value(0)";

export const GET_SELLER_ITEMS_PAGE_Number = "paginationInput.pageNumber";

export const GET_SELLER_ITEMS_ENTRIES_PER_PAGE =
	"paginationInput.entriesPerPage";

export const buildEndpointForItem = (
	itemId: String,
	siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
) =>
	`${GET_SINGLE_ITEM_ENDPOINT}&appid=${process.env.EBAY_APP_ID}&siteid=${siteId}&ItemID=${itemId}&${GET_SINGLE_ITEM_VERSION}&${GET_SINGLE_ITEM_RESPONSE_ENCODING}&${GET_SINGLE_ITEM_SELECTOR}`;

export const buildEndpointForSeller = (
	sellerName: String,
	siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
	pageNumber: Number = DEFAULT_PAGE_Number,
	entriesPerPage: Number = DEFAULT_ENTRIES_PER_PAGE,
) =>
	`${GET_SELLER_ITEMS_ENDPOINT}&SECURITY-APPNAME=${
		process.env.EBAY_APP_ID
	}&GLOBAL-ID=${
		getMappingFromSiteId(Number(!!siteId ? siteId : DEFAULT_SITE_ID)).globalId
	}&${GET_SELLER_ITEMS_SELLER_FILTER}=${sellerName}&${GET_SELLER_ITEMS_PAGE_Number}=${pageNumber}&${GET_SELLER_ITEMS_ENTRIES_PER_PAGE}=${entriesPerPage}`;

export interface IGetAllSellerItemsRecursively {
	items?: Array<EbayPreviewItem>;
	status: EbayStatusCode;
	errorObject?: EbayErrorObject;
}

export const getAllSellerItemsRecursively = async (
	sellerName: String,
	siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
	sellerItems: Array<any> = [],
	pageNumber: Number = DEFAULT_PAGE_Number,
	totalPages: Number = Infinity,
): Promise<IGetAllSellerItemsRecursively> => {
	try {
		const { data: dataInXml } = await axios.get(
			buildEndpointForSeller(sellerName, siteId, pageNumber),
		);

		const dataInJson = await parseStringPromise(dataInXml, {
			explicitArray: false,
		});

		const {
			findItemsAdvancedResponse,
			findItemsAdvancedResponse: { ack: status, errorMessage: errorObject },
		} = dataInJson;

		if (status !== EbayStatusCode.Failure) {
			const {
				searchResult: { item: items },
				paginationOutput: { pageNumber, totalPages },
			} = findItemsAdvancedResponse;

			if (items && Array.isArray(items)) {
				sellerItems.push(...items);
				if (pageNumber < totalPages) {
					return getAllSellerItemsRecursively(
						sellerName,
						siteId,
						sellerItems,
						Number(pageNumber) + 1,
						totalPages,
					);
				}
				return { items: sellerItems, status };
			} else {
				return {
					errorObject: {
						error: {
							message: `Seller ${sellerName} currently has no listings in ${
								getMappingFromSiteId(siteId).siteName
							}.`,
						},
					},
					status: EbayStatusCode.Warning,
				};
			}
		} else {
			return { errorObject, status };
		}
	} catch (err) {
		return {
			status: EbayStatusCode.Failure,
			errorObject: {
				error: {
					message: getErrorMessageForSeller(sellerName),
				},
			},
		};
	}
};

export const getSuccessMessageForItem = (item: EbayItem) =>
	`Successfully loaded ${item.Title}.`;

export const getWarningOrErrorMessageForItem = (errors: EbayErrors) =>
	`${errors[0].ShortMessage} ${errors[0].LongMessage}`;

export const getServerErrorMessage = () =>
	`An error occured while processing your request.`;

export const getSuccessMessageForSellerItems = (
	items: Array<EbayPreviewItem>,
	sellerName: String,
) => `Successfully loaded ${items.length} items from ${sellerName}.`;

export const getWarningOrErrorMessageForSellerItem = (
	errorObject: EbayErrorObject,
) => `${errorObject.error.message}`;

export const getErrorMessageForSeller = (sellerName) =>
	`An error occured when trying to load items of ${sellerName} for this particular eBay country.`;
