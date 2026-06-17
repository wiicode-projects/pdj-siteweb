import type { LegalDocument } from '../types';

const VERSION = '1.0 — Mai 2026';
const EFFECTIVE = '4. Mai 2026';
const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const SITE = '[link:https://www.leplatdujour.ch|https://www.leplatdujour.ch]';
const PRIVACY = '[route:/politique-de-confidentialite|Datenschutzerklärung]';
const PRICING = '[route:/#tarifs|Tarifseite]';
const ODR = '[link:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr]';

export const cguDoc: LegalDocument = {
  meta: {
    eyebrow: 'D.G.E. Concept SàRL · www.leplatdujour.ch',
    title: 'Allgemeine Nutzungsbedingungen',
    subtitle: 'Plattform Le Plat du Jour',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · ANB Version ${VERSION}`,
  },
  toc: {
    label: 'Inhaltsverzeichnis — ANB',
    items: [
      'Präambel',
      'Definitionen',
      'Gegenstand und Umfang',
      'Zugang und Kontoerstellung',
      'Pflichten der Restaurants',
      'Pflichten der Kunden',
      'Haftungsbeschränkung',
      'Personenbezogene Daten',
      'Geistiges Eigentum',
      'Verfügbarkeit und Wartung',
      'Anwendbares Recht',
      'Änderungen der ANB',
      'Sonstige Bestimmungen',
    ],
  },
  sections: [
    {
      title: 'Präambel',
      blocks: [
        {
          kind: 'p',
          text: `Diese Allgemeinen Nutzungsbedingungen (nachfolgend "ANB") regeln den Zugang zur und die Nutzung der Online-Plattform Le Plat du Jour, erreichbar unter ${SITE} (nachfolgend "die Plattform"), herausgegeben von D.G.E. Concept SàRL mit Sitz in Arzier-Le Muids, Kanton Waadt, Schweiz, eingetragen im Handelsregister unter der UID CHE-456.471.738 (nachfolgend "die Herausgeberin").`,
        },
        {
          kind: 'p',
          text: 'Mit der Erstellung eines Kontos auf der Plattform, sei es als Restaurantkonto oder als Kundenkonto, bestätigt der Nutzer, dass er diese ANB gelesen, verstanden und vollständig akzeptiert hat. Diese Zustimmung wird elektronisch mit Zeitstempel erfasst und stellt einen beweiskräftigen Nachweis dar.',
        },
        {
          kind: 'p',
          text: 'Die Plattform ist ein Marktplatz zur Vernetzung von Gastronomiebetrieben (nachfolgend "Restaurants"), die ihr Tagesgericht anbieten, und privaten Endkunden (nachfolgend "Kunden"), die online bestellen möchten. Die Herausgeberin handelt als technische Vermittlerin und greift nicht in das Vertragsverhältnis zwischen Restaurant und Kunde hinsichtlich der Leistungserbringung ein.',
        },
      ],
    },
    {
      title: 'Art. 1 — Definitionen',
      blocks: [
        { kind: 'p', text: 'Im Sinne dieser ANB bedeuten die folgenden Begriffe:' },
        {
          kind: 'ul',
          items: [
            '[strong:Plattform:] der Dienst Le Plat du Jour, online zugänglich unter https://www.leplatdujour.ch, betrieben von D.G.E. Concept SàRL.',
            '[strong:Herausgeberin:] D.G.E. Concept SàRL, eine Schweizer Gesellschaft mit beschränkter Haftung, Arzier-Le Muids, Kanton Waadt, Schweiz, UID CHE-456.471.738, Betreiberin der Plattform.',
            '[strong:Nutzer:] jede natürliche oder juristische Person, die ein Konto auf der Plattform erstellt hat, ob als Restaurant oder als Kunde.',
            '[strong:Restaurant:] jeder professionelle Gastronomiebetrieb mit aktivem Abonnement auf der Plattform, der berechtigt ist, seine Angebote für Tagesgerichte zu veröffentlichen.',
            '[strong:Kunde:] jede natürliche Person ab 18 Jahren, die ein Konto auf der Plattform erstellt und dort Bestellungen tätigt.',
            '[strong:Angebot:] die Veröffentlichung durch ein Restaurant von einem oder mehreren über die Plattform bestellbaren Tagesgerichten.',
            '[strong:Bestellung:] der Vorgang, durch den ein Kunde ein Angebot auswählt und über die Plattform bestätigt.',
            '[strong:Restaurant-Abonnement:] der kostenpflichtige Zugangsvertrag, der einem Restaurant die Veröffentlichung seiner Angebote auf der Plattform ermöglicht, gemäß den verfügbaren Tarifen.',
            '[strong:Konto:] der sichere persönliche Bereich, den der Nutzer bei der Registrierung erstellt und der Zugang zu den Funktionen der Plattform bietet.',
          ],
        },
      ],
    },
    {
      title: 'Art. 2 — Gegenstand und Umfang der Plattform',
      blocks: [
        { kind: 'h3', text: '2.1 — Was Le Plat du Jour ist' },
        {
          kind: 'p',
          text: 'Le Plat du Jour ist eine Online-Vermittlungsplattform, die Restaurants die Veröffentlichung ihrer Tagesgerichte und Kunden deren Einsicht und Bestellung ermöglicht. Die Herausgeberin stellt die technische Infrastruktur für diese Vermittlung bereit.',
        },
        { kind: 'h3', text: '2.2 — Was Le Plat du Jour nicht ist' },
        { kind: 'p', text: 'Die Plattform ist nicht:' },
        {
          kind: 'ul',
          items: [
            'ein Restaurant, ein Cateringbetrieb oder ein Lebensmittelanbieter;',
            'ein Heimlieferdienst — die Herausgeberin erbringt keine logistischen Leistungen;',
            'ein Garant für Qualität, Zusammensetzung, Allergene oder gesundheitliche Konformität der von Restaurants angebotenen Speisen;',
            'eine Vertragspartei des Kaufvertrags zwischen Restaurant und Kunde.',
          ],
        },
        { kind: 'h3', text: '2.3 — Rolle als technische Vermittlerin' },
        {
          kind: 'p',
          text: 'Die Herausgeberin handelt ausschließlich als technische Vermittlerin. Der Kaufvertrag über jede Bestellung wird direkt zwischen Restaurant und Kunde geschlossen. Die Herausgeberin haftet nicht für die Erfüllung oder Nichterfüllung dieses Vertrags.',
        },
        { kind: 'h3', text: '2.4 — Geografischer Bereich' },
        {
          kind: 'p',
          text: 'Die Plattform ist in der gesamten Schweiz verfügbar. Die Herausgeberin behält sich das Recht vor, die geografische Abdeckung jederzeit zu erweitern oder einzuschränken.',
        },
      ],
    },
    {
      title: 'Art. 3 — Zugang zur Plattform und Kontoerstellung',
      blocks: [
        { kind: 'h3', text: '3.1 — Zugangsvoraussetzungen' },
        {
          kind: 'p',
          text: 'Der Zugang zur Plattform als Kunde ist natürlichen Personen ab 18 Jahren vorbehalten. Der Zugang als Restaurant ist juristischen oder natürlichen Personen vorbehalten, die im Rahmen einer ordnungsgemäß zugelassenen professionellen Gastronomietätigkeit handeln.',
        },
        {
          kind: 'p',
          text: 'Mit der Erstellung eines Kontos gewährleistet der Nutzer, dass die angegebenen Informationen richtig, vollständig und aktuell sind. Falsche Angaben liegen ausschließlich in der Verantwortung des Nutzers.',
        },
        { kind: 'h3', text: '3.2 — Ablauf der Kontoerstellung' },
        { kind: 'p', text: 'Die Kontoerstellung erfolgt ausschließlich online in den folgenden Schritten:' },
        {
          kind: 'ol',
          items: [
            'Eingabe der Identifikationsdaten (E-Mail-Adresse, Passwort, Profilinformationen).',
            'Akzeptanz dieser ANB (Pflicht-Checkbox — Zustimmung mit Zeitstempel erfasst).',
            'Bestätigung der E-Mail-Adresse über den automatisch versendeten Bestätigungslink.',
          ],
        },
        { kind: 'p', text: 'Das Konto wird mit Bestätigung der E-Mail-Adresse aktiv.' },
        { kind: 'h3', text: '3.3 — Kontoverwaltung und Sicherheit' },
        {
          kind: 'p',
          text: `Der Nutzer ist allein verantwortlich für die Vertraulichkeit seiner Zugangsdaten sowie für alle Aktivitäten über sein Konto. Bei Kompromittierung oder unbefugter Nutzung verpflichtet sich der Nutzer, die Herausgeberin unverzüglich unter ${ADMIN} zu informieren.`,
        },
        { kind: 'h3', text: '3.4 — Sperrung und Schließung des Kontos' },
        {
          kind: 'p',
          text: 'Die Herausgeberin behält sich das Recht vor, jedes Konto bei Verstoß gegen diese ANB, bei betrügerischer oder missbräuchlicher Nutzung oder bei Verstoß gegen die öffentliche Ordnung ohne Vorankündigung und ohne Entschädigung zu sperren oder zu schließen.',
        },
        {
          kind: 'p',
          text: `Der Nutzer kann sein Konto jederzeit durch eine Anfrage an ${ADMIN} schließen. Die Schließung eines Restaurantkontos begründet keinen Anspruch auf Rückerstattung des laufenden Abonnementzeitraums.`,
        },
      ],
    },
    {
      title: 'Art. 4 — Pflichten der Restaurants',
      blocks: [
        { kind: 'h3', text: '4.1 — Regulatorische Konformität' },
        { kind: 'p', text: 'Das Restaurant ist allein und vollständig verantwortlich für:' },
        {
          kind: 'ul',
          items: [
            'den Besitz aller für die Ausübung der Gastronomietätigkeit erforderlichen Bewilligungen, Lizenzen und Patente (kantonale/kommunale Bewilligung, Wirtepatent usw.);',
            'die Konformität seiner kulinarischen Zubereitungen mit den in der Schweiz geltenden Hygiene- und Lebensmittelsicherheitsnormen (LGV, HACCP usw.);',
            'die Richtigkeit der auf der Plattform veröffentlichten Informationen, insbesondere Speisebeschreibungen, Preise, Allergene und Verfügbarkeiten;',
            'die Einhaltung der gesetzlichen Pflichten zur Lebensmittelkennzeichnung und Allergenkennzeichnung.',
          ],
        },
        { kind: 'h3', text: '4.2 — Ausschließliche Verantwortung des Restaurants' },
        {
          kind: 'callout',
          variant: 'warning',
          text: '[strong:Kritischer Punkt —] Das Restaurant trägt die alleinige Verantwortung für Qualität, Zusammensetzung, Allergene und gesundheitliche Konformität der angebotenen Speisen. Im Falle eines Streits im Zusammenhang mit einer Bestellung (Nichtkonformität, Lebensmittelvergiftung, Allergenfehler usw.) liegt die Haftung ausschließlich beim Restaurant. Die Herausgeberin kann unter keinen Umständen haftbar gemacht werden.',
        },
        { kind: 'h3', text: '4.3 — Veröffentlichungspflichten' },
        { kind: 'p', text: 'Das Restaurant verpflichtet sich:' },
        {
          kind: 'ul',
          items: [
            'genaue, aktuelle und nicht irreführende Informationen zu seinen Angeboten zu veröffentlichen;',
            'seine Verfügbarkeiten in Echtzeit zu aktualisieren und jedes Angebot, das nicht mehr erfüllbar ist, unverzüglich zu entfernen;',
            'die in seinen Zubereitungen enthaltenen Allergene klar und vollständig anzugeben;',
            'die auf der Plattform veröffentlichten Preise zum Zeitpunkt der Bestellung durch den Kunden einzuhalten.',
          ],
        },
        { kind: 'h3', text: '4.4 — Untersagte Nutzungen' },
        { kind: 'p', text: 'Insbesondere untersagt sind:' },
        {
          kind: 'ul',
          items: [
            'die Veröffentlichung falscher, irreführender oder den Kunden täuschender Informationen;',
            'jede Nutzung der Plattform zu Zwecken, die nicht mit der Gastronomietätigkeit zusammenhängen;',
            'jeder Versuch, die Mechanismen der Plattform zu umgehen oder unbefugt auf andere Konten zuzugreifen.',
          ],
        },
      ],
    },
    {
      title: 'Art. 5 — Pflichten der Kunden',
      blocks: [
        { kind: 'h3', text: '5.1 — Bestellbedingungen' },
        { kind: 'p', text: 'Der Kunde verpflichtet sich:' },
        {
          kind: 'ul',
          items: [
            'bei Erstellung seines Kontos genaue und aktuelle Identifikationsdaten anzugeben;',
            'nur ernsthafte Bestellungen aufzugeben und jede bestätigte Bestellung einzuhalten;',
            'die vom Restaurant festgelegten spezifischen Bedingungen (Zeiten, Abholmodalitäten usw.) einzuhalten;',
            'jedes Problem im Zusammenhang mit einer Bestellung unverzüglich direkt dem betreffenden Restaurant zu melden.',
          ],
        },
        { kind: 'h3', text: '5.2 — Verantwortung des Kunden' },
        {
          kind: 'p',
          text: 'Der Kunde ist allein dafür verantwortlich, die Informationen zu den Angeboten vor der Bestellung zu überprüfen, insbesondere Allergene, Zusammensetzung und Abholbedingungen. Im Zweifelsfall wird der Kunde aufgefordert, das Restaurant direkt zu kontaktieren.',
        },
      ],
    },
    {
      title: 'Art. 6 — Haftungsbeschränkung der Herausgeberin',
      blocks: [
        { kind: 'h3', text: '6.1 — Haftungsausschlüsse' },
        {
          kind: 'p',
          text: 'Soweit nach anwendbarem Schweizer Recht zulässig, schließt die Herausgeberin jede Haftung aus für:',
        },
        {
          kind: 'ul',
          items: [
            'direkte oder indirekte Schäden aus der Nutzung oder Unmöglichkeit der Nutzung der Plattform;',
            'jeden Streit im Zusammenhang mit der Ausführung einer Bestellung zwischen Restaurant und Kunde (Qualität, Fristen, Allergene, Nichtlieferung usw.);',
            'die Richtigkeit, Vollständigkeit oder Aktualität der von Restaurants veröffentlichten Informationen;',
            'jede Dienstunterbrechung infolge höherer Gewalt, Wartung oder technischer Störung;',
            'jeden Schaden infolge betrügerischer oder missbräuchlicher Nutzung der Zugangsdaten eines Nutzers.',
          ],
        },
        { kind: 'h3', text: '6.2 — Haftungshöchstbetrag' },
        {
          kind: 'p',
          text: 'In Fällen, in denen die Haftung der Herausgeberin nicht vollständig ausgeschlossen werden kann, ist sie für Restaurants ausdrücklich auf den tatsächlich bezahlten Abonnementbetrag der laufenden Periode zum Zeitpunkt des schadensbegründenden Ereignisses beschränkt.',
        },
      ],
    },
    {
      title: 'Art. 7 — Personenbezogene Daten und Vertraulichkeit',
      blocks: [
        { kind: 'h3', text: '7.1 — Erhobene Daten' },
        {
          kind: 'p',
          text: 'Im Rahmen der Nutzung der Plattform erhebt und verarbeitet die Herausgeberin folgende Daten:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:Identifikationsdaten:] E-Mail-Adresse, Vorname, Nachname (für Kunden); Firmenname, Adresse, geschäftliche E-Mail (für Restaurants).',
            '[strong:Nutzungsdaten:] Bestellhistorie, veröffentlichte Angebote, Interaktionen mit der Plattform.',
            '[strong:Technische Daten:] IP-Adresse, Browser, Anmeldeprotokolle.',
            '[strong:Zahlungsdaten (nur Restaurants):] ausschließlich durch Zahlungsdienstleister verarbeitet — nicht von der Herausgeberin gespeichert.',
          ],
        },
        { kind: 'h3', text: '7.2 — Verarbeitungszwecke' },
        {
          kind: 'p',
          text: 'Die erhobenen Daten werden zu folgenden Zwecken verarbeitet: Verwaltung der Konten und Zugänge, Vermittlung zwischen Restaurants und Kunden, Abwicklung von Bestellungen, Verbesserung der Plattform, Versand dienstbezogener Mitteilungen.',
        },
        { kind: 'h3', text: '7.3 — Rechte der Nutzer' },
        {
          kind: 'p',
          text: `Gemäß dem revidierten Schweizer Datenschutzgesetz (revDSG) und der DSGVO für in der EU ansässige Nutzer hat jeder Nutzer das Recht auf Auskunft, Berichtigung, Löschung, Datenübertragbarkeit und Widerspruch hinsichtlich seiner personenbezogenen Daten; ausübbar unter ${ADMIN}. Weitere Informationen finden Sie in unserer ${PRIVACY}.`,
        },
        { kind: 'h3', text: '7.4 — Aufbewahrung und Hosting' },
        {
          kind: 'p',
          text: 'Die Daten werden in der Schweiz und/oder in der Europäischen Union gehostet. Personenbezogene Daten werden für die Dauer des aktiven Kontos sowie zwölf (12) Monate nach Kontoschließung aufbewahrt, sofern keine entgegenstehenden gesetzlichen Pflichten bestehen.',
        },
        { kind: 'h3', text: '7.5 — Vertraulichkeit' },
        {
          kind: 'p',
          text: 'Nutzerdaten werden weder verkauft noch vermietet noch zu kommerziellen Zwecken an Dritte weitergegeben. Sie können an technische Dienstleister übermittelt werden, die zur Vertraulichkeit verpflichtet sind und ausschließlich im Auftrag der Herausgeberin handeln.',
        },
      ],
    },
    {
      title: 'Art. 8 — Geistiges Eigentum',
      blocks: [
        {
          kind: 'p',
          text: 'Die Plattform Le Plat du Jour, ihre Benutzeroberfläche, Algorithmen, Datenbanken und sämtliche eigenen Inhalte sind ausschließliches Eigentum von D.G.E. Concept SàRL und durch schweizerisches und internationales Immaterialgüterrecht geschützt.',
        },
        {
          kind: 'p',
          text: 'Von Restaurants veröffentlichte Inhalte (Beschreibungen, Fotos) bleiben Eigentum ihrer Urheber. Mit der Veröffentlichung auf der Plattform räumt das Restaurant der Herausgeberin ein nicht ausschließliches, unentgeltliches Nutzungsrecht für den Betrieb des Dienstes ein (Anzeige, Indexierung, Bewerbung der Plattform).',
        },
        {
          kind: 'p',
          text: 'Der Nutzer erhält ein persönliches, nicht ausschließliches und nicht übertragbares Zugangs- und Nutzungsrecht an den Funktionen der Plattform.',
        },
      ],
    },
    {
      title: 'Art. 9 — Verfügbarkeit und Wartung',
      blocks: [
        {
          kind: 'p',
          text: 'Die Herausgeberin bemüht sich um eine Verfügbarkeit der Plattform rund um die Uhr (24/7), ohne einen unterbrechungsfreien Zugang garantieren zu können. Unterbrechungen können aufgrund von Wartung, Updates oder höherer Gewalt auftreten. Die Herausgeberin informiert die Nutzer, soweit möglich, über geplante Wartungsarbeiten. Es wird vertraglich kein garantierter Service-Level (SLA) zugesichert.',
        },
      ],
    },
    {
      title: 'Art. 10 — Anwendbares Recht und zuständige Gerichtsbarkeit',
      blocks: [
        {
          kind: 'p',
          text: 'Diese ANB unterliegen schweizerischem Recht, insbesondere dem Obligationenrecht (OR) und dem Datenschutzgesetz (revDSG). Streitigkeiten zwischen Unternehmern unterliegen ausschließlich dem Bezirksgericht La Côte (Nyon, Kanton Waadt, Schweiz).',
        },
        {
          kind: 'p',
          text: `Für in der Europäischen Union ansässige Nutzer, die als Verbraucher handeln, gelten die zwingenden Zuständigkeitsregeln des EU-Rechts. Die Plattform der Europäischen Kommission zur Online-Streitbeilegung ist erreichbar unter: ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Änderungen der ANB',
      blocks: [
        {
          kind: 'p',
          text: 'Die Herausgeberin behält sich das Recht vor, diese ANB jederzeit zu ändern. Bei wesentlichen Änderungen wird der Nutzer per E-Mail mit einer Frist von dreißig (30) Tagen informiert. Die weitere Nutzung der Plattform nach Ablauf dieser Frist gilt als Zustimmung zu den neuen ANB. Im Falle einer Ablehnung kann der Nutzer sein Konto vor Inkrafttreten kostenfrei schließen.',
        },
      ],
    },
    {
      title: 'Art. 12 — Sonstige Bestimmungen',
      blocks: [
        { kind: 'h3', text: '12.1 — Teilnichtigkeit' },
        {
          kind: 'p',
          text: 'Sollte eine Bestimmung ganz oder teilweise unwirksam oder unanwendbar sein, bleiben die übrigen Bestimmungen vollständig in Kraft.',
        },
        { kind: 'h3', text: '12.2 — Kein Verzicht' },
        {
          kind: 'p',
          text: 'Dass die Herausgeberin sich nicht auf eine Bestimmung beruft, ist nicht als Verzicht auf deren spätere Geltendmachung auszulegen.',
        },
        { kind: 'h3', text: '12.3 — Kontakt' },
        {
          kind: 'p',
          text: `Für alle Fragen zu diesen ANB: ${ADMIN} — D.G.E. Concept SàRL, Arzier-Le Muids, Kanton Waadt, Schweiz — [link:https://www.leplatdujour.ch|www.leplatdujour.ch].`,
        },
      ],
    },
  ],
};

export const cgvDoc: LegalDocument = {
  meta: {
    title: 'Allgemeine Verkaufsbedingungen',
    subtitle: 'Plattform Le Plat du Jour — Restaurant-Abonnements',
    version: VERSION,
    effectiveDate: EFFECTIVE,
    footerLine: `Le Plat du Jour · D.G.E. Concept SàRL · AVB Version ${VERSION}`,
  },
  toc: {
    label: 'Inhaltsverzeichnis — AVB',
    items: [
      'Präambel',
      'Gegenstand',
      'Angebote, Tarife und Währungen',
      'Bestellung und Abschluss',
      'Zahlung',
      'Laufzeit, Verlängerung und Kündigung',
      'Nicht-Rückerstattungsrichtlinie',
      'Widerrufsrecht',
      'Service und Support',
      'Übertragung des Abonnements',
      'Anwendbares Recht',
      'Schlussbestimmungen',
    ],
  },
  sections: [
    {
      title: 'Präambel',
      blocks: [
        {
          kind: 'p',
          text: 'Diese Allgemeinen Verkaufsbedingungen (nachfolgend "AVB") regeln sämtliche geschäftlichen Transaktionen zwischen D.G.E. Concept SàRL, Arzier-Le Muids, Kanton Waadt, Schweiz, UID CHE-456.471.738, Herausgeberin der Plattform Le Plat du Jour (nachfolgend "Verkäuferin"), und jedem Gastronomiebetrieb, der ein kostenpflichtiges Abonnement abschließt (nachfolgend "Käufer").',
        },
        {
          kind: 'p',
          text: 'Jeder Abschluss eines kostenpflichtigen Abonnements setzt die vollständige und vorbehaltlose Akzeptanz dieser AVB sowie der Allgemeinen Nutzungsbedingungen voraus. Diese Zustimmung wird elektronisch mit Zeitstempel erfasst und stellt einen beweiskräftigen Nachweis dar.',
        },
        {
          kind: 'p',
          text: 'Diese AVB regeln ausschließlich die geschäftliche Beziehung zwischen der Verkäuferin und den abonnierten Restaurants. Sie gelten nicht für Endkunden, deren Verhältnis zur Plattform durch die ANB geregelt wird.',
        },
      ],
    },
    {
      title: 'Art. 1 — Gegenstand',
      blocks: [
        {
          kind: 'p',
          text: 'Diese AVB haben zum Ziel, die Bedingungen für den Verkauf von Abonnements festzulegen, die Zugang zu Veröffentlichungs- und Sichtbarkeitsfunktionen auf der Plattform Le Plat du Jour gewähren. Die verkaufte Leistung ist der Zugang zu einer digitalen Vermittlungsinfrastruktur, die es Restaurants ermöglicht, ihre Tagesgerichte zu veröffentlichen und Kunden zugänglich zu machen.',
        },
      ],
    },
    {
      title: 'Art. 2 — Angebote, Tarife und Währungen',
      blocks: [
        { kind: 'h3', text: '2.1 — Verfügbare Modelle' },
        {
          kind: 'p',
          text: `Le Plat du Jour bietet mehrere monatliche Abonnementmodelle an, die auf die Bedürfnisse von Restaurants abgestimmt sind. Die vollständigen Details der Modelle und der in jedem Plan enthaltenen Funktionen sind auf der ${PRICING} der Plattform verfügbar, die maßgeblich ist.`,
        },
        { kind: 'p', text: 'Die verfügbaren Modelle und ihre Tarife sind wie folgt:' },
        {
          kind: 'table',
          headers: ['Modell', 'Tarif', 'Hauptfunktionen'],
          rows: [
            ['Classique (Standard)', '0 CHF/Monat', '3 Menüs/Tag, 1 Bild/Gericht, 10 Profilfotos'],
            ['Premium / Itinerant', '29 CHF/Monat', '5 Menüs/Tag, 3 Bilder/Gericht, hervorgehobenes Profil, Verwaltung mobiler Standorte, Werbegeschenke'],
            ['Platinum / Itinerant Multi', '59 CHF/Monat', 'Alle Premium-Funktionen, bis zu 5 Betriebe (+5 CHF/zusätzliche Einheit)'],
          ],
        },
        { kind: 'h3', text: '2.2 — Währung' },
        {
          kind: 'p',
          text: 'Abonnements werden in Schweizer Franken (CHF) fakturiert. Es gilt der zum Zeitpunkt des Abschlusses angezeigte Preis.',
        },
        { kind: 'h3', text: '2.3 — Preise und MwSt.' },
        {
          kind: 'p',
          text: 'D.G.E. Concept SàRL ist zum Inkrafttreten dieser AVB ein Schweizer Unternehmen ohne Mehrwertsteuerpflicht. Die angegebenen Preise verstehen sich daher als Endpreise zum anwendbaren Satz. Bei späterer Mehrwertsteuerpflicht werden die Tarife gemäß Artikel 2.4 angepasst.',
        },
        { kind: 'h3', text: '2.4 — Tarifänderungen' },
        {
          kind: 'p',
          text: 'Die Verkäuferin behält sich das Recht vor, ihre Tarife mit einer Mindestfrist von dreißig (30) Tagen zu ändern; die Mitteilung erfolgt per E-Mail an die bei Abschluss hinterlegte Adresse. Der Käufer kann das Abonnement vor Inkrafttreten kostenfrei kündigen, falls er die neuen Tarife ablehnt.',
        },
      ],
    },
    {
      title: 'Art. 3 — Bestellung und Abschluss',
      blocks: [
        { kind: 'h3', text: '3.1 — Abschlussprozess' },
        {
          kind: 'p',
          text: 'Der Abschluss eines Abonnements erfolgt ausschließlich online auf www.leplatdujour.ch in den folgenden Schritten:',
        },
        {
          kind: 'ol',
          items: [
            'Erstellung eines Restaurantkontos oder Anmeldung in ein bestehendes Konto.',
            'Auswahl des gewünschten Abonnementmodells.',
            'Akzeptanz dieser AVB und der ANB (Pflicht-Checkbox — Zustimmung mit Zeitstempel erfasst).',
            'Eingabe und Bestätigung der Zahlungsinformationen.',
            'Bestätigung des Abschlusses per E-Mail an die hinterlegte Adresse.',
          ],
        },
        { kind: 'h3', text: '3.2 — Vertragsschluss' },
        {
          kind: 'p',
          text: 'Der Kaufvertrag gilt mit Eingang der E-Mail-Bestätigung beim Käufer als geschlossen. Diese E-Mail enthält eine Zusammenfassung des gewählten Modells, des berechneten Betrags und der Abonnementperiode.',
        },
        { kind: 'h3', text: '3.3 — Professioneller Rahmen' },
        {
          kind: 'p',
          text: 'Le Plat du Jour ist ein Dienst ausschließlich für Gastronomie-Fachleute. Mit dem Abschluss erklärt der Käufer, im Rahmen seiner beruflichen Tätigkeit zu handeln und über alle für seine Tätigkeit erforderlichen Bewilligungen zu verfügen.',
        },
      ],
    },
    {
      title: 'Art. 4 — Zahlung',
      blocks: [
        { kind: 'h3', text: '4.1 — Akzeptierte Zahlungsmittel' },
        { kind: 'p', text: 'Zahlungen werden über folgende Mittel akzeptiert:' },
        {
          kind: 'ul',
          items: [
            '[strong:TWINT] — verfügbar für Zahlungen in CHF aus der Schweiz.',
            '[strong:Kreditkarte] (Visa, Mastercard) über MyPos-Terminal — sichere PCI-DSS-Verarbeitung.',
            '[strong:PayPal.]',
            '[strong:Banküberweisung] — Bankdaten werden nach Bestellbestätigung mitgeteilt; der Zugang zur Plattform wird nach Eingang der Überweisung aktiviert.',
          ],
        },
        {
          kind: 'callout',
          variant: 'info',
          text: '[strong:Zahlungssicherheit —] D.G.E. Concept SàRL hat keinen Zugriff auf Bankdaten oder Kartennummern. Kartenzahlungen werden von einem PCI-DSS-zertifizierten Anbieter verarbeitet. Die Herausgeberin speichert keine Bankdaten.',
        },
        { kind: 'h3', text: '4.2 — Rechnungsstellung' },
        {
          kind: 'p',
          text: 'Bei jeder Transaktion wird automatisch eine Quittung oder Rechnung per E-Mail ausgestellt. Der Käufer kann den Zahlungsverlauf in seinem Dashboard einsehen.',
        },
        { kind: 'h3', text: '4.3 — Zahlungsverzug' },
        {
          kind: 'p',
          text: 'Bei fehlgeschlagener oder abgelehnter Zahlung wird der Käufer per E-Mail informiert. Zur Bereinigung der Situation wird eine Frist von zehn (10) Tagen eingeräumt. Nach Ablauf dieser Frist wird der Zugang zu Veröffentlichungsfunktionen bis zur Regulierung ausgesetzt.',
        },
      ],
    },
    {
      title: 'Art. 5 — Laufzeit, Verlängerung und Kündigung',
      blocks: [
        { kind: 'h3', text: '5.1 — Laufzeit des Abonnements' },
        {
          kind: 'p',
          text: 'Abonnements werden monatlich ohne Mindestlaufzeit abgeschlossen. Das Abonnement tritt am Tag der Zahlungsbestätigung in Kraft und läuft bis zum Ende des laufenden Kalendermonats.',
        },
        { kind: 'h3', text: '5.2 — Verlängerung' },
        {
          kind: 'p',
          text: 'Das Abonnement verlängert sich nicht automatisch. Mit Ablauf endet der Zugang zu den Veröffentlichungsfunktionen. Der Käufer erhält vor Periodenende eine Erinnerungs-E-Mail, um auf Wunsch einen neuen Monatszeitraum abzuschließen.',
        },
        { kind: 'h3', text: '5.3 — Kündigung durch den Käufer' },
        {
          kind: 'p',
          text: 'Der Käufer kann sein Abonnement jederzeit beenden. Eine Rückerstattung für den laufenden Monat erfolgt nicht, unabhängig vom Kündigungsdatum oder Nutzungsgrad. Der Zugang zu den Funktionen bleibt bis zum Ende des ursprünglich abgeschlossenen Monatszeitraums aktiv.',
        },
        { kind: 'h3', text: '5.4 — Kündigung durch die Verkäuferin' },
        {
          kind: 'p',
          text: 'Die Verkäuferin kann den Zugang eines Käufers ohne Vorankündigung aussetzen oder kündigen bei schwerem Verstoß gegen die ANB oder diese AVB, bei nachgewiesen betrügerischer/missbräuchlicher Nutzung oder bei Nichtzahlung nach der in Artikel 4.3 festgelegten Nachfrist. Bei einer Kündigung durch die Verkäuferin aus einem nicht vom Käufer zu vertretenden Grund wird der anteilige Betrag nicht genutzter Tage erstattet.',
        },
        { kind: 'h3', text: '5.5 — Einstellung des Dienstes' },
        {
          kind: 'p',
          text: 'Für den Fall, dass die Verkäuferin den Betrieb der Plattform einstellt, werden Käufer mit aktivem Abonnement per E-Mail mit einer Frist von neunzig (90) Tagen informiert. Der anteilige Betrag nicht genutzter Tage wird erstattet.',
        },
      ],
    },
    {
      title: 'Art. 6 — Nicht-Rückerstattungsrichtlinie',
      blocks: [
        {
          kind: 'callout',
          variant: 'warning',
          text: '[strong:Strikte Nicht-Rückerstattungsrichtlinie —] Jede gezahlte Monatsgebühr ist endgültig von der Verkäuferin erworben, außer in den in den Artikeln 5.4 und 5.5 ausdrücklich vorgesehenen Fällen. Der Monat ist in voller Höhe geschuldet, unabhängig vom Kündigungsdatum innerhalb der Periode.',
        },
        { kind: 'p', text: 'Es wird keine Rückerstattung gewährt für:' },
        {
          kind: 'ul',
          items: [
            'einen laufenden Monatszeitraum, unabhängig vom Kündigungsdatum;',
            'die teilweise oder vollständige Nichtnutzung der im Abonnement enthaltenen Funktionen;',
            'eine Änderung der beruflichen Situation oder der Bedürfnisse des Käufers;',
            'eine Unzufriedenheit mit dem Dienst.',
          ],
        },
        {
          kind: 'p',
          text: `Aus Kulanz und in gutem Glauben verpflichtet sich die Verkäuferin, jede Rückerstattungsanfrage zu prüfen, die innerhalb von achtundvierzig (48) Stunden nach dem ersten Abschluss eingereicht wird, wenn eine nachgewiesene und dokumentierte technische Unmöglichkeit des Zugangs zum Dienst vorliegt. Diese Anfragen sind an ${ADMIN} zu richten.`,
        },
      ],
    },
    {
      title: 'Art. 7 — Widerrufsrecht',
      blocks: [
        {
          kind: 'p',
          text: 'Gemäß Artikel 16 der europäischen Richtlinie 2011/83/EU gilt das 14-tägige Widerrufsrecht nicht für digitale Inhalte, deren Ausführung mit ausdrücklicher vorheriger Zustimmung des Käufers vor Ablauf der Widerrufsfrist begonnen hat.',
        },
        {
          kind: 'p',
          text: 'Mit dem Abschluss und dem sofortigen Zugriff auf die Funktionen der Plattform erkennt der Käufer an, dass die digitale Dienstleistung ab Zahlungsbestätigung erbracht wird, was zum Verzicht auf das Widerrufsrecht führt. Für Käufer, die im beruflichen Rahmen handeln, ist das Verbraucherwiderrufsrecht nicht anwendbar.',
        },
      ],
    },
    {
      title: 'Art. 8 — Service und Support',
      blocks: [
        { kind: 'h3', text: '8.1 — Verfügbarkeit' },
        {
          kind: 'p',
          text: 'Die Verkäuferin bemüht sich um eine Verfügbarkeit der Plattform rund um die Uhr (24/7). Es wird vertraglich kein garantierter Service-Level (SLA) zugesichert. Unterbrechungen wegen Wartung, Updates oder höherer Gewalt können auftreten und begründen keinen Entschädigungsanspruch.',
        },
        { kind: 'h3', text: '8.2 — Support' },
        {
          kind: 'p',
          text: `Der Support ist per E-Mail unter ${ADMIN} erreichbar. Die Verkäuferin verpflichtet sich zu einer Antwort innerhalb von zwei (2) Werktagen.`,
        },
      ],
    },
    {
      title: 'Art. 9 — Übertragung des Abonnements',
      blocks: [
        {
          kind: 'p',
          text: `Das Abonnement ist persönlich und namentlich. Es darf ohne vorherige schriftliche Zustimmung der Verkäuferin nicht übertragen oder geteilt werden. Im Falle einer Betriebsübertragung kann auf Antrag an ${ADMIN} eine Übertragung geprüft werden.`,
        },
      ],
    },
    {
      title: 'Art. 10 — Anwendbares Recht und Gerichtsbarkeit',
      blocks: [
        {
          kind: 'p',
          text: 'Diese AVB unterliegen schweizerischem Recht (Obligationenrecht). Streitigkeiten zwischen Unternehmern unterliegen ausschließlich dem Bezirksgericht La Côte (Nyon, Kanton Waadt, Schweiz).',
        },
        {
          kind: 'p',
          text: `Für in der Europäischen Union ansässige Käufer, die als Verbraucher handeln, gelten die zwingenden Zuständigkeitsregeln des EU-Rechts. Die Plattform der Europäischen Kommission zur Online-Streitbeilegung ist erreichbar unter: ${ODR}.`,
        },
      ],
    },
    {
      title: 'Art. 11 — Schlussbestimmungen',
      blocks: [
        { kind: 'h3', text: '11.1 — Vorrang der AVB' },
        {
          kind: 'p',
          text: 'Bei Widerspruch zwischen diesen AVB und jedem anderen Geschäftsdokument haben diese AVB Vorrang, sofern keine ausdrückliche schriftliche Vereinbarung der Verkäuferin vorliegt.',
        },
        { kind: 'h3', text: '11.2 — Teilnichtigkeit' },
        {
          kind: 'p',
          text: 'Wird eine Klausel für nichtig oder unanwendbar erklärt, bleiben die übrigen Klauseln vollständig in Kraft.',
        },
        { kind: 'h3', text: '11.3 — Archivierung und Kontakt' },
        {
          kind: 'p',
          text: `Diese AVB werden versionsweise archiviert und sind auf Anfrage unter ${ADMIN} verfügbar — D.G.E. Concept SàRL, Arzier-Le Muids, Kanton Waadt, Schweiz.`,
        },
      ],
    },
  ],
};
