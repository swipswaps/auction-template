import React from "react";
import TemplateImage from "../components/TemplateImage";
import TemplateHeader from "../components/TemplateHeader";
import { EbayItem } from "../../utils/ebay";
import TemplateWrapper from "../components/TemplateWrapper";
import TemplateMetaInfo from "../components/TemplateMetaInfo";
import TemplateTabs from "../components/TemplateTabs";
import { BootswatchTheme } from "../../utils/themes";

const Solstorm = ({
	item,
	theme = "cerulean",
}: {
	item: EbayItem;
	theme?: BootswatchTheme;
}) => {
	return (
		<TemplateWrapper theme={theme}>
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
