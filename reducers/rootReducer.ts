import { combineReducers } from "redux";
import ebayItemReducer, { IEbayItemReducer } from "./ebayItemReducer";
import ebaySellerReducer, { IEbaySellerReducer } from "./ebaySellerReducer";
import editorReducer, { IEditorReducer } from "./editorReducer";

export interface IRootReducer {
	ebayItem: (state: IEbayItemReducer, action: any) => IEbayItemReducer;
	ebaySeller: (state: IEbaySellerReducer, action: any) => IEbaySellerReducer;
	editor: (state: IEditorReducer, action: any) => IEditorReducer;
}

const reducers: IRootReducer = {
	ebayItem: ebayItemReducer,
	ebaySeller: ebaySellerReducer,
	editor: editorReducer,
};

export const rootReducer = combineReducers(reducers);
