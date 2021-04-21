import { DEFAULT_SITE_ID } from "./ebayApi";
export type EbayItemSeller = {
	UserID: string;
	FeedbackRatingStar: string;
	FeedbackScore: number;
	PositiveFeedbackPercent: number;
};

export type EbayItemPrice = {
	Value: number;
	CurrencyID: string;
};

export type EbayItemStorefront = {
	StoreURL: string;
	StoreName: string;
};

export type EbayItemNameValuePair = {
	Name: string;
	Value: string | Array<string>;
};

/**
 * reduced properties, since not all are needed
 */
export type EbayItem = {
	Description: string;
	ItemID: string;
	EndTime?: Date;
	StartTime?: Date;
	ViewItemURLForNaturalSearch: string;
	GalleryURL: string;
	PictureURL?: Array<string>;
	PostalCode?: string;
	PrimaryCategoryID?: string;
	PrimaryCategoryName?: string;
	Quantity: number;
	Seller: EbayItemSeller;
	ConvertedCurrentPrice: EbayItemPrice;
	CurrentPrice: EbayItemPrice;
	ListingStatus?: string;
	QuantitySold?: number;
	Site?: string;
	TimeLeft?: string;
	Title: string;
	BuyItNowAvailable?: boolean;
	ConvertedBuyItNowPrice?: EbayItemPrice;
	PaymentMethods?: Array<string>;
	MinimumToBid?: EbayItemPrice;
	ItemSpecifics?: {
		NameValueList?: Array<EbayItemNameValuePair>;
	};
	HitCount?: number;
	PrimaryCategoryIDPath?: string;
	Storefront?: EbayItemStorefront;
	Country?: string;
	HandlingTime?: number;
	ConditionID?: number;
	ConditionDisplayName?: string;
	ConditionDescription?: string;
	SKU?: string;
	NewBestOffer?: boolean;
	AvailableForPickupDropOff?: boolean;
	ShippingCostSummary: {
		ShippingServiceCost: EbayItemPrice;
		ListedShippingServiceCost: EbayItemPrice;
	};
};

export type EbayPrimaryCategory = {
	categoryId: string;
	categoryName: string;
};

/**
 * reduced properties, since not all are needed
 */
export type EbayPreviewItem = {
	itemId: string;
	title: string;
	globalId: EbaySiteGlobalId;
	primaryCategory: EbayPrimaryCategory;
	galleryURL: string;
	viewItemURL: string;
};

export type EbayError = {
	ShortMessage: string;
	LongMessage: string;
	ErrorCode: string;
	SeverityCode: string;
	ErrorClassification: string;
};

export type EbayErrorObject = {
	error: {
		message: string;
	};
};

export type EbayErrors = Array<EbayError>;

export type EbaySiteId =
	| 0
	| 2
	| 3
	| 15
	| 16
	| 23
	| 71
	| 77
	| 100
	| 101
	| 123
	| 146
	| 186
	| 193
	| 201
	| 203
	| 205
	| 207
	| 210
	| 211
	| 212
	| 216;

export type EbaySiteName =
	| "eBay United States"
	| "eBay Canada (English)"
	| "eBay UK"
	| "eBay Australia"
	| "eBay Austria"
	| "eBay Belgium (French)"
	| "eBay France"
	| "eBay Germany"
	| "eBay Motors"
	| "eBay Italy"
	| "eBay Belgium (Dutch)"
	| "eBay Netherlands"
	| "eBay Spain"
	| "eBay Switzerland"
	| "eBay Hong Kong"
	| "eBay India"
	| "eBay Ireland"
	| "eBay Malaysia"
	| "eBay Canada (French)"
	| "eBay Philippines"
	| "eBay Poland"
	| "eBay Singapore";

export type EbaySiteGlobalId =
	| "EBAY-US"
	| "EBAY-ENCA"
	| "EBAY-GB"
	| "EBAY-AU"
	| "EBAY-AT"
	| "EBAY-FRBE"
	| "EBAY-FR"
	| "EBAY-DE"
	| "EBAY-MOTOR"
	| "EBAY-IT"
	| "EBAY-NLBE"
	| "EBAY-NL"
	| "EBAY-ES"
	| "EBAY-CH"
	| "EBAY-HK"
	| "EBAY-IN"
	| "EBAY-IE"
	| "EBAY-MY"
	| "EBAY-FRCA"
	| "EBAY-PH"
	| "EBAY-PL"
	| "EBAY-SG";

export type EbayMapping = {
	siteId: EbaySiteId;
	siteName: EbaySiteName;
	globalId: EbaySiteGlobalId;
};

export type AllowedEbaySiteId = EbaySiteId | Number | String;

export const eBaySiteIdMappings: Array<EbayMapping> = [
	{ siteId: 0, siteName: "eBay United States", globalId: "EBAY-US" },
	{ siteId: 2, siteName: "eBay Canada (English)", globalId: "EBAY-ENCA" },
	{ siteId: 3, siteName: "eBay UK", globalId: "EBAY-GB" },
	{ siteId: 15, siteName: "eBay Australia", globalId: "EBAY-AU" },
	{ siteId: 16, siteName: "eBay Austria", globalId: "EBAY-AT" },
	{ siteId: 23, siteName: "eBay Belgium (French)", globalId: "EBAY-FRBE" },
	{ siteId: 71, siteName: "eBay France", globalId: "EBAY-FR" },
	{ siteId: 77, siteName: "eBay Germany", globalId: "EBAY-DE" },
	{ siteId: 100, siteName: "eBay Motors", globalId: "EBAY-MOTOR" },
	{ siteId: 101, siteName: "eBay Italy", globalId: "EBAY-IT" },
	{ siteId: 123, siteName: "eBay Belgium (Dutch)", globalId: "EBAY-NLBE" },
	{ siteId: 146, siteName: "eBay Netherlands", globalId: "EBAY-NL" },
	{ siteId: 186, siteName: "eBay Spain", globalId: "EBAY-ES" },
	{ siteId: 193, siteName: "eBay Switzerland", globalId: "EBAY-CH" },
	{ siteId: 201, siteName: "eBay Hong Kong", globalId: "EBAY-HK" },
	{ siteId: 203, siteName: "eBay India", globalId: "EBAY-IN" },
	{ siteId: 205, siteName: "eBay Ireland", globalId: "EBAY-IE" },
	{ siteId: 207, siteName: "eBay Malaysia", globalId: "EBAY-MY" },
	{ siteId: 210, siteName: "eBay Canada (French)", globalId: "EBAY-FRCA" },
	{ siteId: 211, siteName: "eBay Philippines", globalId: "EBAY-PH" },
	{ siteId: 212, siteName: "eBay Poland", globalId: "EBAY-PL" },
	{ siteId: 216, siteName: "eBay Singapore", globalId: "EBAY-SG" },
];

export const getMappingFromSiteId = (
	siteId: AllowedEbaySiteId = DEFAULT_SITE_ID,
): EbayMapping => {
	return (
		eBaySiteIdMappings.find(
			(eBaySiteIdMapping) =>
				Number(eBaySiteIdMapping.siteId) === Number(siteId),
		) ??
		eBaySiteIdMappings[
			eBaySiteIdMappings.indexOf(
				eBaySiteIdMappings.filter(
					(eBaySiteIdMapping) => eBaySiteIdMapping.siteId === DEFAULT_SITE_ID,
				)[0],
			)
		]
	);
};
