import { getSellerItemsRequest } from "../utils/api";
import { AllowedEbaySiteId } from "../utils/ebay";
import { EbayStatusCode } from "../utils/ebayApi";
import { getFeedbackMessageForRequest } from "../utils/ebayFrontend";
import { EbaySellerAction } from "./types";

export const getSellerItems = (
	sellerName: string,
	siteId?: AllowedEbaySiteId,
) => async (dispatch) => {
	if (sellerName.length > 0) {
		dispatch({
			type: EbaySellerAction.Start,
		});

		try {
			const { items, status, message } = await getSellerItemsRequest(
				sellerName,
				siteId,
			);
			getFeedbackMessageForRequest(status, message);
			if (!!items && Array.isArray(items) && status !== EbayStatusCode.Failure)
				dispatch({
					type: EbaySellerAction.Success,
					payload: { items, status, message },
				});
			else {
				dispatch({
					type: EbaySellerAction.Failure,
					payload: { status, message },
				});
			}
		} catch (err) {
			dispatch({
				type: EbaySellerAction.Failure,
			});
		}
	} else {
		getFeedbackMessageForRequest(
			EbayStatusCode.Failure,
			"Please enter a seller name",
		);
	}
};
