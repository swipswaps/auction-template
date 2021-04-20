import { Typography, Collapse } from "antd";
const { Panel } = Collapse;
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const faq = () => {
	const faqContent = [
		{
			question: "What is Auction Template?",
			answer:
				"Auction Template is a free online tool that allows users to automatically generate attractive product descriptions for eBay listings. It has an automated editor that provides many choices, design- and contentwise. Unlike other solutions on the Internet, our editor is fully automated, completely free to use and requires no registration. We work with official eBay interfaces which make tedious and manual maintenance of product information obsolete and hope to beautify your eBay listings.",
		},
		{
			question: "What makes Auction Template different?",
			answer: "",
		},
		{ question: "How do I use the editor?", answer: "" },
		{
			question: "How can I customize a template?",
			answer: "",
		},
		{
			question: "How do I add a template to my eBay listing?",
			answer: "",
		},
		{
			question: "Are there any advantages/offers for (small) businesses?",
			answer: "",
		},
		{ question: "How can I contact the developers?", answer: "" },
		{ question: "I have more questions", answer: "" },
	];

	return (
		<Container spacing>
			<TitleAndDesc title="FAQ" desc="FAQ" />
			<Typography.Title>FAQ</Typography.Title>
			<Typography.Paragraph>
				Frequently asked questions regarding Auction Template, pricing,
				features, contact and support.
			</Typography.Paragraph>
			<Collapse defaultActiveKey={[0]} accordion>
				{faqContent.map(({ question, answer }, i) => (
					<Panel header={question} key={i}>
						<Typography.Paragraph>
							{!!answer
								? answer
								: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
						</Typography.Paragraph>
					</Panel>
				))}
			</Collapse>
		</Container>
	);
};

export default faq;
