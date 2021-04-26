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

export const getUniqueAmountOfArray = (
	array: Array<any>,
	mapFn: (elementOfArray: any) => any,
) => Array.from(new Set(array.map(mapFn))).length;

export const findModeOfArray = (array: Array<any>) => {
	if (array.length == 0) return null;
	var modeMap = {};
	var maxEl = array[0],
		maxCount = 1;
	for (var i = 0; i < array.length; i++) {
		var el = array[i];
		if (modeMap[el] == null) modeMap[el] = 1;
		else modeMap[el]++;
		if (modeMap[el] > maxCount) {
			maxEl = el;
			maxCount = modeMap[el];
		}
	}
	return maxEl;
};

export const isDev = () => process.env.NODE_ENV === "development";

export const getApplicationBaseUrl = () =>
	"https://auction-template.vercel.app";
