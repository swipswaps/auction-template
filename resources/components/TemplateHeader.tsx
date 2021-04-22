import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { EbayItem } from "../../utils/ebay";
import {
	getEbayAccountUrlFromSellerName,
	getEbayFeedbackUrlFromSellerName,
	getEbayViewListingsUrlFromSellerName,
} from "../utils/templateUtils";

const TemplateHeader = ({ item }: { item: EbayItem }) => {
	const navLinks = [
		{
			href: getEbayAccountUrlFromSellerName(item?.Seller.UserID, item?.Country),
			text: "Account",
		},
		{
			href: getEbayViewListingsUrlFromSellerName(
				item?.Seller.UserID,
				item?.Country,
			),
			text: "Shop",
		},
		{
			href: getEbayFeedbackUrlFromSellerName(
				item?.Seller.UserID,
				item?.Country,
			),
			text: "Reviews",
		},
	];

	return (
		<Navbar expand="lg" bg="primary" variant="dark" collapseOnSelect>
			<Navbar.Brand>{item?._displaySellerName}</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav className="justify-content-end">
					{navLinks.map(({ href, text }, i) => {
						return (
							<Nav.Link href={href} active key={i}>
								{text}
							</Nav.Link>
						);
					})}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default TemplateHeader;
