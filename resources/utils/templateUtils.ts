import {
	EbayCountry,
	EbayItem,
	getTldFromEbayCountry,
} from "./../../utils/ebay";
import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";
import { EBAY_CATEGORY_SEPARATOR } from "../../utils/ebay";

export const componentToHtml = (component: ReactNode): string =>
	ReactDOMServer.renderToStaticMarkup(component);

export const sanitizeCategoryStringForItem = (categoryString: string) =>
	categoryString.replaceAll(EBAY_CATEGORY_SEPARATOR, " > ");

const getCurrencyForItem = (item: EbayItem) =>
	item?.ConvertedCurrentPrice?.CurrencyID;

export const sanitizeCurrentPriceForItem = (
	item: EbayItem,
) => `${item?.ConvertedCurrentPrice?.Value?.toFixed(2)}${" "}
	${getCurrencyForItem(item)}`;

export const sanitizeShippingCostForItem = (
	item: EbayItem,
) => `${item?.ShippingCostSummary?.ShippingServiceCost?.Value?.toFixed(2)}${" "}
		${getCurrencyForItem(item)}`;

const getLocalizedEbayUrl = (country: EbayCountry) =>
	`https://www.ebay.${getTldFromEbayCountry(country)}`;

export const getEbayFeedbackUrlFromSellerName = (
	sellerName: string,
	country: EbayCountry,
) => `${getLocalizedEbayUrl(country)}/fdbk/feedback_profile/${sellerName}`;

export const getEbayAccountUrlFromSellerName = (
	sellerName: string,
	country: EbayCountry,
) => `${getLocalizedEbayUrl(country)}/usr/${sellerName}`;

export const getEbayViewListingsUrlFromSellerName = (
	sellerName: string,
	country: EbayCountry,
) =>
	`${getLocalizedEbayUrl(
		country,
	)}/sch/${sellerName}/m.html?_nkw=&_armrs=1&_ipg=&_from=`;
