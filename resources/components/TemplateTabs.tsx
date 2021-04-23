import React from "react";
import { EbayItem } from "../../utils/ebay";
import { sanitizeSpecificValue } from "../../utils/misc";

const TemplateTabs = ({ item }: { item: EbayItem }) => {
	return (
		<div>
			<h3>Highlights</h3>
			<ul className="list-group list-group-flush">
				{item?.ItemSpecifics.NameValueList.map((specific, i) => (
					<li key={i} className="list-group-item">
						{specific.Name}: {sanitizeSpecificValue(specific.Value)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TemplateTabs;
