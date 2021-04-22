import { Typography, Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CopyTemplateToClipboardButton from "../components/editor/CopyTemplateToClipboardButton";
import EditorSettings from "../components/editor/EditorSettings";
import ItemContent from "../components/editor/ItemContent";
import ItemSelector from "../components/editor/ItemSelector";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import Solstorm from "../resources/templates/Solstorm";
import { IStore } from "../store";

const editor = () => {
	const { item } = useSelector((state: IStore) => state.ebayItem);
	const editorContent = [
		{
			title: "Load eBay item",
			content: (
				<>
					<EditorSettings />
					<ItemSelector />
				</>
			),
		},
		{
			title: "Edit content",
			content: <ItemContent />,
		},
		{
			title: "Preview auction template",
			content: item && (
				<Card>
					<Solstorm item={item} />
				</Card>
			),
		},
		{
			title: "Copy product description",
			content: item && <CopyTemplateToClipboardButton item={item} />,
		},
	];
	return (
		<>
			<Container spacing style={{ paddingBottom: 0 }}>
				<TitleAndDesc
					title="Auction Template Editor"
					desc="Auction Template Editor"
				/>
				<Typography.Title>Auction Template Editor</Typography.Title>
			</Container>
			{editorContent.map((section, i) => (
				<Container spacing bg={i % 2 === 0} key={i}>
					<Typography.Title level={2}>{`${i + 1}. ${
						section.title
					}`}</Typography.Title>
					{section.content}
				</Container>
			))}
		</>
	);
};

export default editor;
