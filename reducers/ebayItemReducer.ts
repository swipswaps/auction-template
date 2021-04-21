import { EbayItemAction } from "../actions/types";
import { EbayItem } from "../utils/ebay";
import { EbayStatusCode } from "../utils/ebayApi";

export interface IEbayItemReducer {
	item?: EbayItem | null;
	status: EbayStatusCode | null;
	message: string | null;
	loading: boolean;
}

export const initialEbayItemReducerState: IEbayItemReducer = {
	item: null,
	status: null,
	message: null,
	loading: false,
};

const ebayItemReducer = (state = initialEbayItemReducerState, action) => {
	const { type, payload } = action;
	switch (type) {
		case EbayItemAction.Start:
			return {
				...state,
				loading: true,
			};
		case EbayItemAction.Success:
			return {
				...state,
				loading: false,
				...payload,
			};
		case EbayItemAction.Failure:
			return {
				...state,
				item: null,
				loading: false,
				...payload,
			};
		case EbayItemAction.Set:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};

export default ebayItemReducer;
