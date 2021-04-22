import React, { ReactNode } from "react";

const TemplateWrapper = ({ children = <></> }: { children: ReactNode }) => {
	return <div className="auction-template-wrapper container">{children}</div>;
};

export default TemplateWrapper;
