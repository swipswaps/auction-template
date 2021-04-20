import { Typography, Collapse } from "antd";
const { Panel } = Collapse;
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const faq = () => {
	const faqContent = [
		{ question: "What is Auction Template?", answer: "" },
		{
			question: "Was unterscheidet Auction Template von der Konkurrenz?",
			answer: "",
		},
		{
			question: "Welche Richtlinien muss ein eBay Template erfüllen?",
			answer: "",
		},
		{ question: "Ist Auction Template eBay Richtlinien konform?", answer: "" },
		{ question: "Ist Auction Template sicher?", answer: "" },
		{ question: "Ist Auction Template wirklich kostenlos?", answer: "" },
		{ question: "Wie kann ich ein eBay Produkt einladen?", answer: "" },
		{
			question:
				"Wie viele Auktionsvorlagen kann ich mit Auction Template erstellen?",
			answer: "",
		},
		{
			question: "Kann ich Auktionsvorlagen für mehrere eBay Konten erstellen?",
			answer: "",
		},
		{
			question: "Lassen sich die generierten Auktionsvorlagen anpassen?",
			answer: "",
		},
		{
			question: "Wie füge ich die Auktionsvorlage meinem eBay Inserat hinzu?",
			answer: "",
		},
		{ question: "Gibt es Vorteile für Gewerbetreibende?", answer: "" },
		{ question: "Wie kann ich die Entwickler kontaktieren?", answer: "" },
		{ question: "Ich habe weitere Fragen", answer: "" },
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
						<Typography.Paragraph>{answer}</Typography.Paragraph>
					</Panel>
				))}
			</Collapse>
		</Container>
	);
};

export default faq;
