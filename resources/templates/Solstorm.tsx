import React from "react";
import { Col, Row } from "react-bootstrap";
import TemplateImageGallery from "../components/TemplateImageGallery";
import TemplateHeader from "../components/TemplateHeader";
import TemplateFooter from "../components/TemplateFooter";
import { EbayItem } from "../../utils/ebay";
import TemplateImport from "../components/TemplateImport";
import TemplateWrapper from "../components/TemplateWrapper";
import TemplateMetaInfo from "../components/TemplateMetaInfo";
import TemplateTabs from "../components/TemplateTabs";

// TODO: add tabs again

const Solstorm = ({ item }: { item: EbayItem }) => {
	return (
		<TemplateWrapper>
			<TemplateImport />
			<TemplateHeader item={item} />
			<Row>
				<Col md={6} className="p-4">
					<TemplateImageGallery item={item} />
				</Col>
				<Col md={6} className="p-4">
					<TemplateMetaInfo item={item} />
				</Col>
			</Row>
			{/* <Row>
					<Col xs={12}>
						<TemplateTabs item={item} />
					</Col>
				</Row> */}
			<TemplateFooter />
		</TemplateWrapper>
	);
};

export default Solstorm;
