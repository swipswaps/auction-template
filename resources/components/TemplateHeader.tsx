import React from "react";
import { EbayItem, isGermanListing } from "../../utils/ebay";
import {
	getEbayAccountUrlFromSellerName,
	getEbayFeedbackUrlFromSellerName,
	getEbayViewListingsUrlFromSellerName,
} from "../utils/templateUtils";

const TemplateHeader = ({ item }: { item: EbayItem }) => {
	const navLinks = [
		{
			href: getEbayAccountUrlFromSellerName(
				item?.Seller?.UserID,
				item?.Country,
			),
			text: "Account",
		},
		{
			href: getEbayViewListingsUrlFromSellerName(
				item?.Seller?.UserID,
				item?.Country,
			),
			text: "Shop",
		},
		{
			href: getEbayFeedbackUrlFromSellerName(
				item?.Seller?.UserID,
				item?.Country,
			),
			text: isGermanListing(item) ? "Bewertungen" : "Reviews",
		},
	];

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a
				className="navbar-brand"
				href={getEbayAccountUrlFromSellerName(
					item?.Seller?.UserID,
					item?.Country,
				)}
			>
				{item?._displaySellerName}
			</a>
			<ul className="navbar-nav ml-md-auto flex-row">
				{navLinks.map(({ href, text }, i) => (
					<li className="nav-item" key={i}>
						<a className="nav-link" href={href}>
							{text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default TemplateHeader;
