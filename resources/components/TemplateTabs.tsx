import React from "react";
import { EbayItem } from "../../utils/ebay";
import { sanitizeLinebreaks, sanitizeSpecificValue } from "../../utils/misc";

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
			{item?._additionalSections?.map((section, i) => (
				<>
					<h3>{section.heading}</h3>
					<p>{sanitizeLinebreaks(section.content)}</p>
				</>
			))}
		</>
	);
};

export default TemplateTabs;
