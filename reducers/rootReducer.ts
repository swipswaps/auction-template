import { combineReducers } from "redux";
import ebayItemReducer, { IEbayItemReducer } from "./ebayItemReducer";
import ebaySellerReducer, { IEbaySellerReducer } from "./ebaySellerReducer";

export interface IRootReducer {
	ebayItem: (state: IEbayItemReducer, action: any) => IEbayItemReducer;
	ebaySeller: (state: IEbaySellerReducer, action: any) => IEbaySellerReducer;
}

const reducers: IRootReducer = {
	ebayItem: ebayItemReducer,
	ebaySeller: ebaySellerReducer,
};

export const rootReducer = combineReducers(reducers);
