import { AllowedEbaySiteId, EbayErrors, EbayItem } from "./ebay";

export enum EbayStatusCode {
	Success = "Success",
	Warning = "Warning",
	Failure = "Failure",
}

export const DEFAULT_PAGE_NUMBER: Number = 1;
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

export const GET_SELLER_ITEMS_PAGE_NUMBER = "paginationInput.pageNumber";

export const GET_SELLER_ITEMS_ENTRIES_PER_PAGE =
	"paginationInput.entriesPerPage";

export const buildEndpointForItem = (
	itemId: string,
	siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
) =>
	`${GET_SINGLE_ITEM_ENDPOINT}&appid=${process.env.EBAY_APP_ID}&siteid=${siteId}&ItemID=${itemId}&${GET_SINGLE_ITEM_VERSION}&${GET_SINGLE_ITEM_RESPONSE_ENCODING}&${GET_SINGLE_ITEM_SELECTOR}`;

export const getSuccessMessageForItem = (item: EbayItem) =>
	`Successfully loaded ${item.Title}.`;

export const getWarningOrErrorMessageForItem = (errors: EbayErrors) =>
	`${errors[0].ShortMessage} ${errors[0].LongMessage}`;

export const getServerErrorMessageForItem = () =>
	`An error occured while processing your request.`;
