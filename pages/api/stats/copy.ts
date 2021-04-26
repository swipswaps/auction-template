import { NextApiRequest, NextApiResponse } from "next";
import { isAllowedDomain } from "../../../utils/applicationConstants";
import { connect } from "../../../db/connectionHandler";
import copyDescModel, { ICopyDesc } from "../../../db/models/copyDescModel";
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
						body: { copy },
					}: {
						body: {
							copy: ICopyDesc;
						};
					} = req;
					await copyDescModel.create({ ...copy });
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
