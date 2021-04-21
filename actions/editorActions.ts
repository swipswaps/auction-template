import { AllowedEbaySiteId } from "../utils/ebay";
import { EditorAction } from "./types";

export const setSiteId = (siteId: AllowedEbaySiteId) => (dispatch) => {
	dispatch({
		type: EditorAction.SiteId,
		payload: { siteId },
	});
	dispatch({
		type: EditorAction.SiteId,
		payload: { siteId },
	});
};

export const setItemId = (itemId: string) => (dispatch) => {
	dispatch({
		type: EditorAction.ItemId,
		payload: { itemId },
	});
};

export const setItemIdKnown = (itemIdKnown: boolean) => (dispatch) => {
	dispatch({
		type: EditorAction.ItemIdKnown,
		payload: { itemIdKnown },
	});
};

export const setSellerName = (sellerName: string) => (dispatch) => {
	dispatch({
		type: EditorAction.SellerName,
		payload: { sellerName },
	});
};

export const setAgreedToTerms = (agreedToTerms: boolean) => (dispatch) => {
	dispatch({
		type: EditorAction.AgreedToTerms,
		payload: { agreedToTerms },
	});
};
