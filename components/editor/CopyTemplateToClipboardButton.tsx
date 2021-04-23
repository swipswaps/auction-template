import React from "react";
import { Button, message } from "antd";
import { copyToClipboard } from "../../utils/misc";
import { componentToHtml } from "../../resources/utils/templateUtils";
import Solstorm from "../../resources/templates/Solstorm";

const CopyTemplateToClipboardButton = ({ item }) => {
	const handleCopyClick = () => {
		copyToClipboard(componentToHtml(<Solstorm item={item} />));
		message.success("Copied Auction Template.");
	};

	return (
		<Button type="primary" onClick={() => handleCopyClick()}>
			Copy
		</Button>
	);
};

export default CopyTemplateToClipboardButton;
