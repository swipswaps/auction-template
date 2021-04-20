import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const { composeWithDevTools } = require("redux-devtools-extension");
import { rootReducer } from "./reducers/rootReducer";
import {
	initialEbayItemReducerState,
	IEbayItemReducer,
} from "./reducers/ebayItemReducer";
import {
	IEbaySellerReducer,
	initialEbaySellerReducerState,
} from "./reducers/ebaySellerReducer";
import {
	IEditorReducer,
	initialEditorReducerState,
} from "./reducers/editorReducer";

export interface IStore {
	ebayItem: IEbayItemReducer;
	ebaySeller: IEbaySellerReducer;
	editor: IEditorReducer;
}

const initialStore: IStore = {
	ebayItem: initialEbayItemReducerState,
	ebaySeller: initialEbaySellerReducerState,
	editor: initialEditorReducerState,
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialStore,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
