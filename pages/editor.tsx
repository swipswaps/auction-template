import { Typography } from "antd";
import React from "react";
import EditorSettings from "../components/editor/EditorSettings";
import ItemContent from "../components/editor/ItemContent";
import ItemSelector from "../components/editor/ItemSelector";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const editor = () => {
	return (
		<>
			<Container spacing style={{ paddingBottom: 0 }}>
				<TitleAndDesc
					title="Auction Template Editor"
					desc="Auction Template Editor"
				/>
				<Typography.Title>Auction Template Editor</Typography.Title>
			</Container>
			<Container spacing bg>
				<Typography.Title level={2}>1. Load eBay item</Typography.Title>
				<EditorSettings />
				<ItemSelector />
			</Container>
			<Container spacing>
				<Typography.Title level={2}>2. Edit content</Typography.Title>
				<ItemContent />
			</Container>
		</>
	);
};

export default editor;
