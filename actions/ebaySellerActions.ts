import { getSellerItemsRequest } from "../utils/api";
import { AllowedEbaySiteId } from "../utils/ebay";
import { EbayStatusCode } from "../utils/ebayApi";
import { getFeedbackMessageForRequest } from "../utils/ebayFrontend";
import { EbaySellerFetchState } from "./types";

export const getSellerItems = (
	sellerId: string,
	siteId?: AllowedEbaySiteId,
) => async (dispatch) => {
	dispatch({
		type: EbaySellerFetchState.Start,
	});
	try {
		const { items, status, message } = await getSellerItemsRequest(
			sellerId,
			siteId,
		);
		getFeedbackMessageForRequest(status, message);
		if (!!items && items.length > 0 && status !== EbayStatusCode.Failure)
			dispatch({
				type: EbaySellerFetchState.Success,
				payload: { items, status, message },
			});
		else {
			dispatch({
				type: EbaySellerFetchState.Failure,
				payload: { status, message },
			});
		}
	} catch (err) {
		dispatch({
			type: EbaySellerFetchState.Failure,
		});
	}
};
