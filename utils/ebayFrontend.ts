import { EbayStatusCodes } from "./ebayApi";
import { message } from "antd";

export const getFeedbackMessageForSingleItemRequest = (
	status: EbayStatusCodes,
	messageString: String,
) => {
	message[
		status === EbayStatusCodes.Success
			? "success"
			: status === EbayStatusCodes.Warning
			? "warning"
			: "error"
	](messageString);
};
