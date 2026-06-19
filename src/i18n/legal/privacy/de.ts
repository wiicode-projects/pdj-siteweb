import type { LegalDocument } from '../types';

const ADMIN = '[mailto:admin@dgeconcept.ch|admin@dgeconcept.ch]';
const LEGAL_NOTICE = '[route:/mentions-legales|Impressum]';

export const privacyDoc: LegalDocument = {
  meta: {
    title: 'Datenschutzerklärung',
    version: '',
    effectiveDate: 'Juni 2026',
    intro:
      'Der Schutz Ihrer personenbezogenen Daten hat fuer [strong:Le Plat du Jour] hoechste Prioritaet. Diese Datenschutzerklaerung erlaeutert, welche Daten wir erfassen, warum wir sie erfassen, wie wir sie nutzen, wie lange wir sie speichern und welche Rechte Sie haben. Sie entspricht der Datenschutz-Grundverordnung (DSGVO - EU 2016/679) sowie dem Schweizer Bundesgesetz ueber den Datenschutz (nDSG).',
  },
  toc: {
    label: 'Inhaltsverzeichnis',
    items: [
      'Verantwortliche Stelle',
      'Erhobene Daten',
      'Zwecke und Rechtsgrundlagen der Verarbeitung',
      'Speicherdauer',
      'Weitergabe von Daten',
      'Uebermittlungen ausserhalb des EWR',
      'Ihre Rechte',
      'Cookies und aehnliche Technologien',
      'Geolokalisierung',
      'Profiling und automatisierte Entscheidungen',
      'Sicherheit',
      'Daten von Minderjaehrigen',
      'Benachrichtigung bei Datenschutzverletzungen',
      'Aenderungen der Richtlinie',
    ],
  },
  sections: [
    {
      title: '1. Verantwortliche Stelle',
      blocks: [
        {
          kind: 'p',
          text: 'Verantwortliche Stelle fuer die ueber die [strong:Le Plat du Jour]-App und Website erhobenen Daten ist die herausgebende Gesellschaft, deren vollstaendige Kontaktdaten im ' + LEGAL_NOTICE + ' angegeben sind.',
        },
        {
          kind: 'p',
          text: 'Bei Fragen zu Ihren personenbezogenen Daten oder zur Ausuebung Ihrer Rechte kontaktieren Sie uns unter: ' + ADMIN + ' und geben Sie im Betreff "Datenschutz" an.',
        },
      ],
    },
    {
      title: '2. Erhobene Daten',
      blocks: [
        {
          kind: 'p',
          text: 'Je nach Nutzung des Dienstes verarbeiten wir folgende Datenkategorien:',
        },
        {
          kind: 'cards',
          items: [
            {
              title: 'Identitaets- und Kontodaten',
              text: 'Name, Vorname, E-Mail-Adresse, Passwort (gehasht, niemals im Klartext gespeichert), Profilbild (optional), Ernaehrungspraeferenzen (falls freiwillig angegeben).',
            },
            {
              title: 'Geolokalisierungsdaten',
              text: 'Ungefaehre geografische Position (Radius von einigen hundert Metern), um Restaurants in Ihrer Naehe anzuzeigen. Wird nur erhoben, wenn Sie die Berechtigung auf Ihrem Geraet erteilen, und niemals dauerhaft auf unseren Servern gespeichert.',
            },
            {
              title: 'Nutzungsdaten',
              text: 'Aufgerufene Restaurants, gesuchte Gerichte, favorisierte Restaurants, veroefentlichte Bewertungen und Noten, Nutzungsfrequenz und Nutzungszeiten, verwendete Funktionen.',
            },
            {
              title: 'Transaktions- und Abrechnungsdaten',
              text: 'Abgeschlossenes Abonnement, Abrechnungshistorie, bezahlte Betraege. Bankdaten (Kartennummer, IBAN) laufen nicht ueber unsere Systeme und werden direkt von unserem PCI-DSS-zertifizierten Zahlungsdienstleister verarbeitet.',
            },
            {
              title: 'Technische Daten',
              text: 'IP-Adresse (teilweise anonymisiert), Geraetetyp und Modell, Betriebssystem und Version, App-Version, Sitzungskennungen, Fehler- und Leistungsprotokolle.',
            },
            {
              title: 'Daten von Partnerrestaurants',
              text: 'Firmenname, Name der verantwortlichen Person, berufliche E-Mail-Adresse, Telefonnummer, Restaurantadresse, Fotos und Beschreibungen der veroefentlichten Gerichte, Abrechnungsdaten des Restaurant-Abonnements.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'Wir erheben keine sensiblen Daten im Sinne der DSGVO (ethnische Herkunft, religioese Ueberzeugungen, Gesundheitsdaten, biometrische Daten usw.), ausser bei ausdruecklicher Angabe und Ihrer ausdruecklichen Einwilligung. Von Ihnen freiwillig angegebene Ernaehrungspraeferenzen (vegetarisch, halal, glutenfrei usw.) gelten als potenziell sensible Daten und werden mit verstaerktem Schutz verarbeitet.',
        },
      ],
    },
    {
      title: '3. Zwecke und Rechtsgrundlagen',
      blocks: [
        {
          kind: 'table',
          headers: ['Zweck', 'Rechtsgrundlage (DSGVO)'],
          rows: [
            ['Erstellung und Verwaltung des Nutzerkontos', 'Vertragserfuellung (Art. 6.1.b)'],
            ['Anzeige von Restaurants und Menues in der Naehe', 'Vertragserfuellung (Art. 6.1.b)'],
            ['Geolokalisierung fuer personalisierte Vorschlaege', 'Einwilligung (Art. 6.1.a)'],
            ['Bearbeitung von Reservierungen und Bestellungen', 'Vertragserfuellung (Art. 6.1.b)'],
            ['Abrechnung von Premium-Abonnements', 'Vertragserfuellung (Art. 6.1.b)'],
            ['Versand von Service-Benachrichtigungen (Buchungsbestaetigung usw.)', 'Vertragserfuellung (Art. 6.1.b)'],
            ['Versand von Marketing-Mitteilungen und personalisierten Angeboten', 'Einwilligung (Art. 6.1.a)'],
            ['Verbesserung des Dienstes und statistische Nutzungsanalysen', 'Berechtigtes Interesse (Art. 6.1.f)'],
            ['Erkennung und Verhinderung von Betrug', 'Berechtigtes Interesse (Art. 6.1.f) + Gesetzliche Verpflichtung (Art. 6.1.c)'],
            ['Aufbewahrung von Abrechnungsdaten', 'Gesetzliche Verpflichtung (Art. 6.1.c)'],
            ['Beantwortung von Supportanfragen und Streitfaellen', 'Berechtigtes Interesse (Art. 6.1.f)'],
            ['Einhaltung gesetzlicher und regulatorischer Pflichten', 'Gesetzliche Verpflichtung (Art. 6.1.c)'],
          ],
        },
      ],
    },
    {
      title: '4. Speicherdauer',
      blocks: [
        {
          kind: 'p',
          text: 'Die Daten werden nur so lange gespeichert, wie es fuer die Zwecke, fuer die sie erhoben wurden, unbedingt erforderlich ist:',
        },
        {
          kind: 'table',
          headers: ['Datenkategorie', 'Speicherdauer'],
          rows: [
            ['Daten eines aktiven Kontos', 'Waehrend der gesamten Dauer der Registrierung'],
            ['Kontodaten nach Loeschung', '3 Jahre (zivilrechtliche Verjaehrungsfrist)'],
            ['Transaktionsdaten und Rechnungen', '10 Jahre (gesetzliche Buchhaltungspflicht)'],
            ['Technische und Zugriffsprotokolle', 'Maximal 12 Monate'],
            ['Echtzeit-Geolokalisierungsdaten', 'Nicht dauerhaft gespeichert'],
            ['Veroeffentlichte Bewertungen und Noten', 'Dauer der Kontonutzung + 3 Jahre'],
            ['Marketingdaten (Einwilligung)', 'Bis zum Widerruf der Einwilligung, max. 3 Jahre ohne Aktivitaet'],
            ['Funktionale Cookies', 'Maximal 13 Monate'],
            ['Kundensupport-Daten', '5 Jahre nach Abschluss des Vorgangs'],
          ],
        },
        {
          kind: 'p',
          text: 'Nach Ablauf dieser Fristen werden die Daten entweder endgueltig geloescht oder zu statistischen Zwecken irreversibel anonymisiert.',
        },
      ],
    },
    {
      title: '5. Datenweitergabe',
      blocks: [
        {
          kind: 'p',
          text: 'Ihre personenbezogenen Daten werden niemals verkauft, vermietet oder zu kommerziellen Zwecken an Dritte abgetreten. Eine Weitergabe erfolgt nur in folgenden Faellen:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:Partnerrestaurants:] Nur die fuer Reservierung oder Bestellung erforderlichen Informationen (Vorname, Uhrzeit, Anzahl der Gaeste, gemeldete Allergene). Restaurantpartner verpflichten sich vertraglich, diese Daten nicht fuer andere Zwecke zu verwenden.',
            '[strong:Technische Dienstleister (Auftragsverarbeiter):] Cloud-Hosting, Zahlungsdienstleister, Dienst fuer den Versand transaktionaler E-Mails, Tool fuer Push-Benachrichtigungen. Diese Dienstleister handeln ausschliesslich nach unseren Weisungen und sind durch DSGVO-konforme Auftragsverarbeitungsvertraege gebunden (Art. 28).',
            '[strong:Zustaendige Behoerden:] Bei gerichtlicher Anforderung, behoerdlicher Anordnung oder gesetzlicher Verpflichtung koennen wir Daten an befugte Behoerden uebermitteln.',
            '[strong:Unternehmensumstrukturierung:] Im Fall von Fusion, Uebernahme, Veraeusserung von Vermoegenswerten oder Insolvenzverfahren koennen Ihre Daten auf den Rechtsnachfolger uebergehen, der zur Einhaltung dieser Richtlinie verpflichtet bleibt.',
          ],
        },
      ],
    },
    {
      title: '6. Ubermittlungen ausserhalb des EWR',
      blocks: [
        {
          kind: 'p',
          text: 'Einige unserer technischen Dienstleister koennen ausserhalb des Europaeischen Wirtschaftsraums (EWR), insbesondere in den USA, niedergelassen sein oder Daten dort speichern. In diesem Fall stellen wir sicher, dass diese Uebermittlungen durch geeignete Garantien abgesichert sind:',
        },
        {
          kind: 'ul',
          items: [
            'Angemessenheitsbeschluss der Europaeischen Kommission (z. B. Laender mit gleichwertigem Schutzniveau).',
            'Standardvertragsklauseln (CCT/SCCs), angenommen von der Europaeischen Kommission.',
            'EU-US Data Privacy Framework fuer Uebermittlungen an zertifizierte US-Unternehmen.',
          ],
        },
        {
          kind: 'p',
          text: 'Sie koennen eine Kopie der anwendbaren Garantien erhalten, indem Sie uns unter folgender Adresse kontaktieren: ' + ADMIN + '.',
        },
      ],
    },
    {
      title: '7. Ihre Rechte',
      blocks: [
        {
          kind: 'p',
          text: 'Gemaess DSGVO (Kapitel III) und, sofern anwendbar, dem Schweizer Datenschutzrecht stehen Ihnen folgende Rechte in Bezug auf Ihre personenbezogenen Daten zu:',
        },
        {
          kind: 'cards',
          items: [
            {
              title: 'Auskunftsrecht (Art. 15 DSGVO)',
              desc: 'Bestaetigung erhalten, dass Daten zu Ihrer Person verarbeitet werden, und eine Kopie davon erhalten.',
            },
            {
              title: 'Recht auf Berichtigung (Art. 16)',
              desc: 'Unrichtige Daten berichtigen oder unvollstaendige Daten ergaenzen lassen.',
            },
            {
              title: 'Recht auf Loeschung (Art. 17)',
              desc: 'Loeschung Ihrer Daten in den gesetzlich vorgesehenen Faellen verlangen (Recht auf Vergessenwerden).',
            },
            {
              title: 'Recht auf Einschraenkung (Art. 18)',
              desc: 'Die Verarbeitung Ihrer Daten bei Streitfaellen oder waehrend der Pruefung voruebergehend einschraenken.',
            },
            {
              title: 'Recht auf Datenuebertragbarkeit (Art. 20)',
              desc: 'Ihre Daten in einem strukturierten, gaengigen und maschinenlesbaren Format erhalten oder an einen anderen Verantwortlichen uebermitteln lassen.',
            },
            {
              title: 'Widerspruchsrecht (Art. 21)',
              desc: 'Der Verarbeitung auf Grundlage berechtigter Interessen oder der Verarbeitung zu Direktmarketingzwecken jederzeit widersprechen.',
            },
            {
              title: 'Recht auf Widerruf der Einwilligung',
              desc: 'Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmaessigkeit der vor dem Widerruf erfolgten Verarbeitung beruehrt wird.',
            },
            {
              title: 'Recht, keiner automatisierten Entscheidung unterworfen zu werden (Art. 22)',
              desc: 'Nicht einer Entscheidung mit rechtlicher Wirkung unterworfen werden, die ausschliesslich auf automatisierter Verarbeitung beruht.',
            },
          ].map(({ title, desc }) => ({ title, text: desc })),
        },
        {
          kind: 'p',
          text: 'Um eines dieser Rechte auszuueben, senden Sie Ihre Anfrage an ' + ADMIN + ' und fuegen Sie bei Bedarf einen Identitaetsnachweis bei. Wir antworten innerhalb von maximal [strong:einem Monat] (30 Kalendertage).',
        },
        {
          kind: 'p',
          text: 'Wenn Sie der Ansicht sind, dass Ihre Rechte nicht eingehalten werden, koennen Sie bei der zustaendigen Aufsichtsbehoerde in Ihrem Land Beschwerde einreichen:',
        },
        {
          kind: 'ul',
          items: [
            '[strong:Frankreich:] CNIL - cnil.fr',
            '[strong:Belgien:] APD (Datenschutzbehoerde) - autoriteprotectiondonnees.be',
            '[strong:Schweiz:] EDOEB (Eidgenoessischer Datenschutz- und Oeffentlichkeitsbeauftragter) - edoeb.admin.ch',
            '[strong:Luxemburg:] CNPD - cnpd.public.lu',
          ],
        },
      ],
    },
    {
      title: '8. Cookies und aehnliche Technologien',
      blocks: [
        {
          kind: 'p',
          text: 'Die App und die Website verwenden lokale Speichertechnologien. Folgende Arten von Trackern werden eingesetzt:',
        },
        {
          kind: 'table',
          headers: ['Typ', 'Zweck', 'Einwilligung erforderlich'],
          rows: [
            ['Sitzungs-Cookie', 'Aufrechterhaltung der Verbindung', 'Nein (unbedingt erforderlich)'],
            ['Sprachpraeferenzen (localStorage)', 'Ausgewaehlte Sprache speichern', 'Nein (unbedingt erforderlich)'],
            ['Authentifizierungs-Token', 'Dauerhafte Anmeldung (Option "Angemeldet bleiben")', 'Nein (unbedingt erforderlich)'],
            ['Anonymisierte Analysen', 'Aggregierte Reichweitenmessung', 'Ja (opt-in)'],
            ['Push-Benachrichtigungen', 'Reservierungswarnungen und neue Menues', 'Ja (opt-in)'],
          ],
        },
        {
          kind: 'p',
          text: 'Sie koennen Ihre Einwilligungen jederzeit in den Datenschutzeinstellungen der App verwalten oder widerrufen. Die Ablehnung bestimmter nicht essenzieller Cookies beeintraechtigt den Zugang zu den Hauptfunktionen des Dienstes nicht.',
        },
      ],
    },
    {
      title: '9. Geolokalisierung',
      blocks: [
        {
          kind: 'p',
          text: 'Die Geolokalisierung wird ausschliesslich genutzt, um Ihnen Restaurants in der Naehe Ihrer aktuellen Position anzuzeigen. Sie funktioniert ueber die Geolokalisierungs-API Ihres Betriebssystems (iOS oder Android) und erfordert Ihre ausdrueckliche Zustimmung.',
        },
        {
          kind: 'p',
          text: '[strong:Was wir nicht tun:] Wir speichern keinen Bewegungsverlauf, verfolgen Ihre Position nicht im Hintergrund (auch nicht bei geschlossener App) und verkaufen Ihre Standortdaten nicht an Dritte.',
        },
        {
          kind: 'p',
          text: 'Sie koennen den Zugriff auf den Standort jederzeit in den Einstellungen Ihres Geraets widerrufen. In diesem Fall koennen Sie eine Stadt oder Adresse manuell eingeben, um Restaurants zu suchen.',
        },
      ],
    },
    {
      title: '10. Profiling und automatisierte Entscheidungen',
      blocks: [
        {
          kind: 'p',
          text: 'Wir verwenden Ihre Navigationsdaten (aufgerufene Restaurants, Suchen, Favoriten), um Ihnen personalisierte Vorschlaege fuer Restaurants und Tagesgerichte anzuzeigen, die Sie interessieren koennten. Diese Verarbeitung stellt Profiling im Sinne von Art. 4.4 DSGVO dar.',
        },
        {
          kind: 'p',
          text: 'Dieses Profiling hat [strong:keine rechtliche Wirkung] und fuehrt zu keiner erheblichen Entscheidung, die Sie betrifft. Es dient ausschliesslich der Verbesserung der Relevanz der angezeigten Empfehlungen. Sie koennen diesem Profiling jederzeit widersprechen, indem Sie ' + ADMIN + ' kontaktieren.',
        },
      ],
    },
    {
      title: '11. Sicherheit',
      blocks: [
        {
          kind: 'p',
          text: 'Wir setzen angemessene technische und organisatorische Massnahmen ein, um Ihre Daten gegen unbefugten Zugriff, Verlust, Veraenderung oder Offenlegung zu schuetzen:',
        },
        {
          kind: 'ul',
          items: [
            'Verschluesselung saemtlicher Kommunikation (HTTPS/TLS 1.3).',
            'Hashing von Passwoertern mit bcrypt- oder Argon2-Algorithmus.',
            'Zwei-Faktor-Authentifizierung (2FA) optional verfuegbar.',
            'Zugriff auf Produktionsdaten auf befugtes Personal beschraenkt.',
            'Regelmaessige verschluesselte Backups mit Wiederherstellungstests.',
            'Protokollierung und Ueberwachung von Zugriffen auf sensible Daten.',
            'Formalisierte Richtlinie zum Umgang mit Sicherheitsvorfaellen.',
          ],
        },
        {
          kind: 'p',
          text: 'Trotz dieser Massnahmen ist kein System unfehlbar. Wir empfehlen Ihnen, ein starkes und einzigartiges Passwort fuer Ihr Le Plat du Jour-Konto zu verwenden.',
        },
      ],
    },
    {
      title: '12. Daten von Minderjaehrigen',
      blocks: [
        {
          kind: 'p',
          text: 'Der Dienst richtet sich nicht an Kinder unter 16 Jahren (oder dem in Ihrem Land geltenden digitalen Einwilligungsalter). Wir erheben nicht wissentlich personenbezogene Daten von Minderjaehrigen unterhalb dieses Alters ohne nachpruefbare Zustimmung eines Elternteils oder gesetzlichen Vertreters.',
        },
        {
          kind: 'p',
          text: 'Wenn Sie Elternteil oder gesetzlicher Vertreter sind und der Meinung sind, dass Ihr Kind uns ohne Ihre Zustimmung Daten uebermittelt hat, kontaktieren Sie uns bitte umgehend unter ' + ADMIN + ', damit wir diese schnellstmoeglich loeschen koennen.',
        },
      ],
    },
    {
      title: '13. Benachrichtigung bei Datenschutzverletzungen',
      blocks: [
        {
          kind: 'p',
          text: 'Bei einer Verletzung des Schutzes personenbezogener Daten, die ein Risiko fuer Ihre Rechte und Freiheiten darstellen kann, verpflichten wir uns:',
        },
        {
          kind: 'ul',
          items: [
            'Die zustaendige Aufsichtsbehoerde innerhalb von [strong:72 Stunden] nach Feststellung des Vorfalls zu benachrichtigen (Art. 33 DSGVO).',
            'Sie unverzueglich direkt zu informieren, wenn die Verletzung ein hohes Risiko fuer Ihre Rechte und Freiheiten darstellt (Art. 34 DSGVO).',
            'Den Vorfall und die ergriffenen Korrekturmassnahmen zu dokumentieren.',
          ],
        },
      ],
    },
    {
      title: '14. Aenderungen der Richtlinie',
      blocks: [
        {
          kind: 'p',
          text: 'Diese Datenschutzerklaerung kann aktualisiert werden, um Aenderungen unserer Praktiken, der geltenden Gesetzgebung oder unserer technischen Infrastruktur widerzuspiegeln. Das Datum der letzten Aktualisierung ist oben in diesem Dokument angegeben.',
        },
        {
          kind: 'p',
          text: 'Bei wesentlichen Aenderungen informieren wir Sie mindestens [strong:30 Tage vor] Inkrafttreten der Aenderungen per E-Mail oder In-App-Benachrichtigung. Die fortgesetzte Nutzung des Dienstes nach diesem Datum gilt als Zustimmung zur aktualisierten Richtlinie.',
        },
      ],
    },
  ],
};
