import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { EbayErrors, EbayItem } from "../../../utils/ebay";
import {
	buildEndpointForItem,
	EbayStatusCode,
	getServerErrorMessageForItem,
	getSuccessMessageForItem,
	getWarningOrErrorMessageForItem,
} from "../../../utils/ebayApi";
require("dotenv").config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	try {
		switch (method) {
			case "GET":
				const {
					query: { itemId, siteId },
				} = req;
				const {
					data: { Item: item, Ack: status, Errors: errors },
				}: {
					data: { Item: EbayItem; Ack: EbayStatusCode; Errors: EbayErrors };
				} = await axios.get(
					buildEndpointForItem(String(itemId), String(siteId)),
				);

				switch (status) {
					case EbayStatusCode.Success:
						res
							.status(200)
							.json({ item, status, message: getSuccessMessageForItem(item) });
						break;
					case EbayStatusCode.Warning:
						res.status(200).json({
							item,
							status,
							message: getWarningOrErrorMessageForItem(errors),
						});
						break;
					case EbayStatusCode.Failure:
						res.status(404).json({
							status,
							message: getWarningOrErrorMessageForItem(errors),
						});
						break;
					default:
						res.status(204).end();
						break;
				}
				break;
			default:
				res.setHeader("Allow", ["GET"]);
				res.status(405).send(`Method ${method} not allowed`);
				break;
		}
	} catch (err) {
		res.status(500).json({
			status: EbayStatusCode.Failure,
			message: getServerErrorMessageForItem(),
		});
	}
};
