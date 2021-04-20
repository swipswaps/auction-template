import { EbayItemFetchState } from "../actions/types";
import { EbayItem } from "../utils/ebay";
import { EbayStatusCode } from "../utils/ebayApi";

export interface IEbayItemReducer {
	item?: EbayItem | null;
	status: EbayStatusCode | null;
	message: String | null;
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
		case EbayItemFetchState.Start:
			return {
				...state,
				loading: true,
			};
		case EbayItemFetchState.Success:
			return {
				...state,
				loading: false,
				...payload,
			};
		case EbayItemFetchState.Failure:
			return {
				...state,
				item: null,
				loading: false,
				...payload,
			};
		default:
			return state;
	}
};

export default ebayItemReducer;
