import { combineReducers } from "redux";
import ebayItemReducer, { IEbayItemReducer } from "./ebayItemReducer";

export interface IRootReducer {
	ebayItem: (state: IEbayItemReducer, action: any) => IEbayItemReducer;
}

const reducers: IRootReducer = {
	ebayItem: ebayItemReducer,
};

export const rootReducer = combineReducers(reducers);
