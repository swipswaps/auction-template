import { EbayStatusCode } from "./../utils/ebayApi";
import { getItemRequest } from "../utils/api";
import {
	AllowedEbaySiteId,
	EbayItem,
	EbayItemNameValuePair,
} from "../utils/ebay";
import { getFeedbackMessageForRequest } from "../utils/ebayFrontend";
import { EbayItemAction } from "./types";
import produce from "immer";
import { IStore } from "../store";

export const setItem = (item: EbayItem) => async (dispatch) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: { item },
	});
};

export const getItem = (itemId: string, siteId?: AllowedEbaySiteId) => async (
	dispatch,
) => {
	if (itemId.length > 0) {
		dispatch({
			type: EbayItemAction.Start,
		});

		try {
			const { item, status, message } = await getItemRequest(itemId, siteId);
			getFeedbackMessageForRequest(status, message);
			if (
				!!item &&
				Object.keys(item).length > 0 &&
				status !== EbayStatusCode.Failure
			)
				dispatch({
					type: EbayItemAction.Success,
					payload: { item, status, message },
				});
			else {
				dispatch({
					type: EbayItemAction.Failure,
					payload: { status, message },
				});
			}
		} catch (err) {
			dispatch({
				type: EbayItemAction.Failure,
			});
		}
	} else {
		getFeedbackMessageForRequest(
			EbayStatusCode.Failure,
			"Please enter an item id",
		);
	}
};

export const addNameValuePair = () => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList.push({
					Name: "",
					Value: "",
				});
				return itemDraft;
			}),
		},
	});
};

export const deleteNameValuePair = (i: number) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList.splice(i, 1);
				return itemDraft;
			}),
		},
	});
};
