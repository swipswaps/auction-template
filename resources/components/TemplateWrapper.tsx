import React, { ReactNode } from "react";
import { BootswatchTheme } from "../../utils/themes";
import TemplateFooter from "../components/TemplateFooter";
import TemplateImport from "../components/TemplateImport";

const TemplateWrapper = ({
	children,
	theme,
}: {
	children: ReactNode;
	theme: BootswatchTheme;
}) => {
	return (
		<div
			className="auction-template-wrapper"
			style={{ fontFamily: "var(--font-family-sans-serif)" }}
		>
			<div className="container">
				{children}
				<TemplateFooter />
				<TemplateImport theme={theme} />
			</div>
		</div>
	);
};

export default TemplateWrapper;
