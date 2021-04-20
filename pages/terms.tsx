import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";

export const UseOfEbayData = () => (
	<>
		<Typography.Title level={3}>Nutzung des Editors</Typography.Title>
		<Typography.Paragraph>
			Wenn Sie unseren Auction Template Editor zum Einladen eines Produkts
			benutzen, stimmen Sie zu, dass ein Teil der von Ihnen bei eBay angefragten
			und von Ihnen im weiteren Verlauf verwendeten Daten bei uns gespeichert
			und verarbeitet wird. Folgende Inhalte speichern wir bei jedem Einladen
			eines Artikels über unseren Editor:
		</Typography.Paragraph>
		<ul>
			<li>Die über unseren Editor angefragte eBay Artikelnummer</li>
			<li>Nutzername des eBay Accounts, der diesen Artikel anbietet</li>
			<li>Datum und Uhrzeit der Anfrage</li>
		</ul>
		<Typography.Paragraph>
			Diese Daten behandeln wir streng vertraulich und geben sie nicht weiter.
			Wir nutzen sie für die stetige Verbesserung unserer Dienstleistung.
		</Typography.Paragraph>
	</>
);

const terms = () => {
	return (
		<Container spacing>
			<TitleAndDesc title="Terms" desc="Terms" />
			<Typography.Title>Nutzungsbedingungen</Typography.Title>
			<Typography.Title level={2}>
				Nutzung von Auction Template
			</Typography.Title>
			<Typography.Paragraph>
				Mit der Nutzung von Auction Template erklären Sie sich einverstanden
				damit, dass die unten genannten Inhalte in unserem Editor bei jedem
				Einladen eines Artikels erfasst werden.
			</Typography.Paragraph>
			<UseOfEbayData />
		</Container>
	);
};

export default terms;
