import React from "react";

export const sanitizeUriComponent = (uriComponent: any) =>
	encodeURIComponent(uriComponent);

export const sanitizeSpecificValue = (value: string | Array<string>) =>
	Array.isArray(value) ? value.join(", ") : value;

export const copyToClipboard = (value: string) => {
	const textArea: HTMLTextAreaElement = document.createElement("textarea");
	textArea.value = value;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
};

export const capitalizeString = (s: string) => {
	if (!s) return s;
	return s[0].toUpperCase() + s.substr(1).toLowerCase();
};

export const sanitizeLinebreaks = (s: string) =>
	s.split("\n").map((item) => (
		<span>
			{item}
			<br />
		</span>
	));
