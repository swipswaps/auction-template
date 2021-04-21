import { EbayStatusCode } from "./../utils/ebayApi";
import { getItemRequest } from "../utils/api";
import { AllowedEbaySiteId, EbayItem } from "../utils/ebay";
import { getFeedbackMessageForRequest } from "../utils/ebayFrontend";
import { EbayItemAction } from "./types";

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
