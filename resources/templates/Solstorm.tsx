import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Container from "../../components/layout/Container";
import TemplateImageGallery from "../components/TemplateImageGallery";
import TemplateHeader from "../components/TemplateHeader";
import TemplateFooter from "../components/TemplateFooter";
import { EbayItem } from "../../utils/ebay";

const Solstorm = ({ item }: { item: EbayItem }) => {
	return (
		<Container>
			<div className="auction-template-wrapper">
				<link
					rel="stylesheet"
					href="https://auction-template.vercel.app/at/assets/at-bootstrap.css"
				/>
				<link
					rel="stylesheet"
					href="https://auction-template.vercel.app/at/assets/at-lux.css"
				/>
				<TemplateHeader />
				<Row>
					<Col md={6} style={{ padding: "1em" }}>
						<TemplateImageGallery images={item?.PictureURL} />
					</Col>
					<Col md={6}>
						<Card style={{ padding: "1em" }}>
							<h3>{item?.Title}</h3>
							<hr className="at-divider" />
							<div className="d-flex justify-content-around">
								<span>{item?.Seller?.PositiveFeedbackPercent}%</span>
								<span>
									{item?.HandlingTime} Tag{item?.HandlingTime > 1 && <>e</>}{" "}
									Lieferzeit
								</span>
							</div>
							<hr className="at-divider" />
							<div className="price-wrapper">
								<h2>
									{item?.ConvertedCurrentPrice?.Value}{" "}
									{item?.ConvertedCurrentPrice?.CurrencyID}
								</h2>
							</div>
							<p>{item?.Description}</p>
							<Button variant="primary">
								{item?.ListingType === "FixedPriceItem"
									? "Sofort Kaufen"
									: "Bieten"}{" "}
							</Button>
						</Card>
					</Col>
				</Row>
				<hr className="at-divider" />
				<div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
					<ul className="pure-menu-list">
						<li className="pure-menu-item">
							<label htmlFor="input-item-one" className="input-label">
								<a className="pure-menu-link">Product specifics</a>
							</label>
						</li>
						<li className="pure-menu-item">
							<label htmlFor="input-item-two" className="input-label">
								<a className="pure-menu-link">Payment and shipping</a>
							</label>
						</li>
						<li className="pure-menu-item">
							<label htmlFor="input-item-three" className="input-label">
								<a className="pure-menu-link">More information</a>
							</label>
						</li>
					</ul>
				</div>
				<input
					id="input-item-one"
					type="radio"
					name="input-item"
					className="input-item"
					defaultChecked
				/>
				<div id="menu-item-one">
					<ul className="list-group">
						{item.ItemSpecifics.NameValueList.map(
							(specific, i) =>
								String(specific.Value).length < 200 && (
									<li className="list-group-item">
										{specific.Name}: {specific.Value}
									</li>
								),
						)}
					</ul>
				</div>
				<input
					id="input-item-two"
					type="radio"
					name="input-item"
					className="input-item"
				/>
				<hr className="at-divider" />
				<div id="menu-item-two">
					{item.PaymentMethods.map((paymentMethod) => (
						<p>TEST</p>
					))}
				</div>
				<input
					id="input-item-three"
					type="radio"
					name="input-item"
					className="input-item"
				/>
				<div id="menu-item-three">
					{String(item.ConditionDescription).length > 0 && (
						<>
							<h3>Condition description</h3>
							<p>{item.ConditionDescription}</p>
						</>
					)}
					{/* {String(item.BusinessSellerDetails.TermsAndConditions).length > 0 && (
						<>
							<h3>Terms and Conditions</h3>
							<p>{item.BusinessSellerDetails.TermsAndConditions}</p>
						</>
					)}
					{Object.keys(item.BusinessSellerDetails.Address).length > 0 && (
						<>
							<h3>Contact Information</h3>
							<ul className="list-group">
								{Object.keys(item.BusinessSellerDetails.Address).map((key) => {
									return (
										<li className="list-group-item">
											{item.BusinessSellerDetails.Address[key]}
										</li>
									);
								})}
							</ul>
						</>
					)} */}
				</div>
			</div>
			<TemplateFooter />
			<style jsx>{`
				.at-divider {
					width: 100%;
					margin: 1em 0 1em 0;
				}
				#input-item-one:checked + #menu-item-one,
				#input-item-two:checked + #menu-item-two,
				#input-item-three:checked + #menu-item-three {
					display: block;
				}
				#menu-item-one,
				#menu-item-two,
				#menu-item-three {
					display: none;
					margin-top: 1em;
				}
				.input-item {
					display: none;
				}
				.input-label {
					margin: 0;
					padding: 0;
				}
				.pure-menu-list {
					margin: 0;
					padding: 0;
				}
				.price-wrapper {
					text-align: center;
				}
			`}</style>
		</Container>
	);
};

export default Solstorm;
