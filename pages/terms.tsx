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
			<li>
				Ob der Artikel anhand der Artikelnummer oder mithilfe der Suche über den
				Nutzernamen eingeladen wurde
			</li>
			<li>Die in unserem Editor ausgewählte eBay Länderkennung</li>
			<li>Datum und Uhrzeit der Anfrage</li>
		</ul>
		<Typography.Paragraph>
			Wenn Sie unseren Auction Template Editor zum Kopieren einer
			Produktbeschreibung benutzen, stimmen Sie zu, dass ein Teil der von eBay
			bereitgestellten und von Ihnen hinzugefügten Daten bei uns gespeichert und
			verarbeitet wird. Folgende Inhalte speichern wir bei jedem Kopieren einer
			Produktbeschreibung über unseren Editor:
		</Typography.Paragraph>
		<ul>
			<li>Die über unseren Editor angefragte eBay Artikelnummer</li>
			<li>Nutzername des eBay Accounts, der diesen Artikel anbietet</li>
			<li>Die in unserem Editor ausgewählte eBay Länderkennung</li>
			<li>Die über unseren Editor hinzugefügten Artikelinformationen</li>
			<li>Die von eBay bereitgestellten Artikelinformationen</li>
			<li>Das ausgewählte Design des Auction Templates</li>
			<li>Datum und Uhrzeit der Anfrage</li>
		</ul>
		<Typography.Paragraph>
			Die oben genannten Daten werden auf einem deutschen Server gespeichert und
			streng vertraulich behandelt. Sie werden nicht an Dritte weitergegeben.
			Wir nutzen die gesammelten Daten ausschließlich für die interne Analyse
			und stetige Verbesserung unserer Dienstleistung.
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
				Einladen eines Artikels und jedem Kopieren einer Produktbeschreibung
				erfasst werden.
			</Typography.Paragraph>
			<UseOfEbayData />
		</Container>
	);
};

export default terms;
