import React from "react";
import { EbayItem } from "../../utils/ebay";
import { sanitizeLinebreaks } from "../../utils/misc";
import {
	getEbayBuyNowUrlFromItemId,
	sanitizeCategoryStringForItem,
	sanitizeCurrentPriceForItem,
	sanitizeShippingCostForItem,
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
			<div className="row">
				<div className="col-12 text-center">
					<a href={getEbayBuyNowUrlFromItemId(item?.ItemID, item?.Country)}>
						<button
							type="button"
							className="btn btn-primary text-center"
							style={{ width: "100%" }}
						>
							{sanitizeCurrentPriceForItem(item)}
						</button>
					</a>
					{/* <span className="text-secondary">
						{" "}
						+ {sanitizeShippingCostForItem(item)}
					</span> */}
				</div>
			</div>
			{item?.Description?.length > 0 && (
				<>
					<hr />
					<p className="m-0">{sanitizeLinebreaks(item?.Description)}</p>
				</>
			)}
		</>
	);
};

export default TemplateMetaInfo;
