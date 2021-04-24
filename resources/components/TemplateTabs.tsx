import React from "react";
import { EbayItem } from "../../utils/ebay";
import { sanitizeSpecificValue } from "../../utils/misc";

const TemplateTabs = ({ item }: { item: EbayItem }) => {
	return (
		<>
			<h3>Highlights</h3>
			<ul>
				{item?.ItemSpecifics.NameValueList.map((specific, i) => (
					<li key={i}>
						{specific.Name}: {sanitizeSpecificValue(specific.Value)}
					</li>
				))}
			</ul>
		</>
	);
};

export default TemplateTabs;
