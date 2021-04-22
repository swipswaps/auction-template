import React from "react";
import { EbayItem } from "../../utils/ebay";
import { sanitizeSpecificValue } from "../../utils/misc";

const TemplateTabs = ({ item }: { item: EbayItem }) => {
	return (
		<>
			<div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
				<ul className="pure-menu-list">
					<li className="pure-menu-item">
						<label htmlFor="input-item-one" className="input-label">
							<h4 className="m-0 p-0">
								<a className="pure-menu-link">Highlights</a>
							</h4>
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
				<ul className="list-group list-group-flush">
					{item?.ItemSpecifics.NameValueList.map((specific, i) => (
						<li className="list-group-item" key={i}>
							{specific.Name}: {sanitizeSpecificValue(specific.Value)}
						</li>
					))}
				</ul>
			</div>
			<style jsx>{`
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
			`}</style>
		</>
	);
};

export default TemplateTabs;
