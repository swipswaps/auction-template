import React from "react";
import { BootswatchTheme, getThemeCssUrl } from "../../utils/themes";

const TemplateImport = ({ theme }: { theme: BootswatchTheme }) => {
	return (
		<>
			<link rel="stylesheet" href={getThemeCssUrl("bootstrap")} />
			<link rel="stylesheet" href={getThemeCssUrl(theme)} />
		</>
	);
};

export default TemplateImport;
