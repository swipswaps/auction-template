import { Typography } from "antd";
import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import ExternalLink from "../components/misc/ExternalLink";

const imprint = () => {
	return (
		<>
			<TitleAndDesc title="Imprint" desc="Imprint" />
			<Container spacing>
				<Typography.Title>Impressum</Typography.Title>
				<Typography.Title level={2}>
					Angaben gem&auml;&szlig; &sect; 5 TMG
				</Typography.Title>
				<Typography.Paragraph>
					QUIKK Software &amp; Webdesign UG (haftungsbeschr&auml;nkt)
					<br />
					Hahler Stra&szlig;e 285
					<br />
					32427 Minden
				</Typography.Paragraph>
				<Typography.Paragraph>
					Handelsregister: HRB 17559
					<br />
					Registergericht: Amtsgericht Bad Oeynhausen
				</Typography.Paragraph>
				<Typography.Paragraph>
					<strong>Vertreten durch:</strong>
					<br />
					Joyce Marvin Rafflenbeul
				</Typography.Paragraph>
				<Typography.Title level={2}>Kontakt</Typography.Title>
				<Typography.Paragraph>
					Telefon: +49 (0) 1523 390 2667
					<br />
					E-Mail: info@quikk.de
				</Typography.Paragraph>
				<Typography.Title level={2}>Umsatzsteuer-ID</Typography.Title>
				<Typography.Paragraph>
					Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
					Umsatzsteuergesetz:
					<br />
					DE 126024163
				</Typography.Paragraph>
				<Typography.Title level={2}>EU-Streitschlichtung</Typography.Title>
				<Typography.Paragraph>
					Die Europ&auml;ische Kommission stellt eine Plattform zur
					Online-Streitbeilegung (OS) bereit:{" "}
					<ExternalLink href="https://ec.europa.eu/consumers/odr">
						https://ec.europa.eu/consumers/odr
					</ExternalLink>
					.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
				</Typography.Paragraph>
				<Typography.Title level={2}>
					Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
				</Typography.Title>
				<Typography.Paragraph>
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
					vor einer Verbraucherschlichtungsstelle teilzunehmen.
				</Typography.Paragraph>
				<Typography.Title level={3}>Haftung f&uuml;r Inhalte</Typography.Title>
				<Typography.Paragraph>
					Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
					f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
					Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
					Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
					gespeicherte fremde Informationen zu &uuml;berwachen oder nach
					Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
					hinweisen.
				</Typography.Paragraph>
				<Typography.Paragraph>
					Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
					Informationen nach den allgemeinen Gesetzen bleiben hiervon
					unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
					dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
					m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
					werden wir diese Inhalte umgehend entfernen.
				</Typography.Paragraph>
				<Typography.Title level={3}>Haftung f&uuml;r Links</Typography.Title>
				<Typography.Paragraph>
					Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
					deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
					f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
					F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
					Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
					Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
					Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
					waren zum Zeitpunkt der Verlinkung nicht erkennbar.
				</Typography.Paragraph>
				<Typography.Paragraph>
					Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
					ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
					Bekanntwerden von Rechtsverletzungen werden wir derartige Links
					umgehend entfernen.
				</Typography.Paragraph>
				<Typography.Title level={3}>Urheberrecht</Typography.Title>
				<Typography.Paragraph>
					Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
					Seiten unterliegen dem deutschen Urheberrecht. Die
					Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
					Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
					bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
					Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
					privaten, nicht kommerziellen Gebrauch gestattet.
				</Typography.Paragraph>
				<Typography.Paragraph>
					Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
					wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
					Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
					eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
					entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
					werden wir derartige Inhalte umgehend entfernen.
				</Typography.Paragraph>
				<Typography.Paragraph>
					Quelle:{" "}
					<ExternalLink href="https://www.e-recht24.de">
						https://www.e-recht24.de
					</ExternalLink>
				</Typography.Paragraph>
				<Typography.Title level={3}>Nachweis externer Quellen</Typography.Title>
				<Typography.Paragraph>
					Wir verwenden Illustrationen von{" "}
					<ExternalLink href="https://undraw.co">undraw.co</ExternalLink>. Die
					.css Dateien und Vorschaubilder der Themes stammen von{" "}
					<ExternalLink href="https://bootswatch.com">
						bootswatch.com
					</ExternalLink>
					.
				</Typography.Paragraph>
			</Container>
		</>
	);
};

export default imprint;
