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
