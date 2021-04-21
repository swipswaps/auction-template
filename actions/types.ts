export enum EbayItemAction {
	Start = "FETCH_ITEM_START",
	Success = "FETCH_ITEM_SUCCESS",
	Failure = "FETCH_ITEM_FAILURE",
	Set = "SET_ITEM",
}

export enum EbaySellerAction {
	Start = "FETCH_SELLER_START",
	Success = "FETCH_SELLER_SUCCESS",
	Failure = "FETCH_SELLER_FAILURE",
}

export enum EditorAction {
	ItemId = "SET_ITEM_ID",
	ItemIdKnown = "SET_ITEM_ID_KNOWN",
	SellerName = "SET_SELLER_NAME",
	SiteId = "SET_SITE_ID",
	AgreedToTerms = "SET_AGREED_TO_TERMS",
}
