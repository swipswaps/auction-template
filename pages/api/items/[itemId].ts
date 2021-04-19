import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { EbayErrors, EbayItem } from "../../../utils/ebay";
import {
	buildEndpointForItem,
	EbayStatusCodes,
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
					data: { Item: EbayItem; Ack: EbayStatusCodes; Errors: EbayErrors };
				} = await axios.get(
					buildEndpointForItem(String(itemId), String(siteId)),
				);

				switch (status) {
					case EbayStatusCodes.Success:
						res
							.status(200)
							.json({ item, status, message: getSuccessMessageForItem(item) });
						break;
					case EbayStatusCodes.Warning:
						res.status(200).json({
							item,
							status,
							message: getWarningOrErrorMessageForItem(errors),
						});
						break;
					case EbayStatusCodes.Failure:
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
			status: EbayStatusCodes.Failure,
			message: getServerErrorMessageForItem(),
		});
	}
};
