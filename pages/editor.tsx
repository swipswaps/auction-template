import { Typography, Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import EditorSettings from "../components/editor/EditorSettings";
import ItemContent from "../components/editor/ItemContent";
import ItemSelector from "../components/editor/ItemSelector";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import Solstorm from "../resources/templates/Solstorm";
import componentToHtml from "../resources/utils/TemplateToHtml";
import { IStore } from "../store";
//TODO: also add form values for title, desc, price, seller etc, as it does not refresh

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
			content: (
				<>
					<ItemContent />
				</>
			),
		},
		{
			title: "Customize auction template",
			content: item && <Solstorm item={item} />,
		},
		{
			title: "Copy product description",
			content: (
				<Button
					onClick={() => console.log(componentToHtml(<Solstorm item={item} />))}
				>
					Copy product description
				</Button>
			),
		},
		{
			title: "Relax!",
			content: <Typography.Paragraph>You are all done!</Typography.Paragraph>,
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
