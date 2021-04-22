import React from "react";
import { EbayItem } from "../../utils/ebay";
import {
	sanitizeCategoryStringForItem,
	sanitizeCurrentPriceForItem,
} from "../utils/templateUtils";

const TemplateMetaInfo = ({ item }: { item: EbayItem }) => {
	return (
		<>
			<h6 className="text-secondary">
				{sanitizeCategoryStringForItem(item?.PrimaryCategoryName)}
			</h6>
			<h3>{item?.Title}</h3>
			<h6 className="text-secondary">{item?.ConditionDisplayName}</h6>
			<hr />
			<h2 className="text-center">{sanitizeCurrentPriceForItem(item)}</h2>
			{item?.Description?.length > 0 && (
				<>
					<hr />
					<p className="text-secondary m-0">{item?.Description}</p>
				</>
			)}
		</>
	);
};

export default TemplateMetaInfo;
