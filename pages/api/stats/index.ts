import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../db/connectionHandler";
import copyDescModel, { ICopyDesc } from "../../../db/models/copyDescModel";
import loadItemModel, { ILoadItem } from "../../../db/models/loadItemModel";
import { findModeOfArray, getUniqueAmountOfArray } from "../../../utils/misc";
import { BootswatchTheme } from "../../../utils/themes";
connect();

export type StatsResponse = {
	load: {
		uniqueItems: number;
		uniqueSiteIds: number;
		uniqueUsers: number;
	};
	copy: {
		uniqueDescriptionsCopied: number;
		uniqueCountries: number;
		uniqueUsers: number;
		mostUsedTheme: BootswatchTheme;
	};
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	try {
		switch (method) {
			case "GET":
				const loads: Array<ILoadItem> = await loadItemModel.find({});
				const copies: Array<ICopyDesc> = await copyDescModel.find({});

				const uniqueItemsLoaded = getUniqueAmountOfArray(
					loads,
					(load: ILoadItem) => load.itemId,
				);

				const uniqueSiteIdsLoaded = getUniqueAmountOfArray(
					loads,
					(load: ILoadItem) => load.siteId,
				);

				const uniqueUsersLoaded = getUniqueAmountOfArray(
					loads,
					(load: ILoadItem) => load.sellerName,
				);

				const uniqueDescriptionsCopied = getUniqueAmountOfArray(
					copies,
					(copy: ICopyDesc) => copy.itemId,
				);

				const uniqueCountries = getUniqueAmountOfArray(
					copies,
					(copy: ICopyDesc) => copy.item.Country,
				);

				const uniqueUsersCopied = getUniqueAmountOfArray(
					copies,
					(copy: ICopyDesc) => copy.sellerName,
				);

				const mostUsedTheme: BootswatchTheme = findModeOfArray(
					copies.map((copy: ICopyDesc) => copy.theme),
				);

				const statsResponse: StatsResponse = {
					load: {
						uniqueItems: uniqueItemsLoaded,
						uniqueSiteIds: uniqueSiteIdsLoaded,
						uniqueUsers: uniqueUsersLoaded,
					},
					copy: {
						uniqueDescriptionsCopied,
						uniqueCountries,
						uniqueUsers: uniqueUsersCopied,
						mostUsedTheme,
					},
				};

				res.status(200).json(statsResponse);
				break;
			default:
				res.setHeader("Allow", ["GET"]);
				res.status(405).send(`Method ${method} not allowed`);
				break;
		}
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
};
