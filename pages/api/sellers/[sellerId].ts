import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
		case "GET":
			const {
				query: { sellerId, siteId },
			} = req;
			res.status(200).json({ name: "John Doe" });
			break;
		default:
			res.setHeader("Allow", ["GET"]);
			res.status(405).send(`Method ${method} not allowed`);
			break;
	}
};
