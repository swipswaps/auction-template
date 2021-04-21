import { NextApiRequest, NextApiResponse } from "next";
import {
	EbayStatusCode,
	getAllSellerItemsRecursively,
	getServerErrorMessage,
	getSuccessMessageForSellerItems,
	getWarningOrErrorMessageForSellerItem,
} from "../../../utils/ebayApi";
require("dotenv").config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	try {
		switch (method) {
			case "GET":
				const {
					query: { sellerName, siteId },
				} = req;

				const {
					items = [],
					errorObject,
					status,
				} = await getAllSellerItemsRecursively(
					(sellerName),
					(siteId),
				);

				switch (status) {
					case EbayStatusCode.Success:
						res.status(200).json({
							items,
							status,
							message: getSuccessMessageForSellerItems(items, (sellerName)),
						});
						break;
					case EbayStatusCode.Warning:
						res.status(200).json({
							items,
							status,
							message: getWarningOrErrorMessageForSellerItem(errorObject),
						});
						break;
					case EbayStatusCode.Failure:
						res.status(404).json({
							status,
							message: getWarningOrErrorMessageForSellerItem(errorObject),
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
			message: getServerErrorMessage(),
		});
	}
};
