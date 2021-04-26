import { Typography, Card, Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CopyTemplateToClipboardButton from "../components/editor/CopyTemplateToClipboardButton";
import EditorSettings from "../components/editor/EditorSettings";
import ItemContent from "../components/editor/ItemContent";
import ItemSelector from "../components/editor/ItemSelector";
import ThemeSelector from "../components/editor/ThemeSelector";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import InternalLink from "../components/misc/InternalLink";
import Solstorm from "../resources/templates/Solstorm";
import { IStore } from "../store";

const editor = () => {
	const { item } = useSelector((state: IStore) => state.ebayItem);
	const { theme } = useSelector((state: IStore) => state.editor);

	const editorContent = [
		{
			title: "Load eBay item",
			content: (
				<>
					<EditorSettings />
					<ItemSelector />
				</>
			),
			showWithItem: false,
		},
		{
			title: "Edit content",
			content: <ItemContent />,
			showWithItem: true,
		},
		{
			title: "Select theme",
			content: <ThemeSelector />,
			showWithItem: true,
		},
		{
			title: "Preview auction template",
			content: (
				<Card>
					<Solstorm item={item} theme={theme} footer={false} />
				</Card>
			),
			showWithItem: true,
		},
		{
			title: "Copy product description",
			content: <CopyTemplateToClipboardButton item={item} theme={theme} />,
			showWithItem: true,
		},
		{
			title: "Relax",
			content: (
				<Typography.Paragraph>
					You are all done! Now all you need to do is add the auction template
					to the description of your existing eBay listing. Visit our{" "}
					<InternalLink href="/faq">FAQ</InternalLink> if anything is unclear.
				</Typography.Paragraph>
			),
			showWithItem: true,
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
			{editorContent.map(
				(section, i) =>
					(section.showWithItem ? item : true) && (
						<Container spacing bg={i % 2 === 0} key={i}>
							<Typography.Title level={2}>{`${i + 1}. ${
								section.title
							}`}</Typography.Title>
							{section.content}
						</Container>
					),
			)}
			{!item && (
				<Container spacing>
					<Empty description="No item loaded, please load an item first." />
				</Container>
			)}
		</>
	);
};

export default editor;
