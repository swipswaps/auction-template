import React, { ReactNode } from "react";
import TemplateFooter from "../components/TemplateFooter";
import TemplateImport from "../components/TemplateImport";

const TemplateWrapper = ({ children = <></> }: { children: ReactNode }) => {
	return (
		<div
			className="auction-template-wrapper"
			style={{ fontFamily: "var(--font-family-sans-serif)" }}
		>
			<div className="container">
				{children}
				<TemplateFooter />
				<TemplateImport />
			</div>
		</div>
	);
};

export default TemplateWrapper;
