import React from "react";
import { EbayItem, isGermanListing } from "../../utils/ebay";
import {
	getEbayAccountUrlFromSellerName,
	getEbayContactUrlFromSellerName,
	getEbayFeedbackUrlFromSellerName,
	getEbayViewListingsUrlFromSellerName,
} from "../utils/templateUtils";
import isUrl from "is-url";

const TemplateHeader = ({ item }: { item: EbayItem }) => {
	const userId = item?.Seller?.UserID;
	const displaySellerName = item?._displaySellerName;
	const country = item?.Country;
	const navLinks = [
		{
			href: getEbayAccountUrlFromSellerName(userId, country),
			text: "Account",
		},
		{
			href: getEbayViewListingsUrlFromSellerName(userId, country),
			text: "Shop",
		},
		{
			href: getEbayFeedbackUrlFromSellerName(userId, country),
			text: isGermanListing(item) ? "Bewertungen" : "Reviews",
		},
		{
			href: getEbayContactUrlFromSellerName(userId, country),
			text: isGermanListing(item) ? "Kontakt" : "Contact",
		},
	];

	const Brand = () =>
		isUrl(displaySellerName) ? (
			<img src={displaySellerName} alt={userId} title={userId} height="42px" />
		) : (
			<>{displaySellerName}</>
		);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a
				className="navbar-brand"
				href={getEbayAccountUrlFromSellerName(userId, country)}
			>
				<Brand />
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
