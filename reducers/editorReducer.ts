import { DEFAULT_SITE_ID } from "./../utils/ebayApi";
import { EditorAction } from "../actions/types";
import { AllowedEbaySiteId } from "../utils/ebay";

export interface IEditorReducer {
	sellerName: String;
	itemId: String;
	itemIdKnown: boolean;
	siteId: AllowedEbaySiteId;
	agreedToTerms: boolean;
}

export const initialEditorReducerState: IEditorReducer = {
	sellerName: "",
	itemId: "",
	itemIdKnown: false,
	siteId: DEFAULT_SITE_ID,
	agreedToTerms: false,
};

const ebayItemReducer = (state = initialEditorReducerState, action) => {
	const { type, payload } = action;
	switch (type) {
		case EditorAction.SiteId:
			return {
				...state,
				...payload,
			};
		case EditorAction.SellerName:
			return {
				...state,
				...payload,
			};
		case EditorAction.ItemId:
			return {
				...state,
				...payload,
			};
		case EditorAction.ItemIdKnown:
			return {
				...state,
				...payload,
			};
		case EditorAction.AgreedToTerms:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default ebayItemReducer;
