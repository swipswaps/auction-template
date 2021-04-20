import { EbayStatusCode } from "./ebayApi";
import { message } from "antd";

export const getFeedbackMessageForRequest = (
	status: EbayStatusCode,
	messageString: String,
) => {
	message[
		status === EbayStatusCode.Success
			? "success"
			: status === EbayStatusCode.Warning
			? "warning"
			: "error"
	](messageString);
};
