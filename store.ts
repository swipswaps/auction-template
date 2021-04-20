import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const { composeWithDevTools } = require("redux-devtools-extension");
import { rootReducer } from "./reducers/rootReducer";
import {
	initialEbayItemReducerState,
	IEbayItemReducer,
} from "./reducers/ebayItemReducer";

export interface IStore {
	ebayItem: IEbayItemReducer;
}

const initialStore: IStore = {
	ebayItem: initialEbayItemReducerState,
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialStore,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
