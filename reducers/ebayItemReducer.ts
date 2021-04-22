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

const ebayItemReducer = (
	state = initialEbayItemReducerState,
	action,
): IEbayItemReducer => {
	const {
		type,
		payload,
	}: { type: EbayItemAction; payload: IEbayItemReducer } = action;
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
				item: {
					...payload.item,
					_displaySellerName: payload.item.Seller.UserID,
				},
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
