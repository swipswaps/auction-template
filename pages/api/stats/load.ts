import loadItemModel from "./../../../db/models/loadItemModel";
import { NextApiRequest, NextApiResponse } from "next";
import { ILoadItem } from "../../../db/models/loadItemModel";
import { isAllowedDomain } from "../../../utils/applicationConstants";
import { connect } from "../../../db/connectionHandler";
connect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		headers: { host },
		method,
	} = req;

	try {
		if (isAllowedDomain(host)) {
			switch (method) {
				case "POST":
					const {
						body: { load },
					}: {
						body: {
							load: ILoadItem;
						};
					} = req;
					await loadItemModel.create({ ...load });
					res.status(204).end();
					break;
				default:
					res.setHeader("Allow", ["POST"]);
					res.status(405).send(`Method ${method} not allowed`);
					break;
			}
		} else {
			res.status(401).send(`${host} is not allowed to ${method}.`);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};
