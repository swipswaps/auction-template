import { Typography } from "antd";
import React from "react";
import EditorSettings from "../components/editor/EditorSettings";
import ItemContent from "../components/editor/ItemContent";
import ItemSelector from "../components/editor/ItemSelector";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const editor = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="Editor" desc="Editor" />
			<Typography.Title>Editor</Typography.Title>
			<Typography.Title level={2}>1. Load item</Typography.Title>
			<EditorSettings />
			<ItemSelector />
			<Typography.Title level={2}>2. Edit content</Typography.Title>
			<ItemContent />
		</Container>
	);
};

export default editor;
