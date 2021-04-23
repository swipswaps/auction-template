import React from "react";
import { EbayItem } from "../../utils/ebay";

const TemplateImage = ({ item }: { item: EbayItem }) => {
	const descriptive = item?.Title;
	return (
		<img
			src={item?.PictureURL[0]}
			style={{ width: "100%" }}
			alt={descriptive}
			title={descriptive}
		/>
	);
};

export default TemplateImage;
