import { DEFAULT_SITE_ID } from "./../utils/ebayApi";
import { EditorAction } from "../actions/types";
import { AllowedEbaySiteId } from "../utils/ebay";
import { BootswatchTheme } from "../utils/themes";

export interface IEditorReducer {
	sellerName: string;
	itemId: string;
	itemIdKnown: boolean;
	siteId: AllowedEbaySiteId;
	agreedToTerms: boolean;
	theme: BootswatchTheme;
}

export const initialEditorReducerState: IEditorReducer = {
	sellerName: "",
	itemId: "",
	itemIdKnown: false,
	siteId: DEFAULT_SITE_ID,
	agreedToTerms: false,
	theme: "cerulean",
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
		case EditorAction.Theme:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default ebayItemReducer;
