import React from "react";
import {
	EbayItem,
	isBuyNowAvailableForItem,
	isGermanListing,
	isItemAuction,
	isItemFixedPriceItem,
} from "../../utils/ebay";
import { sanitizeLinebreaks } from "../../utils/misc";
import {
	getEbayBidNowUrlFromItemId,
	getEbayBuyNowUrlFromItemId,
	hasFreeShipping,
	sanitizeCategoryStringForItem,
	sanitizeCurrentPriceForItem,
	sanitizeShippingCostForItem,
} from "../utils/templateUtils";

const TemplateMetaInfo = ({ item }: { item: EbayItem }) => {
	const showBuyNow =
		isItemFixedPriceItem(item) || isBuyNowAvailableForItem(item);

	const showBidNow = isItemAuction(item);

	return (
		<>
			<h6 className="text-secondary">
				{sanitizeCategoryStringForItem(item?.PrimaryCategoryName)}
			</h6>
			<h3>{item?.Title}</h3>
			<h6 className="text-secondary">{item?.ConditionDisplayName}</h6>
			<hr />
			<div className="row">
				{showBuyNow && (
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
						{showBuyNow && showBidNow && (
							<p className="m-3 text-secondary">
								{isGermanListing(item) ? "oder" : "or"}
							</p>
						)}
					</div>
				)}
				{showBidNow && (
					<div className="col-12 text-center">
						<a href={getEbayBidNowUrlFromItemId(item?.ItemID, item?.Country)}>
							<button
								type="button"
								className="btn btn-primary text-center"
								style={{ width: "100%" }}
							>
								{isGermanListing(item) ? "Jetzt bieten" : "Bid now"}
							</button>
						</a>
					</div>
				)}
				<div className="col text-center">
					<hr />
					<span className="text-secondary">
						{isGermanListing(item)
							? hasFreeShipping(item)
								? "Kostenloser Versand"
								: ` + ${sanitizeShippingCostForItem(item)} Versandkosten`
							: hasFreeShipping(item)
							? "Free shipping"
							: ` + ${sanitizeShippingCostForItem(item)} shipping`}
					</span>
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
