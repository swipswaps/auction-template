import { EbayStatusCode } from "./../utils/ebayApi";
import { getItemRequest } from "../utils/api";
import { AllowedEbaySiteId } from "../utils/ebay";
import { getFeedbackMessageForRequest } from "../utils/ebayFrontend";
import { EbayItemAction } from "./types";
import produce from "immer";
import { IStore } from "../store";
import { arrayMove } from "react-sortable-hoc";

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

export const setNameValuePairName = (i: number, name: string) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList[i].Name = name;
				return itemDraft;
			}),
		},
	});
};

export const setNameValuePairValue = (i: number, value: string) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList[i].Value = value;
				return itemDraft;
			}),
		},
	});
};

export const dragNameValuePair = (oldIndex: number, newIndex: number) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ItemSpecifics.NameValueList = arrayMove(
					itemDraft.ItemSpecifics.NameValueList,
					oldIndex,
					newIndex,
				);
				return itemDraft;
			}),
		},
	});
};

export const setSellerDisplayName = (name: string) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft._displaySellerName = name;
				return itemDraft;
			}),
		},
	});
};

export const setTitle = (title: string) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.Title = title;
				return itemDraft;
			}),
		},
	});
};

export const setDescription = (description: string) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.Description = description;
				return itemDraft;
			}),
		},
	});
};

export const setPrice = (price: number) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ConvertedCurrentPrice.Value = price;
				return itemDraft;
			}),
		},
	});
};

export const setShippingCost = (shippingCost: number) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ShippingCostSummary.ShippingServiceCost.Value = shippingCost;
				return itemDraft;
			}),
		},
	});
};

export const setCurrency = (currency: string) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft.ConvertedCurrentPrice.CurrencyID = currency;
				return itemDraft;
			}),
		},
	});
};

export const addAdditionalSection = () => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft._additionalSections.push({
					heading: "",
					content: "",
				});
				return itemDraft;
			}),
		},
	});
};

export const deleteAdditionalSection = (i: number) => async (
	dispatch: any,
	getState: () => IStore,
) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft._additionalSections.splice(i, 1);
				return itemDraft;
			}),
		},
	});
};

export const setAdditionalSectionHeading = (
	i: number,
	heading: string,
) => async (dispatch: any, getState: () => IStore) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft._additionalSections[i].heading = heading;
				return itemDraft;
			}),
		},
	});
};

export const setAdditionalSectionContent = (
	i: number,
	content: string,
) => async (dispatch: any, getState: () => IStore) => {
	dispatch({
		type: EbayItemAction.Set,
		payload: {
			item: produce(getState().ebayItem.item, (itemDraft) => {
				itemDraft._additionalSections[i].content = content;
				return itemDraft;
			}),
		},
	});
};
