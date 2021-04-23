import React from "react";
import TemplateImage from "../components/TemplateImage";
import TemplateHeader from "../components/TemplateHeader";
import { EbayItem } from "../../utils/ebay";
import TemplateWrapper from "../components/TemplateWrapper";
import TemplateMetaInfo from "../components/TemplateMetaInfo";
import TemplateTabs from "../components/TemplateTabs";

const Solstorm = ({ item }: { item: EbayItem }) => {
	return (
		<TemplateWrapper>
			<TemplateHeader item={item} />
			<div className="row">
				<div className="py-4 col-12 col-md-6">
					<TemplateImage item={item} />
				</div>
				<div className="py-4 col-12 col-md-6">
					<TemplateMetaInfo item={item} />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<TemplateTabs item={item} />
				</div>
			</div>
		</TemplateWrapper>
	);
};

export default Solstorm;
