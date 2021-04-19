export interface IEbayItemSeller {
	UserID: String;
	FeedbackRatingStar: String;
	FeedbackScore: Number;
	PositiveFeedbackPercent: Number;
}

export interface IEbayItemPrice {
	Value: Number;
	CurrencyID: String;
}

export interface IEbayItemStorefront {
	StoreURL: String;
	StoreName: String;
}

export interface IEbayItemNameValuePair {
	Name: String;
	Value: Array<String>;
}

/**
 * reduced properties, since not all are needed
 */
export type EbayItem = {
	Description: String;
	ItemID: String;
	EndTime?: Date;
	StartTime?: Date;
	ViewItemURLForNaturalSearch: String;
	GalleryURL: String;
	PictureURL?: Array<String>;
	PostalCode?: String;
	PrimaryCategoryID?: String;
	PrimaryCategoryName?: String;
	Quantity: Number;
	Seller: IEbayItemSeller;
	ConvertedCurrentPrice: IEbayItemPrice;
	CurrentPrice: IEbayItemPrice;
	ListingStatus?: String;
	QuantitySold?: Number;
	Site?: String;
	TimeLeft?: String;
	Title: String;
	BuyItNowAvailable?: true;
	ConvertedBuyItNowPrice?: IEbayItemPrice;
	PaymentMethods?: Array<String>;
	MinimumToBid?: IEbayItemPrice;
	ItemSpecifics?: {
		NameValueList?: Array<IEbayItemNameValuePair>;
	};
	HitCount?: Number;
	PrimaryCategoryIDPath?: String;
	Storefront?: IEbayItemStorefront;
	Country?: String;
	HandlingTime?: Number;
	ConditionID?: Number;
	ConditionDisplayName?: String;
	ConditionDescription?: String;
	SKU?: String;
	NewBestOffer?: boolean;
	AvailableForPickupDropOff?: boolean;
};

export interface IEbayError {
	ShortMessage: String;
	LongMessage: String;
	ErrorCode: String;
	SeverityCode: String;
	ErrorClassification: String;
}

export type EbayErrors = Array<IEbayError>;

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

export interface IEbayMapping {
	siteId: EbaySiteId;
	siteName: EbaySiteName;
	globalId: EbaySiteGlobalId;
}

export type AllowedEbaySiteId = EbaySiteId | Number | String;

export const eBaySiteIdMappings: Array<IEbayMapping> = [
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
	siteId: AllowedEbaySiteId,
): IEbayMapping => {
	return eBaySiteIdMappings.find(
		(eBaySiteIdMapping) => Number(eBaySiteIdMapping.siteId) === Number(siteId),
	);
};
